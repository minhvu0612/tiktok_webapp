<?php

namespace App\Http\Controllers\TiktokApi;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TiktokApi\Hashtags;

class HashtagController extends Controller
{
    //
    public function load_hashtag(){
        $all_hashtag = Hashtags::all();
        return response()->json([
            'alert' => 200,
            'data' => $all_hashtag,
        ]);
    }
}
