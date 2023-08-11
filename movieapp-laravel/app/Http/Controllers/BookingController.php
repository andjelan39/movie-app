<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookingCollection;
use App\Http\Resources\BookingResource;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class BookingController extends Controller
{
    /*
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bookings = Booking::all();
        return new BookingCollection($bookings);
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
            'showtime_id' => 'required',
            'ticket_qty' => 'required|integer'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }

        $booking = Booking::create([
            'showtime_id' => $request->input('showtime_id'),
            'ticket_qty' => $request->ticket_qty,
            'user_id' => Auth::user()->id,
        ]);

        return response()->json(['Booking created successfully.', new BookingResource($booking), 'success' => true]);
    }

    /*
     * Display the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function show($booking_id)
    {
        $booking = Booking::find($booking_id);
        if(is_null($booking)){
            return response()->json('Data not found', 404);
        }
        return new BookingResource($booking);
    }

    /*
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function edit(Booking $booking)
    {
        //
    }

    /*
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Booking $booking)
    {
        //
    }

    /*
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $booking_id)
    {
        $booking = Booking::findOrFail($booking_id);
        if(is_null($booking)){
            return response()->json('Booking does not exist.', 404);
        }
        $booking->delete();

        return response()->json(['Booking deleted successfully.']);
    }
}
