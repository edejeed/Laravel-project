<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
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


  //    Route::post('login', 'Auth\@login')->name('login');
  //    Route::post('register', 'Auth\AuthController@register');
  //    Route::group([
  //       'middleware' => 'auth:api'
  //     ], function() {
  //         Route::get('logout', 'Auth\AuthController@logout');
  //         Route::get('user', 'Auth\AuthController @user');
  //  });


  // //...


// //...
Route::post('register', [AuthController::class, "register"]);
Route::post('login', [AuthController::class, "login"]);

Route::group(["middleware" => ["auth:api"]], function(){

    Route::get("profile", [AuthController::class, "profile"]);
    Route::post("logout", [AuthController::class, "logout"]);
});

Route::apiResource('blog', BlogController::class)->middleware('auth:api');
