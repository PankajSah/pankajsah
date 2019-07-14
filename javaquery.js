$(".myclass").mouseover(function() {
    $(this).find(" > div").css("background-color","red");
}).mouseout(function() {
    $(this).find(" > div").css("background-color","transparent");
});;


function pank()
      { 
  
         if( $("#text").css({"display": "block"}))
              {
            $("#btn").css({"display": "none"})
            $("#btn1").css({"display": "inline"})
             
              }
    else
        {
             $("#btn1").css({"display": "inline"})
             
        }
}
function pan()
 { 
  if($("#text").css({"display":"none"}))
         {
    $("#btn").css({"display":"inline"})
    $("#btn1").css({"display":"none"}) 
         }
    else{
        $("#btn1").css({"display": "none"}) 
    }
}
function pankaj()
{
    if($("#message").val()=="")
        {
            alert("fill out the form");
        }
 else {
           
           $.ajax({

	                 url : 'resume.php',
	                 
	                 data: {text:$("#message").val()},
	                 
	                 type : 'POST',

	                   beforeSend : function (response) {
                           $('#loading').fadeIn();

	                 },
	                 success : function (response) {
	                 	$('#loading').fadeOut();
                         alert(response);
                         $("#message").val("");
				    }
              
                        
						 });
           
           
       }
   }






   

