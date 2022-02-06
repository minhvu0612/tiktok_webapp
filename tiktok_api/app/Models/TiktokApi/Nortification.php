<?php

namespace App\Models\TiktokApi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nortification extends Model
{
    use HasFactory;
    protected $table = "nortifications";
    protected $fillable = [
        'id', 'user_id', 'nortificable_id', 'nortificable_type', 'created_at'
    ];
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H'
    ];
}
