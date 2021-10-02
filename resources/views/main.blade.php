@extends('layouts.header')

@section('content')

    <div class="container">
        <div class="row">

            @foreach($news as $k)
                <div class="col-md-3">
                        <div class="card" style="width: 18rem; ">
                            @if($k->image != null)
                                <img src="{{asset($k->image)}}" class="card-img-top" alt="{{$k->title}}">
                            @endif
                            <div class="card-body">
                                <h5 class="card-title">{{$k->title}}</h5>

                                <a href="{{route('certainNews',$k->id)}}" class="btn btn-primary">Подробнее</a>
                            </div>
                        </div>
                </div>
            @endforeach


        </div>
    </div>

@endsection
