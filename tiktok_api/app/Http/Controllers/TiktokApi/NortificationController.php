<?php

namespace App\Http\Controllers\TiktokApi;

use App\Http\Controllers\Controller;
use App\Models\TiktokApi\Comments;
use App\Models\TiktokApi\Nortification;
use App\Models\TiktokApi\Videos;
use App\Models\User;
use Illuminate\Http\Request;

class NortificationController extends Controller
{
    public function getNortification($id)
    {
        $list_norti = Nortification::where('user_id', $id)->get();
        for ($i = 0; $i < count($list_norti); $i++) {
            $list_norti[$i]->sender = User::findOrFail($list_norti[$i]->sender_id);
            if ($list_norti[$i]->nortificable_type == Comments::class) {
                $comment = Comments::findOrFail($list_norti[$i]->nortificable_id);
                $video = Videos::findOrFail($comment->video_id);
                $list_norti[$i]->video = $video;
            }
            unset($list_norti[$i]->sender_id);
        }
        return $list_norti;
    }
    public function markAsRead(Request $request)
    {
        $norti = Nortification::findOrFail($request->id);
        $norti->read = 1;
        $norti->save();
        return ["success" => true, 200];
    }
}
