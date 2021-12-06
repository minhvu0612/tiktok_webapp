<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Hashtag;
class HashtagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Hashtag::factory(10)->create();
    }
}
