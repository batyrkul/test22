@extends('layouts.header')

@section('content')

    <div class="container">
        <div class="row news-cont">

            <div class="col-md-12">
                <h1>{{$news->title}}</h1>

                @if($news->image !=  null)
                    <div class="one-image">
                        <img src="{{asset($news->image)}}"/>
                    </div>

                    @endif

                {!! $news->text !!}


            </div>


        </div>
    </div>

@endsection
