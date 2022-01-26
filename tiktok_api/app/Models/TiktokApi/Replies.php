<?php

namespace App\Models\TiktokApi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Replies extends Model
{
    use HasFactory;
    protected $table="replies";
    protected $fillable = [
        'content',
        'user_id',
        'comment_id',
        'created_at',
        'updated_at',
    ];

    protected $with = ['user'];

    public function user()
    {
        return $this->belongsTo(Users::class);
    }

    public function comment()
    {
        return $this->belongsTo(Comments::class);
    }
}
