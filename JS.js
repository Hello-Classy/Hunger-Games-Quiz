
$( ".box" ).click(function() {
  $( this ).addClass( "selected" ).siblings(".selected").removeClass("selected");
  
});

$(".submit").click(function() {
  
  var n1 = $(".a.selected").length;
  
  var n2 = $(".b.selected").length;
 
  var n3 = $(".c.selected").length;
 
  var n4 = $(".d.selected").length;  
  
  
  
  if ((n1 >= n2)&&(n1 >= n3)&&(n1 >= n4)) {
    $( "span" ).html("You are AWESOME");
  }
  if ((n2 > n1)&&(n2 >= n3)&&(n2 >= n4)) {
    $( "span" ).html("You are BRILLIANT") ;
  }
    
  if ((n3 > n1)&&(n3 > n2)&&(n3 >= n4)) {
    $( "span" ).html("You are CRAP");
  }
    
  if ((n4 > n1)&&(n4 > n2)&&(n4 > n3)) {
    $( "span" ).html("You are DELIGHTFUL");
  }
		
});