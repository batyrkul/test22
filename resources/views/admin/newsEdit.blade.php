@extends('layouts.admin')

@section('js')

    <script src="{{asset('ckeditor/ckeditor.js')}}"></script>
    <script>
        // Replace the <textarea id="editor1"> with a CKEditor
        // instance, using default configuration.
        CKEDITOR.replace( 'text' );
    </script>
@endsection

@section('content')
    <div class="row">
        <div class="col-md-12">
            <h2 class="news-h2">Редактировать новости</h2>
            @if($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach($errors->all() as $error)
                            <li>{{$error}}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form action="{{ route('news.update',$news->id) }}" method="post" enctype="multipart/form-data"  >
                <div class="form-group">
                    <label>Тема</label>
                    <input type="text" name="title" class="form-control" value="{{$news->title}}" required/>
                </div>
                <div class="form-group">
                    <label>Текст</label>
                    <textarea name="text" id="text" class="form-control" required>{{$news->text}}</textarea>
                </div>
                <div class="form-group">
                    <label>Картинка</label>
                    <input type="file" name="image">
                    <br/>
                    @if($news->image != null)
                        <div>
                            <img style="width: 100px" src="{{asset($news->image)}}">
                        </div>
                        @endif
                </div>
                @csrf
                @method('PUT')
                <button type="submit" class="btn btn-danger">Сохранить</button>
            </form>
        </div>
    </div>
@endsection
