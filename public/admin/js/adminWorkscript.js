$.ajaxSetup({
    headers:{
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }

});

$( document ).ready(function() {

    //$("#sortable" ).sortable();

    $(".editPassword").click(function () {
        $(".showp").show();
        $(".hidePass").show();
        $(this).hide();
        $(".showp").val('');
    });

    $(".hidePass").click(function () {
        $(".editPassword").show();
        $(".showp").hide();
        $(this).hide();
        $(".showp").val('nochange');
    });

    $("#catFiltr").change(function () {

        var id = $(this).val();

        $.get( "/admin/getAjaxFiltr/"+id, function( data ) {
            $( ".ajax-res" ).html( data );
        });

    });

    $("#newPrice").change(function () {
        console.log("test");
        if($(this).is(":checked")){
            $(".newpr").fadeIn();
        }else{
            $(".newpr").fadeOut();
        }

    });

    $("select[name=category]").change(function () {

        var id = $(this).val();
        $( ".subcat" ).attr("disabled", true);
        $.get( "/admin/getSubcat/"+id, function( data ) {

            $( ".subcat" ).html( data );
            $( ".subcat" ).removeAttr("disabled");
        });

    });

    $("body").on("change",".q_edit select[name=category]",function () {

        console.log("test");

        var id = $(this).val();
        $( ".q_edit .subcat" ).attr("disabled", true);

        $.get( "/admin/getSubcat/"+id, function( data ) {

            $( ".q_edit .subcat" ).html( data );
            $( ".q_edit .subcat" ).removeAttr("disabled");
        });

    });


    $("body").on("click",".igm-ls img", function () {
        var src = $(this).attr("data-type");
        console.log(src);
        $("input[data-type="+src+"]").remove();
        $(this).remove();

    });

    $("#datepicker2").datepicker({
        dateFormat: 'yy-mm-dd',
        yearRange: '1930:2040',
        changeYear: true,
    });


    $(".f-name").keyup(function () {
        var data = {
            name:$(this).val(),
            firma:$(".firma").val(),
            category:$(".f-cat").val(),
            subcategory:$(".f-sub").val()
        }





    });

    $(".f-cat").change(function () {
        var data = {
            name:$(".f-name").val(),
            firma:$(".firma").val(),
            category:$(this).val(),
            subcategory:$(".f-sub").val()
        }



    });

    $(".Qedit").click(function (){
        var id = $(this).attr("data-id");

            $("#Qrrs").html('<div class="spinner-border"></div>')

        $.post( "/admin/Qedit",{id:id}, function( datas ) {


            $("#Qrrs").html(datas);

        });

    });

    $(".f-firma").change(function () {
        var data = {
            name:$(".f-name").val(),
            firma:$(this).val(),
            category:$(".f-cat").val(),
            subcategory:$(".f-sub").val()
        }


    });

    $(".f-sub").change(function () {
        var data = {
            name:$(".f-name").val(),
            category:$(".f-cat").val(),
            firma:$(".firma").val(),
            subcategory:$(this).val()
        }

        console.log(data);



    });

    $(".more-info").click(function () {

            var id = $(this).attr("data-id");

            $.post( "/admin/MoreInfo",{id:id}, function( datas ) {
                    $(".min-info").html(datas);
            });

    });

    $(".pvBut").click(function () {
        var data = {
            userid:$(this).attr("data-userid"),
            token:$(this).attr("data-token"),
        }

        console.log(data);



        $("#dataRes").html("<div class=\"spinner-border\"></div>");

        $.post( "/admin/pvBut",data, function( data ) {

            $("#dataRes").html(data);

        })


    });


    $("#username").keyup(function () {
        var data ={
            value: $(this).val()
        }

        $.post( "/admin/userFilter",data, function( data ) {

            $(".ajax-u-r").html(data);


        });

    });

    $(".sn-button").click(function () {
        $(".send-trs").fadeToggle();
    });

    $(".user-add-cur").click(function () {

        var id = $(this).attr("data-id");

        console.log(id);

        $.get( "/admin/getCur/"+id, function( data ) {

                console.log(data);

                $("#curUser").html(data);

        });


    });

    $('.nakladnoy').change(function () {

        var favorite = [];
        $.each($("input[name='nakladnoy']:checked"), function(){
            favorite.push($(this).val());
        });

        $("#downL").attr("href","/admin/downloadNak?orderId="+favorite);

    });

    $("#chRole").change(function (){
        var id = $(this).val();

        if(id == 9){
            $(".addFrim").css({"display":"flex"});
        }else{
            $(".addFrim").removeAttr("style");
        }
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
