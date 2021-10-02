<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News;

class IndexController extends Controller
{
    //

    public function main(){

        $news = News::paginate(150);

        return view('main',compact('news'));
    }

    public function certainNews($id){

        $news =News::findOrFail($id);

        return view('certainNews',compact('news'));
    }
}
