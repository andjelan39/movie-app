<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Movie;
use App\Models\FavMovie;
use App\Models\Genre;
use App\Models\Director;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        Movie::truncate();
        Director::truncate();
        Genre::truncate();
        FavMovie::truncate();

        User::factory(5)->create();

        $user1 = User::create([
            'name' => 'Nikola N',
            'email' => 'nikola@gmail.com',
            'password' => Hash::make('nikola123'),
            'admin' => true,
        ]);
        $user2 = User::create([
            'name' => 'Marko Markovic',
            'email' => 'markomar@gmail.com',
            'password' => Hash::make('marko123'),
            'admin' => false,
        ]);

        $genre1 = Genre::create(['name' => 'thriller']);
        $genre2 = Genre::create(['name' => 'action']);
        $genre3 = Genre::create(['name' => 'comedy']);
        $genre4 = Genre::create(['name' => 'drama']);
        $genre5 = Genre::create(['name' => 'crime']);
        $genre6 = Genre::create(['name' => 'romance']);
        $genre7 = Genre::create(['name' => 'horror']);
        $genre8 = Genre::create(['name' => 'animated']);

        $director1 = Director::create([
            'name' => 'Christopher Nolan',
            'country' => 'UK'
        ]);
        $director2 = Director::create([
            'name' => 'Mary Harron',
            'country' => 'Canada'
        ]);
        $director3 = Director::create([
            'name' => 'Denis Villeneuve',
            'country' => 'Canada'
        ]);
        $director4 = Director::create([
            'name' => 'David Fincher',
            'country' => 'USA'
        ]);
        $director5 = Director::create([
            'name' => 'Wong Kar-wai',
            'country' => 'China'
        ]);
        $director6 = Director::create([
            'name' => 'Martin Scorsese',
            'country' => 'USA'
        ]);
        $director7 = Director::create([
            'name' => 'Quentin Tarantino',
            'country' => 'USA'
        ]);
        $director8 = Director::create([
            'name' => 'Danny Boyle',
            'country' => 'UK'
        ]);

        $movie1 = Movie::create([
            'title' => 'American Psycho',
            'release_year' => '2000',
            'description' => 'In New York City in 1987, a handsome, young urban professional, Patrick Bateman (Christian Bale), lives a second life as a gruesome serial killer by night. The cast is filled by the detective (Willem Dafoe), the fiance, the mistress, the coworker (Jared Leto), and the secretary (Chloë Sevigny). This is a biting, wry comedy examining the elements that make a man a monster.',
            'cast' => 'Christian Bale, Willem Dafoe, Chloë Sevigny',
            'image' => 'images/bateman.jpg',
            'genre_id' => $genre7->id,
            'director_id' => $director2->id,
            'user_id' => $user1->id
        ]);

        $movie2 = Movie::create([
            'title' => 'Fallen Angels',
            'release_year' => '1995',
            'description' => 'This Hong Kong-set crime drama features two intertwined storylines—one tells the story of a hitman wishing to leave the criminal underworld (Leon Lai), and his agent, who is infatuated with him (Michelle Reis). The other story is of a mute ex-convict on the run from the police (Takeshi Kaneshiro) and a mentally unstable woman dumped by her boyfriend (Charlie Yeung).',
            'cast' => 'Leon Lai, Michelle Reis, Takeshi Kaneshiro',
            'image' => 'images/fallenangels.jpg',
            'genre_id' => $genre4->id,
            'director_id' => $director5->id,
            'user_id' => $user1->id
        ]);

        FavMovie::factory()->create([
            'user_id' => $user1->id,
            'movie_id' => $movie2->id,
        ]);

    }
}