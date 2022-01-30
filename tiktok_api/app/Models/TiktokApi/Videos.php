<?php

namespace App\Models\TiktokApi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Videos extends Model
{
    use HasFactory;
    protected $table="videos";
    protected $fillable = [
        'url',
        'background_video',
        'description',
        'time_view',
        'user_id',
        'hashtag_name',
        'hashtag_id',
        'created_at',
        'updated_at',
    ];

    protected $with = ['user', 'hashtag'];

    public function user()
    {
        return $this->belongsTo(Users::class, 'user_id', 'id');
    }

    public function hashtag()
    {
        return $this->belongsTo(Hashtags::class, 'hashtag_id', 'id');
    }
}
