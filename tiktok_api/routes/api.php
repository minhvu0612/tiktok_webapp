<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// use controller
use App\Http\Controllers\TiktokApi\UserController;
use App\Http\Controllers\TiktokApi\VideoController;
use App\Http\Controllers\TiktokApi\FollowController;
use App\Http\Controllers\TiktokApi\HashtagController;
use App\Http\Controllers\TiktokApi\LikeVideoController;
use App\Http\Controllers\TiktokApi\CommentController;
use App\Http\Controllers\TiktokApi\ReplyController;
use App\Http\Controllers\TiktokApi\LikeCommentController;
use App\Http\Controllers\TiktokApi\NortificationController;
use App\Http\Controllers\RCMDTController;
use App\Models\TiktokApi\Nortification;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});





Route::post('/signup', [UserController::class, 'saveData']);
Route::get('/load_users', [UserController::class, 'loadData']);
Route::get('/get_user/{id}', [UserController::class, 'getData']);
Route::post('/login', [UserController::class, 'getDataByEmailAndPassword']);
Route::post('/update_user', [UserController::class, 'updateData']);


// videos

Route::post('/upload_video', [VideoController::class, 'saveVideo']);
Route::get('/load_videos', [VideoController::class, 'getAllVideos']);
Route::get('/get_video/user/{id}', [VideoController::class, 'getVideoByUserId']);
Route::get('/get_video/{id}', [VideoController::class, 'getVideoById']);


// follows

Route::post('/follow', [FollowController::class, 'follow']);
Route::post('/check_follow', [FollowController::class, 'checkFollow']);
Route::post('/unfollow', [FollowController::class, 'unfollow']);
Route::get('/count_follow/{id}', [FollowController::class, 'countFollow']);
Route::get('/following_user/{id}', [FollowController::class, 'followingUser']);
Route::get('/following_user_list/{id}', [FollowController::class, 'followingUserList']);


//hashtags

Route::get('/load_hashtag', [HashtagController::class, 'load_hashtag']);


// likeVideo

Route::post('/like_video', [LikeVideoController::class, 'save_like']);
Route::post('/check_like_video', [LikeVideoController::class, 'check']);
Route::get('/count_like/{id}', [LikeVideoController::class, 'countLike']);
Route::get('/count_video_like/{id}', [LikeVideoController::class, 'getLikeByUserId']);
Route::post('/dislike_video', [LikeVideoController::class, 'delete']);
Route::get('/load_all_like_video/{id}', [LikeVideoController::class, 'getLikeCount']);



// comments

Route::post('/comments', [CommentController::class, 'save_comment']);
Route::post('/load_comments', [CommentController::class, 'load_comments']);


//replies
Route::post('/replies', [ReplyController::class, 'save_reply']);
Route::post('/load_replies', [ReplyController::class, 'load_replies']);



//likeComment


Route::post('/like_comment', [LikeCommentController::class, 'save_like']);
Route::post('/delete_like_cmt', [LikeCommentController::class, 'delete_like_cmt']);
Route::post('/delete_like_rep', [LikeCommentController::class, 'delete_like_rep']);
Route::get('/get_nortifications/{id}',[NortificationController::class,'getNortification']);
Route::post('/mark_read',[NortificationController::class,'markAsRead']);


// search
Route::post('/search_users', [UserController::class, 'search']);
Route::post('/search_videos', [VideoController::class, 'search']);

// RCMDT
Route:: post('/rcmdt', [RCMDTController::class, 'choose_K_point']);