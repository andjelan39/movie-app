<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class DirectorMovieController extends Controller
{
    public function index($director_id)
    {
        $movies = Movie::get()->where('director_id', $director_id);
        if(is_null($movies)){
            return response()->json('Data not found', 404);
        }
        return response()->json($movies);
    }
}
