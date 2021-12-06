<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->longText('url');
            $table->longText('status');
            $table->integer('user_id')->unsigned();
            $table->integer('music_background_id')->unsigned();
            $table->foreign('music_background_id')->references('id')->on(('music_backgrounds'));
            $table->foreign('user_id')->references('id')->on(('users'));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('videos');
    }
}
