<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function show()
    {
        $user = Auth::user();

        return response()->json([
            'profile_picture' => $user->profile_picture
        ]);
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'profile_picture' => 'nullable|image|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = Auth::user();

        if ($request->hasFile('profile_picture')) {
            $foto = $request->file('profile_picture');
            $base64Image = base64_encode(file_get_contents($foto->path()));
            $user->profile_picture = $base64Image;
        }

        $user->save();

        return response()->json([
            'message' => 'update success'
        ],200);
    }
}
