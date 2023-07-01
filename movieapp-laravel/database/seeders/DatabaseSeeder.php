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
            'name' => 'Dario Argento',
            'country' => 'Italy'
        ]);
        $director2 = Director::create([
            'name' => 'Mary Harron',
            'country' => 'Canada'
        ]);
        $director3 = Director::create([
            'name' => 'Christopher Nolan',
            'country' => 'UK'
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
            'name' => 'David Lynch',
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

        Director::insert([
            [
                'name' => 'Joel Coen',
                'country' => 'USA'
            ],
            [
                'name' => 'Roger Michell',
                'country' => 'South Africa'
            ],
            [
                'name' => 'Sidney Lumet',
                'country' => 'USA'
            ],
            [
                'name' => 'Brian De Palma',
                'country' => 'USA'
            ],
            [
                'name' => 'Dennis Dugan',
                'country' => 'USA'
            ],
            [
                'name' => 'Tom McGrath',
                'country' => 'USA'
            ],
            [
                'name' => 'Dan Gilroy',
                'country' => 'USA'
            ],
            [
                'name' => 'Alex Proyas',
                'country' => 'Australia'
            ],
        ]);


        $movie1 = Movie::create([
            'title' => 'American Psycho',
            'release_year' => '2000',
            'description' => 'In New York City in 1987, a handsome, young urban professional, Patrick Bateman, lives a second life as a gruesome serial killer by night. The cast is filled by the detective, the fiance, the mistress, the coworker, and the secretary. This is a biting, wry comedy examining the elements that make a man a monster.',
            'cast' => 'Christian Bale, Willem Dafoe, Chloë Sevigny',
            'image' => 'images/bateman.jpg',
            'genre_id' => $genre7->id,
            'director_id' => $director1->id,
            'user_id' => $user1->id
        ]);

        $movie2 = Movie::create([
            'title' => 'Suspiria',
            'release_year' => '1977',
            'description' => 'Suzy travels to Germany to attend ballet school. When she arrives, no one lets her in, and she sees Pat, another student, fleeing from the school. When Pat reaches her apartment, she is murdered. The next day, Suzy is admitted to her new school, but has a difficult time settling in. As more people die, Suzy uncovers secret history of the place.',
            'cast' => 'Jessica Harper, Eva Axen',
            'image' => 'images/suspiria.jpg',
            'genre_id' => $genre7->id,
            'director_id' => $director5->id,
            'user_id' => $user1->id
        ]);

        FavMovie::factory()->create([
            'user_id' => $user1->id,
            'movie_id' => $movie2->id,
        ]);

    }
}