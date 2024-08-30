<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    public function index(){
        $data = Blog::all();

        if ($data->isEmpty()) {
            return response()->json([
                'message' => 'data not found'
            ], 404);
        }

        return BlogResource::collection($data);
    }

    public function show($id)
    {
        $blog = Blog::find($id);

        if (!$blog) {
            return response()->json([
                'message' => 'data not found'
            ],404);
        }

        return new BlogResource($blog);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:png,jpg,jpeg|max:2048',
            'title' => 'required',
            'description' => 'required',
            'author' => 'required',
            'tags' => 'required',
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

        Blog::create([
            'image' => $fotoPath,
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'author' => $request->input('author'),
            'tags' => $request->input('tags'),
            'date' => now()
        ]);

        return response()->json([
            'message' => 'create success'
        ],201);

    }

    public function update(Request $request, $id)
    {
        $blog = Blog::find($id);

        if (!$blog) {
            return response()->json([
                'message' => 'data not found'
            ],404);
        }

        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:png,jpg,jpeg|max:2048',
            'title' => 'required',
            'description' => 'required',
            'author' => 'required',
            'tags' => 'required'
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
            $blog->image = $base64Image;
        }

        $blog->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'author' => $request->input('author'),
            'tags' => $request->input('tags'),
        ]);

        $blog->save();

        return response()->json([
            'message' => 'update success'
        ],200);

    }

    public function destroy($id)
    {
        $blog = Blog::find($id);

        if (!$blog) {
            return response()->json([
                'message' => 'data not found'
            ],404);
        }

        $blog->delete();

        return response()->json([
            'message' => 'delete success'
        ],200);
    }
}
