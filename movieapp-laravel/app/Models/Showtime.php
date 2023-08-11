<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Showtime extends Model
{
    use HasFactory;

    protected $fillable = [
        'movie_id',
        'cinema',
        'st_date',
        'st_time',
    ];

    public function movie()
    {
        return $this->belongsTo(Movie::class, 'movie_id');
    }

    public function bookings(){

        return $this->hasMany(Booking::class);
    }
}
