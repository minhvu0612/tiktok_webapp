<?php

namespace App\Events;

use App\Models\TiktokApi\Comments;
use App\Models\TiktokApi\Nortification;
use App\Models\TiktokApi\Users;
use App\Models\TiktokApi\Videos;
use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class LoginEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public $user;
    public $type;
    public $sender_id;
    public $norti_id;
    public function __construct($sender_id, User $user, $type, $norti_id)
    {
        $this->sender_id = $sender_id;
        $this->user = $user;
        $this->type = $type;
        $this->norti_id = $norti_id;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('user.' . $this->user->id);
    }
    public function broadcastWith()
    {
        // $list_norti = Nortification::where('user_id', $this->user->id)->get();
        // for ($i = 0; $i < count($list_norti); $i++) {
        //     $list_norti[$i]->sender = Users::findOrFail($list_norti[$i]->sender_id);
        //     if ($list_norti[$i]->nortificable_type == Comments::class) {
        //         $comment = Comments::findOrFail($list_norti[$i]->nortificable_id);
        //         $video = Videos::findOrFail($comment->video_id);
        //         $list_norti[$i]->video = $video;
        //     }
        //     unset($list_norti[$i]->sender_id);
        // }
        $norti = Nortification::findOrFail($this->norti_id);
        $norti->sender = Users::findOrFail($norti->sender_id);
        if ($norti->nortificable_type == Comments::class) {
            $comment = Comments::findOrFail($norti->nortificable_id);
            $video = Videos::findOrFail($comment->video_id);
            $norti->video = $video;
        }
        unset($norti->sender_id);
        return ['user' => $this->user, 'type' => $this->type, 'norti' => $norti];
    }
}
