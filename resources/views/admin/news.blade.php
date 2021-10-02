@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <a href="{{route('news.create')}}">
                <button type="button" class="btn btn-success">Добавить новости</button>
            </a>
            <br/>
            <br/>

        </div>
        <div class="col-md-12">
            <ul class="list-group">
                @foreach($news as $k)
                <li class="list-group-item list-img">

                    @if($k->image != null) <img  src="{{asset($k->image)}}" > @endif    {{$k->title}}

                    <div class="right flex">
                        <div>
                            <a href="{{route('news.edit',$k->id)}}">
                                <button type="button" class="btn btn-warning"> <span><i class="fas fa-edit"></i></span></button>

                            </a>
                        </div>
                        <div>
                            <form action="{{ route('news.destroy',$k->id) }}" onclick="return confirm('Вы действительно хотите удалить')" method="POST">

                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                            </form>
                        </div>

                    </div>
                </li>
                @endforeach
            </ul>
            <br/>
            {{$news->links()}}
        </div>

    </div>
@endsection
