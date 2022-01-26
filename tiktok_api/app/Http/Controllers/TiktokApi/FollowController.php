<?php

namespace App\Http\Controllers\TiktokApi;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TiktokApi\Follows;

use Illuminate\Support\Facades\DB;

class FollowController extends Controller
{
    //
    public function follow(Request $request){
        $follow = new Follows();
        $follow->user_id_1 = $request->user_id_1;
        $follow->user_id_2 = $request->user_id_2;
        $follow->save();
        return response()->json([
            'alert' => 200,
        ]);
    }

    public function checkFollow(Request $request){
        if (DB::table('follows')->where('user_id_1', $request->user_id_1)->where('user_id_2', $request->user_id_2)->exists()) {
            return response()->json(['alert' => 200]);
        }
        else return response()->json(['alert' => 401]);
    }

    public function unfollow(Request $request){
        DB::delete('delete from follows where user_id_1 = ? and user_id_2 = ?',[$request->user_id_1, $request->user_id_2]);
        return response()->json([
            'alert' => 200,
        ]);
    }

    public function countFollow($id){
        $countFollowers = DB::table('follows')->where('user_id_2', $id)->count();
        $countFollowing = DB::table('follows')->where('user_id_1', $id)->count();
        return response()->json([
            'alert' => 200,
            'followers' => $countFollowers,
            'following' => $countFollowing,
        ]);
    }

    public function followingUser($id){
        $following = DB::table('follows')->where('user_id_1', $id)->get();
        return response()->json([
            'alert' => 200,
            'following' => $following,
        ]);
    }


    public function followingUserList($id){
        $following = Follows::all();
        $array = [];
        $n = 0;
        for ($x = 0; $x < count($following); $x++){
            if ($following[$x]->user_id_1 == $id){
                $array[$n] = $following[$x];
                $n++;
            }
        }
        return response()->json([
            'alert' => 200,
            'following' => $array,
        ]);
    }
}
