<?php

namespace App\Models\TiktokApi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;
    protected $table="users";
    protected $fillable = [
        'username',
        'email',
        'fullname',
        'age',
        'gender',
        'avatar',
        'password',
        'description',
        'facebook',
        'created_at',
        'updated_at',
    ];
}
