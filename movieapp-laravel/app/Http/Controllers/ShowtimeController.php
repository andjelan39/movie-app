<?php

namespace App\Http\Controllers;

use App\Http\Resources\ShowtimeCollection;
use App\Http\Resources\ShowtimeResource;
use App\Models\Showtime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ShowtimeController extends Controller
{
    /*
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies = Showtime::all();
        return new ShowtimeCollection($movies);
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
            'movie_id' => 'required',
            'cinema' => 'required|string|max:255',
            'st_date' => 'required|date_format:Y-m-d',
            'st_time' => 'required|date_format:H:i',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }

        $showtime = Showtime::create([
            'movie_id' => $request->input('movie_id'),
            'cinema' => $request->cinema,
            'st_date' => $request->st_date,
            'st_time' => $request->st_time,
        ]);

        return response()->json(['Showtime created successfully.', new ShowtimeResource($showtime), 'success' => true]);
    }

    /*
     * Display the specified resource.
     *
     * @param  \App\Models\Showtime  $showtime
     * @return \Illuminate\Http\Response
     */
    public function show($showtime_id)
    {
        $showtime = Showtime::find($showtime_id);
        if(is_null($showtime)){
            return response()->json('Data not found', 404);
        }
        return new ShowtimeResource($showtime);
    }

    /*
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Showtime  $showtime
     * @return \Illuminate\Http\Response
     */
    public function edit(Showtime $showtime)
    {
        //
    }

    /*
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Showtime  $showtime
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Showtime $showtime)
    {
        //
    }

    /*
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Showtime  $showtime
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $showtime_id)
    {
        $showtime = Showtime::findOrFail($showtime_id);
        if(is_null($showtime)){
            return response()->json('Showtime does not exist.', 404);
        }
        $showtime->delete();

        return response()->json(['Showtime deleted successfully.']);
    }
}
