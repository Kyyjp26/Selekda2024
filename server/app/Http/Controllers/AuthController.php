<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'username' => 'required|unique:users',
            'email' => 'required|unique:users',
            'password' => 'required',
            'birth_date' => 'required|date',
            'phone_number' => 'required',
            'profile_picture' => 'nullable|image|max:2048',
            'date' => 'nullable|date',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'invalid register',
                'erorrs' => $validator->errors()
            ],422);
        }

        $fotoPath = null;

        if ($request->hasFile('profile_picture')) {
            $foto = $request->file('profile_picture');
            $base64Image = base64_encode(file_get_contents($foto->path()));
            $fotoPath = $base64Image;
        }

        $user = User::create([
            'name' => $request->input('name'),
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'birth_date' => $request->input('birth_date'),
            'phone_number' => $request->input('phone_number'),
            'profile_picture' => $fotoPath,
            'date' => now()
        ]);

        return response()->json([
            'message' => 'register sucess',
            'data' => $user
        ],201);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'invalid login'
            ],401);
        }

        $validated = $validator->safe()->only(['username', 'password']);
        if (!Auth::attempt($validated)) {
            return response()->json([
                'message' => 'invalid login'
            ],401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login successfully',
            'token' =>  $token
        ], 200);
    }

    public function logout()
    {
        $user = Auth::user();

        $user->tokens()->delete();

        return response()->json([
            'message' => 'logout success'
        ], 200);
    }

    public function userUpdate(Request $request ,$username)
    {
        $user = User::where('username', $username)->first();

        if (!$user) {
            return response()->json([
                'message' => 'data not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'username' => 'required|unique:users',
            'email' => 'required|unique:users',
            'password' => 'required',
            'birth_date' => 'required|date',
            'phone_number' => 'required',
            'profile_picture' => 'nullable|image|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        if ($request->hasFile('profile_picture')) {
            $foto = $request->file('profile_picture');
            $base64Image = base64_encode(file_get_contents($foto->path()));
            $user->profile_picture = $base64Image;
        }

        $user->update([
            'name' => $request->input('name'),
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'birth_date' => $request->input('birth_date'),
            'phone_number' => $request->input('phone_number'),
        ]);
        $user->save();

        return response()->json([
            'message' => 'update succes'
        ], 200);
    }
}
