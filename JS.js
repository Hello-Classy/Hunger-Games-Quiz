
$( ".career" ).click(function() {
  $( this ).addClass( "presidentsnow" ).siblings(".presidentsnow").removeClass("presidentsnow");
  
});

$(".submit").click(function() {
  
  var n1 = $(".a.presidentsnow").length;
  
  var n2 = $(".b.presidentsnow").length;
 
  var n3 = $(".c.presidentsnow").length;
 
  var n4 = $(".d.presidentsnow").length;  
  
  
  
  if ((n1 >= n2)&&(n1 >= n3)&&(n1 >= n4)) {
    $( "span" ).html("You almost make it, but you are slaughtered in the last round by a fellow tribute. You probably nearly killed a judge, and got your camp infested with bugs.");
  }
  if ((n2 > n1)&&(n2 >= n3)&&(n2 >= n4)) {
    $( "span" ).html("You were the solo victor of the games. Congrats! You make your way back to your district with your head held high.") ;
  }
    
  if ((n3 > n1)&&(n3 > n2)&&(n3 >= n4)) {
    $( "span" ).html("You are pretty good at this, but the thought of killing others terrifies you. Sorry, but there are sacrifices to be made, and if you don't kill, they will.");
  }
    
  if ((n4 > n1)&&(n4 > n2)&&(n4 > n3)) {
    $( "span" ).html("You get knocked out early on. Sorry, but this game also takes wit. You can't just go around hacking everyone to pieces. Also, people are decieving. If you let that girl up, she'll stab you right away.");
  }
    
});