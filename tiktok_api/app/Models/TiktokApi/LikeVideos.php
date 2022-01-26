<?php

namespace App\Models\TiktokApi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LikeVideos extends Model
{
    use HasFactory;
    protected $table="like_videos";
    protected $fillable = [
        'status',
        'user_id',
        'video_id',
    ];

    protected $with = ['video'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function video()
    {
        return $this->belongsTo(Videos::class, 'video_id', 'id');
    }
}
