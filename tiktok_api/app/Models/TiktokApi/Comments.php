<?php

namespace App\Models\TiktokApi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    use HasFactory;
    protected $table="comments";
    protected $fillable = [
        'content',
        'user_id',
        'video_id',
        'created_at',
        'updated_at',
    ];

    protected $with = ['user'];

    public function user()
    {
        return $this->belongsTo(Users::class, 'user_id', 'id');
    }

    public function video()
    {
        return $this->belongsTo(Videos::class, 'video_id', 'id');
    }
}
