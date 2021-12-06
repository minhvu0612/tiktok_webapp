<?php

namespace Database\Factories;

use App\Models\Video;
use Illuminate\Database\Eloquent\Factories\Factory;

class VideoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Video::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'url' =>'https://v16.tiktokcdn.com/a0b33424378237202c49dc787cf7bd58/61a7e01d/video/tos/alisg/tos-alisg-pve-0037/540933125a60494288d96075cba2b09b/?a=1180&br=1334&bt=667&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&ft=wZmo9Fpckag3-I&l=2021120114500701025100318914370F8C&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2l3cTY6ZjVwOTMzODgzNEApNjQ8aTNpZmVpN2k4O2g2N2c0ZGVfcjRfb2NgLS1kLy1zczQzYzZhMjA2LS4uLzBeYV86Yw%3D%3D&vl=&vr=',
            'user_id' => $this->faker->numberBetween(1,20),
            'status'=> $this->faker->sentence(6,true),
            'music_background_id' => $this->faker->numberBetween(1,10),
        ];
    }
}
