<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no,shrink-to-fit=no">
    <meta name="csrf-token" content="{{ Session::token() }}">
    <title>Новости</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="{{asset('css/style.css')}}" rel="stylesheet">

    @yield('css')
    @yield('meta')
</head>

<body id="page-top">

        <header>
            <div class="container header">
                <div class="row">
                    <div class="col-md-4 col-4">
                        <div class="logo-text">
                            <a href="/">
                                Новости
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4 hide"></div>
                    <div class="col-md-4 col-8">
                        <div class="addButton">
                            <a href="{{route('news.index')}}">
                                <button type="button" class="btn btn-primary"> <i class="fas fa-plus"></i> Добавить новости</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </header>

        @yield('content')

        <footer id="footer">

        </footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/f442ea367e.js"></script>



        @yield('js')
</body>

</html>
