<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use App\Http\Resources\BannerResource;
use Illuminate\Support\Facades\Validator;

class BannerController extends Controller
{
    public function index(){
        $data = Banner::all();

        if ($data->isEmpty()) {
            return response()->json([
                'message' => 'data not found'
            ], 404);
        }

        return BannerResource::collection($data);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required|image|mimes:png,jpg,jpeg|max:2048',
            'description' => 'required',
            'status' => 'required',
            'date' => 'nullable|date'
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

        Banner::create([
            'title' => $request->input('title'),
            'image' => $fotoPath,
            'description' => $request->input('description'),
            'status' => $request->input('status'),
            'date' => now()
        ]);

        return response()->json([
            'message' => 'Create success'
        ],201);

    }

    public function update(Request $request, $id)
    {
        $banner = Banner::find($id);

        if (!$banner) {
            return response()->json([
                'message' => 'Data not found'
            ],404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required|image|mimes:png,jpg,jpeg|max:2048',
            'description' => 'required',
            'status' => 'required',
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
            $banner->image = $base64Image;
        }

        $banner->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'status' => $request->input('status'),
        ]);

        $banner->save();

        return response()->json([
            'message' => 'Update success'
        ],200);

    }

    public function destroy($id)
    {
        $banner = Banner::find($id);

        if (!$banner) {
            return response()->json([
                'message' => 'Data not found'
            ],404);
        }

        $banner->delete();

        return response()->json([
            'message' => 'Delete success'
        ],200);
    }
}
