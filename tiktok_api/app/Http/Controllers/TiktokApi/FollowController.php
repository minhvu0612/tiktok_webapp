<?php

namespace App\Http\Controllers\TiktokApi;

use App\Events\LoginEvent;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TiktokApi\Follows;
use App\Models\TiktokApi\Nortification;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class FollowController extends Controller
{
    //
    const FOLLOW = "FOLLOW";
    public function follow(Request $request)
    {

        $follow = new Follows();
        $follow->user_id_1 = $request->user_id_1;
        $follow->user_id_2 = $request->user_id_2;
        $follow->save();
        $norti = new Nortification();
        $norti->sender_id= $request->user_id_1;
        $norti->user_id = $request->user_id_2;
        $norti->nortificable_id = $follow->id;
        $norti->nortificable_type = Follows::class;
        $norti->save();
        event(new LoginEvent($request->user_id_1,User::findOrFail($request->user_id_2), Follows::class,$norti->id));
        return response()->json([
            'alert' => 200,
        ]);
    }

    public function checkFollow(Request $request)
    {
        if (DB::table('follows')->where('user_id_1', $request->user_id_1)->where('user_id_2', $request->user_id_2)->exists()) {
            return response()->json(['alert' => 200]);
        } else return response()->json(['alert' => 401]);
    }

    public function unfollow(Request $request)
    {
        DB::delete('delete from follows where user_id_1 = ? and user_id_2 = ?', [$request->user_id_1, $request->user_id_2]);
        return response()->json([
            'alert' => 200,
        ]);
    }

    public function countFollow($id)
    {
        $countFollowers = DB::table('follows')->where('user_id_2', $id)->count();
        $countFollowing = DB::table('follows')->where('user_id_1', $id)->count();
        return response()->json([
            'alert' => 200,
            'followers' => $countFollowers,
            'following' => $countFollowing,
        ]);
    }

    public function followingUser($id)
    {
        $following = DB::table('follows')->where('user_id_1', $id)->get();
        return response()->json([
            'alert' => 200,
            'following' => $following,
        ]);
    }


    public function followingUserList($id)
    {
        $following = Follows::all();
        $array = [];
        $n = 0;
        for ($x = 0; $x < count($following); $x++) {
            if ($following[$x]->user_id_1 == $id) {
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
