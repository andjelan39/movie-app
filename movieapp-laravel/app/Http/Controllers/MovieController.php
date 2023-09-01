<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieCollection;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class MovieController extends Controller
{
    /*
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies = Movie::all();
        return new MovieCollection($movies);
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
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'release_year' => 'required|integer',
            'description' => 'required|string',
            'cast' => 'required|string',
            'image' => 'required|string',
            'genre_id' => 'required',
            'director_id' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }

        $movie = Movie::create([
            'title' => $request->title,
            'slug' => $request->slug,
            'release_year' => $request->release_year,
            'description' => $request->description,
            'cast' => $request->cast,
            'image' => $request->image,
            'genre_id' => $request->input('genre_id'),
            'director_id' => $request->input('director_id'),
            'user_id' => Auth::user()->id,
        ]);

        return response()->json(['Movie created successfully.', new MovieResource($movie), 'success' => true]);

    }

    /*
     * Display the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show($movie_id)
    {
        $movie = Movie::find($movie_id);
        if(is_null($movie)){
            return response()->json('Data not found', 404);
        }
        return new MovieResource($movie);
    }

    /*
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       /* $movie = Movie::find($id);
        if($movie){
            return response()->json([
                'status' => 200,
                'movie' => $movie,
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Movie not found',
            ]);
        }*/

    }

    /*
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $movie_id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'release_year' => 'required|integer',
            'description' => 'required|string',
            'cast' => 'required|string',
            'image' => 'required|string',
            'genre_id' => 'required',
            'director_id' => 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $movie = Movie::find($movie_id);
        $movie->title = $request->title;
        $movie->slug = $request->slug;
        $movie->release_year = $request->release_year;
        $movie->description = $request->description;
        $movie->cast = $request->cast;
        $movie->image = $request->image;
        $movie->genre_id = $request->input('genre_id');
        $movie->director_id = $request->input('director_id');

        $movie->save();

        return response()->json(['Movie updated successfully.', new MovieResource($movie), 'success' => true]);
    }

    /*
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $movie_id)
    {
        $movie = Movie::findOrFail($movie_id);
        if(is_null($movie)){
            return response()->json('Movie does not exist.', 404);
        }
        $movie->delete();

        return response()->json(['Movie deleted successfully.']);
    }
}
