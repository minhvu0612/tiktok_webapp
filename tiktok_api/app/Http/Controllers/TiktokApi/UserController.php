<?php

namespace App\Http\Controllers\TiktokApi;

use App\Events\LoginEvent;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

// user models
use App\Models\TiktokApi\Users;
use App\Models\User;

class UserController extends Controller
{
    //Xử lý users

    // save data
    public function SaveData(Request $request)
    {
        $all_user = Users::all();
        for ($x = 0; $x < count($all_user); $x ++){
            if (strcmp($all_user[$x]->username, $request->username) == 0){
                return response()->json([
                    'alert' => 501,
                ]);
            }
            if (strcmp($all_user[$x]->email, $request->email) == 0){
                return response()->json([
                    'alert' => 601,
                ]);
            }
        }
        $user = new Users();
        $user->username = $request->username;
        $user->email = $request->email;
        $user->fullname = $request->fullname;
        $user->age = $request->age;
        $user->gender = $request->gender;
        if ($request->gender == 'male'){
            $user->avatar = "https://res.cloudinary.com/diw0u2vl1/image/upload/v1641639419/default_avatar/mnuue0txf2qv1zhpsbno.jpg";
        }
        else{
            $user->avatar = "https://res.cloudinary.com/diw0u2vl1/image/upload/v1641639373/default_avatar/c2xkuolzbms9xhsxh7cr.png";
        }
        $user->password = md5($request->password);
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $user->created_at = date("Y-m-d H:i:s");
        $user->updated_at = date("Y-m-d H:i:s");
        $user->save();
        return response()->json([
            'alert' => 200,
            'data' => $user,
        ]);
    }

    // get data by email and password
    public function getDataByEmailAndPassword(Request $request){
            $all_user = Users::all();
            for ($x = 0; $x < count($all_user); $x ++){
                if (strcmp($all_user[$x]->email, $request->email) == 0 && strcmp($all_user[$x]->password, md5($request->password)) == 0){
                    return response()->json([
                        'alert' => 200,
                        'data' => $all_user[$x],
                    ]);
                }
            }
            return response()->json([
                'alert' => 301,
            ]);
    }

    // load data
    public function loadData(){
        $users = Users::all();
        return response()->json([
            'alert' => 200,
            'data' => $users, 
        ]);
    }

    // get data
    public function getData($id){
        $user = Users::find($id);
        return response()->json([
            'alert' => 200,
            'data' => $user, 
        ]);
    }


    // update data
    public function updateData(Request $request){
        $all_user = Users::all();
        for ($x = 0; $x < count($all_user); $x ++){
            if ($all_user[$x]->id != $request->id){
                if (strcmp($all_user[$x]->username, $request->username) == 0){
                    return response()->json([
                        'alert' => 501,
                    ]);
                }
            }
        }
        $user = Users::find($request->id);
        $user->username = $request->username;
        $user->fullname = $request->fullname;
        if (!empty($request->description)){
            $user->description = $request->description;
        }
        if (!empty($request->facebook)){
            $user->facebook = $request->facebook;
        }
        $user->age = $request->age;
        $user->gender = $request->gender;
        $user->avatar = $request->avatar;
        $user->save();
        return response()->json([
            'alert' => 200,
            'data' => Users::find($request->id),
        ]);
    }

    //search 
    public function search(Request $request){
        $search_all = Users::all();
        $search_array = [];
        $n = 0;
        for ($x = 0; $x < count($search_all); $x++){
            if (strpos(strtolower($search_all[$x]->username), strtolower($request->value)) !== false){
                $search_array[$n] = $search_all[$x];
                $n++;
            }
        }
        return response()->json([
            'data' => $search_array,
        ]);
    }
}
