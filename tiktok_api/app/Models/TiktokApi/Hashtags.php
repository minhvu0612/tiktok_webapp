<?php

namespace App\Models\TiktokApi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hashtags extends Model
{
    use HasFactory;
    protected $table="hashtags";
    protected $fillable = [
        'hashtag_name',
        'created_at',
        'updated_at',
    ];
}
