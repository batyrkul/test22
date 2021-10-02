
$.ajaxSetup({
	headers:{
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}

});


$(window).scroll(function(event){
    var st = $(this).scrollTop();

    var width = $( window ).width();

    //if(width > 800){
        if(st > 80){
           $(".head2").addClass("fixed");
        }else{
           $(".head2").removeClass("fixed");
        }
    //}



});


$( document ).ready(function() {

	var width = $( window ).width();


        $(".active-bon-but").click(function () {

            if(width < 800){
                console.log("test");
                $(".cat-left-menu").hide('slide', {direction: 'right'}, 300);
            }
        });


	$('.menu a[href^="#"]').on('click', function (e) {


				e.preventDefault();
				if(width < 800){
					$(".m-overlay").toggle("slide" );
				}


				var target = this.hash;
				var $target = $(target);
				console.log($target.offset().top);
				$('html, body').animate({
					'scrollTop': $target.offset().top-250
				}, 1000, 'swing');
	});

    $(".slick-brand").slick({
        infinite: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:"<div class='a-left control-c prev slick-prev'><i class='fas fa-caret-left'></i></div>",
        nextArrow:"<div class='a-right control-c next slick-next'><i class='fas fa-caret-right'></i></div>"
    });




   // $(".slick-pr-item-01").slick(initProd());

    function initProd(){

        return {
            infinite: true,
            autoplay:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            prevArrow: false,
            nextArrow: false,
        }
    }

    $(".brand-item").slick({
        infinite: true,
        autoplay:true,
        slidesToShow: 8,
        slidesToScroll: 8,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    $(".cat-hover").hover(function () {

        var id = $(this).attr("data-id");

        $(".sub-cat-l[data-id="+id+"]").fadeIn();
        $(".sub-cat-l[data-id!="+id+"]").fadeOut();

        });

    $(".more-cat button").click(function () {

        if($(".hdt").is(":visible")){
            $(".hdt").hide();
            $(this).text("Еще категории")
        }else{
            $(".hdt").show();
            $(this).text("Скрыть")
        }



    });


    $(document).mousemove(function(event){
        var x = event.pageX;
        var y = event.pageY;

        if(x >= 550){

            $(".sub-cat-l").hide();
        }

        if(y >= 900){
            $(".sub-cat-l").hide();

        }

    });



    $(".item-pr-01").hover(function () {
        $(this).toggleClass("hovered-item")
    });

    $(".ajax-res-01").on('click', '.pagination a', function(event){
        event.preventDefault();
        var page = $(this).attr('href').split('page=')[1];
        fetch_data(page);
    });

    $("select[name=category]").change(function () {

        var id = $(this).val();
        $( ".subcat" ).attr("disabled", true);

        $.get( "/admin/getSubcat/"+id, function( data ) {

            console.log(data);

            $( ".subcat" ).html( data );
            $( ".subcat" ).removeAttr("disabled");
        });

    });

    $(".search-but").click(function () {

        $(".search-in").fadeIn();

    });

    $(".close-search").click(function () {
        $(".search-in").fadeOut();
    });

    $("section").click(function(){
        if ($(".search-in").is(':visible') ){
            $(".search-in").fadeOut();
        }
    });

    function fetch_data(page)
    {
        //$(".slick-pr-item-01").slick('unslick');

        $(".ajax-res-01").css({"opacity":"0.3"});
        $.ajax({
            url:"/fetchPag/mainp?page="+page,
            success:function(data)
            {
                $('.ajax-res-01').html(data);
               // $(".slick-pr-item-01").not('.slick-initialized').slick(initProd());
                $(".ajax-res-01").removeAttr("style");

                var $target = $(".hit-sale");
                console.log($target.offset().top);
                $('html, body').animate({
                    'scrollTop':  $(".allProd").offset().top
                }, 1000, 'swing');


            }
        });

    }


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        prevArrow:"<div class='a-left control-c prev slick-prev'><i class='fas fa-caret-left'></i></div>",
        nextArrow:"<div class='a-right control-c next slick-next'><i class='fas fa-caret-right'></i></div>",
        centerMode: true,
        focusOnSelect: true
    });

    $(".slider-for .slick-track").lightGallery();

    $("#dostavka").change(function () {

            if($(this).is(':checked')){

                $(".delv").show();

            }else{
                $(".delv").hide();
            }
    });

    $("body").on("click", ".addBasket", function () {
            var basket = {
                product_id : $(this).attr("data-id"),
                total: $(".counter[data-id='"+$(this).attr("data-id")+"'] input[name=total]").val()
            }


            console.log(basket);


            $.post( "/addBasket",basket, function( data ) {

                if(data.total > 0){

                    $(".basket-counter").text(data.total);
                    $(".basket-counter").toggleClass("animated pulse");

                    $(".cert321 .addBasket").text("добавлен в корзину");

                    $(".addBasket[data-id="+basket.product_id+"]").html("<i class=\"fas fa-cart-arrow-down\"></i>");

                    $(".cert321 .addBasket").prop("disabled",true)

                    $(".addBasket[data-id="+basket.product_id+"]").prop("disabled",true)
                }


            });


    });

    $("#buy").click(function () {
        $(".order-block").fadeToggle();
    });

    $(".close-ord").click(function () {
        $(".order-block").fadeOut();
    });

    $("#total").change(function () {
        var total = $(this).val();

        $(".order-total").val(total);
    })

    $('[data-toggle="tooltip"]').tooltip();

    /*
    $("#orderGood2").submit(function (e) {
        e.preventDefault();
        var data =$(this).serialize();

        console.log(data);

        $.post( "/genOrder",data, function( html ) {

            if(html == 1){

                $("#orderGood2").html("Cпасибо за ваш заказ. заказы можно посмотреть <a href=''>здесь</a>");
            }
        });


    });*/

    /*

    $('#orderGood').submit(function (e) {
        e.preventDefault();

        var data =$(this).serialize();

        $.post( "/orderGood",data, function( data ) {

                console.log(data);

                if(data == 1){

                    $("#orderGood").html("Cпасибо за ваш заказ. заказы можно посмотреть <a href=''>здесь</a>");
                }

        })


    });*/


    $(".catItem a").hover(function () {

        let id = $(this).attr('data-mid');

        $(".sub-block[data-mid="+id+"]").show();
        $(".sub-block[data-mid!="+id+"]").hide();

    })


    $(".mbar").click(function () {

        $(".cat-left-menu").show('slide', {direction: 'right'}, 300);


    });

    $(".close-l-menu").click(function () {
        $(".ovr-lay").hide('slide', {direction: 'left'}, 300);
    });

    $(".mCatmenu").click(function () {

        $(".ovr-lay").toggle("slide" );

    });

    $(".close-cat-Menu").click(function () {
        $(".cat-left-menu").hide('slide', {direction: 'right'}, 300);
    });

    $(".item-pr-01").hover(function (){
        $(this).toggleClass("itemHovered")
    });

    $(".catalog").click(function () {
        $(".abs-menu").toggle();
    })

    $(".close-abs-menu").click(function () {
        $(".abs-menu").hide()
    })

    $(".ovr-lay").click(function (e) {

             if($(".ovr-lay").is(':visible')){

                 if (e.target.className != "menu-left-list") {
                     $(".ovr-lay").hide('slide', {direction: 'left'}, 300);
                }
            }


    });

    $("section").click(function (e) {

        if($(".abs-menu").is(':visible')){

            $(".abs-menu").hide();
        }

    });



    $(".mob-search").click(function () {
        $(".mobile-search").fadeToggle();
    });

    $("body").on("click",".hear",function () {

        let data = {
            id:$(this).attr("data-id"),
            like:$(this).attr("data-like"),
        }

        $.post( "/setLike",data, function( html ) {
            if(html == 1){
                $(".hear[data-id="+data.id+"]").html("<i class=\"fas fa-heart\"></i>")
                $(".hear[data-id="+data.id+"]").attr("data-like",1)
            }else{
                $(".hear[data-id="+data.id+"]").html(" <i class=\"far fa-heart\"></i>")
                $(".hear[data-id="+data.id+"]").attr("data-like",0)
            }

        })

    });


    $(".voteB").click(function (){
        var data = {
            id:$(this).attr("data-id"),
            type:$(this).attr("data-type"),
        }
        console.log(data);
        $.post( "/setVote",data, function( data ) {

                console.log(data);

                if(data != 0){

                    $(".lke").html("("+data.liked+")");
                    $(".uke").html("("+data.unliked+")");

                    $(".drt").hide();

                }else{
                    $(".drt").show();
                }


        });

    });


});



function myFunction() {

    var copyText = document.getElementById("mylink");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

}



