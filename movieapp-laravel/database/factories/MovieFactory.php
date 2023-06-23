<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Genre;
use App\Models\Director;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->word(),
            'release_year' => $this->faker->year(),
            'description' => $this->faker->paragraph(),
            'cast' => $this->faker->name(),
            'image' => 'images/bateman.jpg',
            'genre_id' => Genre::factory(),
            'director_id' => Director::factory(),
            'user_id' => User::factory()   
        ];
    }
}
