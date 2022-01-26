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

    public function load_replies($id){
        $all_rep = Replies::all();
        $array = [];
        $n = 0;
        for ($x = 0; $x < count($all_rep); $x++){
            if ($all_rep[$x]->comment_id == $id){
                $array[$n] = $all_rep[$x];
                $n++;
            }
        }
        return response()->json([
            'alert' => 200,
            'data' => $array,
        ]);
    }
}
