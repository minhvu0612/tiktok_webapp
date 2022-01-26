<?php

namespace App\Http\Controllers\TiktokApi;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TiktokApi\Videos;
use App\Models\TiktokApi\Hashtags;

class VideoController extends Controller
{
    //save video
    public function saveVideo(Request $request){
        $video = new Videos();
        $video->url = $request->url;
        $video->description = $request->description;
        $video->hashtag_name = strtolower($request->hashtag_name);
        $video->time_view = 0.0;
        $video->user_id = $request->user_id;
        $all_hashtag = Hashtags::all();
        $x = 0;
        for ($i = 0; $i < count($all_hashtag); $i ++){
            if (strcmp($all_hashtag[$i]->hashtag_name, strtolower($request->hashtag_name)) == 0){
                $x = $all_hashtag[$i]->id;
                break;
            }
        }
        if ($x){
            $video->hashtag_id = $x;
        }
        else{
            $hashtag = new Hashtags();
            $hashtag->hashtag_name = strtolower($request->hashtag_name);
            $hashtag->save();
            $video->hashtag_id = $hashtag->id;
        }
        $video->save();
        return response()->json([
            'alert' => 200,
            'data' => $video,
        ]);
    }

    public function getAllVideos(){
        $all_video = Videos::all();
        return response()->json([
            'alert' => 200,
            'data' => $all_video,
        ]);
    }

    public function  getVideoByUserId($id){
        $all_video = Videos::all();
        $user_id_video = [];
        $n = 0;
        for ($i = 0; $i < count($all_video); $i++){
            if ($all_video[$i]->user_id == $id){
                $user_id_video[$n] = $all_video[$i];
                $n++;
            }
        }
        return response()->json([
            'alert' => 200,
            'data' => $user_id_video,
        ]);
    }

    public function getVideoById($id){
        $video = Videos::find($id);
        return response()->json([
            'alert' => 200,
            'data'  => $video,
        ]);
    }
}
