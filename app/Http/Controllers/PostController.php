<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = News::paginate(150);
        //
       return view("admin/news",compact('news'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //



        return  view("admin/newsAdd");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'text' => 'required',
        ]);

        $input = $request->all();

        if ($image = $request->file('image')) {

            $date = date("Y-m",time());
            $path = 'photo/'.$date;
            $gall = rand() . '.' .$image->getClientOriginalExtension();

            $image->move(public_path($path), $gall);

            $gall_new_name = $path."/".$gall;
            $catImg =  $gall_new_name;
            $imgc = Image::make(public_path($gall_new_name));
            $imgc->fit(350,350);
            $imgc->save();

            $input['image'] = $catImg;
        }
        $input['user_id'] = Auth::user()->id;


        News::create($input);


        return redirect()->route('news.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news)
    {

        return  view("admin/newsEdit",compact('news'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, News $news)
    {
        $request->validate([
            'title' => 'required',
            'text' => 'required',
        ]);


        $input = $request->all();

        if ($image = $request->file('image')) {

            $date = date("Y-m",time());
            $path = 'photo/'.$date;
            $gall = rand() . '.' .$image->getClientOriginalExtension();

            $image->move(public_path($path), $gall);

            $gall_new_name = $path."/".$gall;
            $catImg =  $gall_new_name;
            $imgc = Image::make(public_path($gall_new_name));
            $imgc->fit(350,350);
            $imgc->save();

            $input['image'] = $catImg;
        }
        $input['user_id'] = Auth::user()->id;


        $news->update($input);

        return redirect()->route('news.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(News $news)
    {
        $news->delete();

        return redirect()->route('news.index');
    }
}
