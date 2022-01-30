<?php

namespace App\Http\Controllers\TiktokApi;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// use models
use App\Models\TiktokApi\Replies;

class ReplyController extends Controller
{
    //
    public function save_reply(Request $request){
        $rep = new Replies();
        $rep->content = $request->content;
        $rep->user_id = $request->user_id;
        $rep->comment_id = $request->comment_id;
        $rep->save();
        return response()->json([
            'alert' => 200,
        ]);
    }

    public function load_replies(Request $request){
        $all_rep = Replies::all();
        $array_count = [];
        $array_check = [];
        $n = 0;
        for ($x = 0; $x < count($all_rep); $x++){
            $array_count[$n] = LikeCommentController::count_like_reply($all_rep[$x]->id);
            $array_check[$n] = LikeCommentController::check_rep($request->user_id, $all_rep[$x]->id);
            $n++;
        }
        return response()->json([
            'alert' => 200,
            'data' => $all_rep,
            'data_count' => $array_count,
            'data_check' => $array_check,
        ]);
    }
}
