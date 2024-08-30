<?php

namespace App\Http\Controllers;

use App\Models\Portofolio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\PortofolioResource;

class PortofolioController extends Controller
{
    public function index(){
        $data = Portofolio::all();

        if ($data->isEmpty()) {
            return response()->json([
                'message' => 'data not found'
            ], 404);
        }

        return PortofolioResource::collection($data);
    }

    public function show($id)
    {
        $portofolio = Portofolio::find($id);

        if (!$portofolio) {
            return response()->json([
                'message' => 'data not found'
            ],404);
        }

        return new PortofolioResource($portofolio);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required|image|mimes:png,jpg,jpeg|max:2048',
            'description' => 'required',
            'author' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation failed',
                'errors' => $validator->errors()
            ]);
        }

        $fotoPath = null;

        if ($request->hasFile('image')) {
            $foto = $request->file('image');
            $base64Image = base64_encode(file_get_contents($foto->path()));
            $fotoPath = $base64Image;
        }

        Portofolio::create([
            'title' => $request->input('title'),
            'image' => $fotoPath,
            'description' => $request->input('description'),
            'author' => $request->input('author')
        ]);

        return response()->json([
            'message' => 'create success'
        ],201);

    }

    public function update(Request $request, $id)
    {
        $portofolio = Portofolio::find($id);

        if (!$portofolio) {
            return response()->json([
                'message' => 'data not found'
            ],404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required|image|mimes:png,jpg,jpeg|max:2048',
            'description' => 'required',
            'author' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        if ($request->hasFile('image')) {
            $foto = $request->file('image');
            $base64Image = base64_encode(file_get_contents($foto->path()));
            $portofolio->image = $base64Image;
        }

        $portofolio->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'author' => $request->input('author')
        ]);

        $portofolio->save();

        return response()->json([
            'message' => 'update success'
        ],200);

    }

    public function destroy($id)
    {
        $portofolio = Portofolio::find($id);

        if (!$portofolio) {
            return response()->json([
                'message' => 'data not found'
            ],404);
        }

        $portofolio->delete();

        return response()->json([
            'message' => 'delete success'
        ],200);
    }
}
