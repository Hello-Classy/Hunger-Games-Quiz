
$( ".box" ).click(function() {
  $( this ).addClass( "selected" ).siblings(".selected").removeClass("selected");
  
});

$(".submit").click(function() {
  
  var n1 = $(".a.selected").length;
  
  var n2 = $(".b.selected").length;
 
  var n3 = $(".c.selected").length;
 
  var n4 = $(".d.selected").length;  
  
  
  
  if ((n1 >= n2)&&(n1 >= n3)&&(n1 >= n4)) {
    $( "span" ).html("You almost make it, but you are slaughtered in the last round by a fellow tribute.");
  }
  if ((n2 > n1)&&(n2 >= n3)&&(n2 >= n4)) {
    $( "span" ).html("You were the solo victor of the games. Congrats! You make your way back to your district with your head held high.") ;
  }
    
  if ((n3 > n1)&&(n3 > n2)&&(n3 >= n4)) {
    $( "span" ).html("You die of trackerjacker stings");
  }
    
  if ((n4 > n1)&&(n4 > n2)&&(n4 > n3)) {
    $( "span" ).html("You get knocked out early on. Sorry, but this game also takes wit. You can't just go around hacking everyone to pieces.");
  }
		
});