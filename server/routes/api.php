<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\UserMiddleware;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\BlogController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/logout', [AuthController::class, 'logout']);

    Route::middleware([UserMiddleware::class])->group(function(){
        Route::get('/user', [UserController::class, 'show']);
        Route::post('/user', [UserController::class, 'update']);
    });

    Route::middleware([AdminMiddleware::class])->group(function () {
        Route::get('/banner', [BannerController::class, 'index']);
        Route::post('/banner/create', [BannerController::class, 'store']);
        Route::post('/banner/{id}', [BannerController::class, 'update']);
        Route::delete('/banner/{id}', [BannerController::class, 'destroy']);

        Route::get('/blog', [BlogController::class, 'index']);
        Route::get('/blog/{id}', [BlogController::class, 'show']);
        Route::post('/blog/create', [BlogController::class, 'store']);
        Route::post('/blog/{id}', [BlogController::class, 'update']);
        Route::delete('/blog/{id}', [BlogController::class, 'destroy']);
    });
});
