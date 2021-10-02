<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [App\Http\Controllers\IndexController::class, 'main'])->name('main');
Route::get('/certainNews/{id}', [App\Http\Controllers\IndexController::class, 'certainNews'])->name('certainNews');

Auth::routes();



Route::prefix('adm')->group(function () {

    Route::get('/', [App\Http\Controllers\AdminController::class, 'admin'])->name('admin');

    Route::resource('/news', App\Http\Controllers\PostController::class);

});
