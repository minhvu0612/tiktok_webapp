<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\HashtagSeeder;
use Database\Seeders\VideoSeeder;
use Database\Seeders\MusicbackgroundSeeder;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(UserSeeder::class,20);
        $this->call(MusicbackgroundSeeder::class,10);
        $this->call(VideoSeeder::class,10);
        $this->call(HashtagSeeder::class,10);
    }
}
