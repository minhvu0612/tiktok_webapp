<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        // \App\Models\User::factory(10)->create();
        DB::table('users')->insert([
            'fullname' => Str::random(10),
            'email' => Str::random(10) . '@gmail.com',
            'password' => md5('123456'),
            'username' => $faker->userName,
            'age' => 21,
            'gender' => 'male',
            'avatar' => 'https://res.cloudinary.com/diw0u2vl1/image/upload/v1641639419/default_avatar/mnuue0txf2qv1zhpsbno.jpg'
        ]);
        DB::table('users')->insert([
            'fullname' => Str::random(10),
            'email' => Str::random(10) . '@gmail.com',
            'password' => md5('123456'),
            'username' => $faker->userName,
            'age' => 21,
            'gender' => 'male',
            'avatar' => 'https://res.cloudinary.com/diw0u2vl1/image/upload/v1641639419/default_avatar/mnuue0txf2qv1zhpsbno.jpg'

        ]);
    }
}
