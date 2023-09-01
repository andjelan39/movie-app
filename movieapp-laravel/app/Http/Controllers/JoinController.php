<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use App\Models\Booking;

class JoinController extends Controller
{
    public function join(int $userId){
        $booking = Booking::join('showtimes', 'showtimes.id', '=', 'bookings.showtime_id')
                            ->join('users', 'users.id', '=', 'bookings.user_id')
                            ->join('movies', 'movies.id', '=', 'showtimes.movie_id')
                            ->where('users.id','=', $userId)
                            ->get(['bookings.id','movies.title', 'showtimes.cinema', 'showtimes.st_date', 'showtimes.st_time', 'bookings.ticket_qty']);
        return response()->json($booking);
    }
}
