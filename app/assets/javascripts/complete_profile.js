/**
 * Created by jd on 3/17/15.
 */
$(function(){

    $("#edit_user_4").submit(function(e){
        var a = "";

        $('.check_para_fundaciones :checked').each(function() { //loop through each checkbox
            a = a +";"+ $(this).next().val();  //select all checkboxes with class "checkbox1"
        });

        $("#hiddenf").val(a);


        console.log("$a >> "+ a);
    });

});