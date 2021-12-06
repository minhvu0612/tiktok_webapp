<?php

namespace Database\Factories;

use App\Models\Musicbackground;
use Illuminate\Database\Eloquent\Factories\Factory;

class MusicbackgroundFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Musicbackground::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'user_id' => $this->faker->numberBetween(1,20),
        ];
    }
}
