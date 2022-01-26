<?php

namespace App\Models\TiktokApi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follows extends Model
{
    use HasFactory;
    protected $table="follows";
    protected $fillable = [
        'user_id_1',
        'user_id_2',
    ];

    protected $with = ['user_2'];

    public function user_1()
    {
        return $this->belongsTo(Users::class, 'user_id_1', 'id');
    }

    public function user_2()
    {
        return $this->belongsTo(Users::class, 'user_id_2', 'id');
    }
}
