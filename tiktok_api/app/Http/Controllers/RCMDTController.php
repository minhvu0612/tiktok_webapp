<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TiktokApi\Users;

class RCMDTController extends Controller
{
    //

    public static function Tinh_KC($x1, $y1, $x2, $y2){
        return sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
    }

    public function choose_K_point(Request $request){
       $all = Users::all();
       $array = [];
       $n = 0;
       $k = 8;
       for ($x = 0; $x < count($all); $x++){
           if ($all[$x]->gender == $request->gender){
               $array[$n] = sqrt(($all[$x]->age-$request->age)*($all[$x]->age-$request->age) + 16);
           }
           else{
            $array[$n] = sqrt(($all[$x]->age-$request->age)*($all[$x]->age-$request->age) + 0);
           }
           $n++;
       }
       return response()->json([
           'data' => $array,
       ]);
    }
}
