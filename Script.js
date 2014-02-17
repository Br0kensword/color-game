$(document).ready(function() {
		// changes color of blocks in main page
        $(".box").click(function(){
            if($("#changer").hasClass("changer")=== true){
            for(i=0;i<=multi_pick();i++){
			$(this).css("background-color",color_pick());
            $("#a"+multi_pick()).css("background-color",color_pick());
            } 
            }
            else{
            $(this).css("background-color",color_pick());
            }
        });
		// changes the background color depending on color block selected at top of page
		$(".selector").click(function() {
		$("html").css("background-color",$(this).css("background-color"));

		});
        // changes the color of the changer block from white to red
        $("#changer").click(function(){
            $(this).toggleClass("changer");
        });
		
		$("#jp_container_1").click(function(){
			$(this).toggleClass("jp_c");
		});



});

// generates a random number that is used for selecting numbers of color boxes
function multi_pick(){
    return Math.floor(Math.random()*40+1);
}
// generates a random number as well
function rand_num(){
    return Math.floor(Math.random()*10+1);
}
// generates a random background-color for html element
function color_pick (){
    var color = Math.floor(Math.random()*20+1);
     if (color === 1){
        return "#FF005C"; 
     }
     else if (color === 2){
         return "#21BA57";
     }
        else if (color === 3){
         return "#05EBFA";
     }
        else if (color === 4){
         return "#FF4700";
     }
        else if (color === 5){
         return "#660061";
     }
        else if (color === 6){
         return "#FFFF45";
     }
        else if (color === 7){
         return "#FF5759";
     }
        else if (color === 8){
         return "#3DAD5C";
     }
        else if (color === 9){
         return "#FFA600";
     }
	       else if (color === 10){
         return "##00FF00";
	 }
	        else if (color === 11){
         return "#CC29A3";
	 }
	        else if (color === 12){
         return "#5CAFCA";
	 }
	        else if (color === 13){
         return "#290052";
	 }
	        else if (color === 14){
         return "#FFFF00";
	 }
	        else if (color === 15){
         return "#B28F6B";
	 }
	        else if (color === 16){
         return "#990033";
	 }
	        else if (color === 17){
         return "#000099";
	 }
	        else if (color === 18){
         return "#FF2B00";
	 }
	        else if (color === 19){
         return "#FFAD33";
	 }
        else {
         return "#D6EBFF";
     }
         
         
     
}
