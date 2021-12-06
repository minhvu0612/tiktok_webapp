<?php

namespace Database\Seeders;

use App\Models\MusicBackground;
use Illuminate\Database\Seeder;

class MusicbackgroundSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MusicBackground::factory(10)->create();
    }
}
