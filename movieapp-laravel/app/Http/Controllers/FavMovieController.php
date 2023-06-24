<?php

namespace App\Http\Controllers;

use App\Http\Resources\FavMovieCollection;
use App\Http\Resources\FavMovieResource;
use App\Models\FavMovie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FavMovieController extends Controller
{
    /*
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_id = auth()->user()->id;
        $movies = FavMovie::get()->where('user_id', $user_id);
        if (is_null($movies)) {
            return response()->json('Data not found', 404);
        }
        return new FavMovieCollection($movies);
    }

    /*
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /*
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'movie_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $favMovie = FavMovie::create([
            'movie_id' => $request->movie_id,
            'user_id' => auth()->user()->id,
        ]);

        return response()->json(['Movie added to favourites successfully.', new FavMovieResource($favMovie)]);
    }

    /*
     * Display the specified resource.
     *
     * @param  \App\Models\FavMovie  $favMovie
     * @return \Illuminate\Http\Response
     */
    public function show(int $favMovie_id)
    {
        $favMovie = FavMovie::get()->where('id', $favMovie_id)->first();
        if (!$favMovie) {
            return response()->json('Data not found', 404);
        }
        return new FavMovieResource($favMovie);
    }

    /*
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FavMovie  $favMovie
     * @return \Illuminate\Http\Response
     */
    public function edit(FavMovie $favMovie)
    {
        //
    }

    /*
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FavMovie  $favMovie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FavMovie $favMovie)
    {
        //
    }

    /*
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FavMovie  $favMovie
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $favMovie_id)
    {
        $favMovie = FavMovie::get()->where('id', $favMovie_id)->first();
        if (!$favMovie) {
            return response()->json('Data not found', 404);
        }

        $favMovie->delete();
        return response()->json('Movie removed from favourites successfully.');
    }
}
