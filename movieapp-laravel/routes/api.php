<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\DirectorController;
use App\Http\Controllers\DirectorMovieController;
use App\Http\Controllers\FavMovieController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\GenreMovieController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function (Request $request) {
        return auth()->user();
    }
    );
    
    Route::resource('/users', UserController::class)->only(['show', 'index']);
    Route::resource('/genres', GenreController::class)->only(['show', 'index']);
    Route::resource('/directors', DirectorController::class)->only(['show', 'index']);

    Route::get('/directors/{id}/movies', [DirectorMovieController::class, 'index'])->name('directors.movies.index');
    Route::get('/genres/{id}/movies', [GenreMovieController::class, 'index'])->name('genres.movies.index'); 
    
    Route::resource('/movies', MovieController::class)->only(['show', 'index', 'update', 'store', 'destroy']);
    Route::resource('/favmovies', FavMovieController::class)->only(['index', 'show', 'store', 'destroy']);

    Route::post('/logout', [AuthController::class, 'logout']);
});

