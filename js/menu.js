

$(document).ready(function(){

    //When mouse rolls over
    $("li").mouseover(function(){
        $(this).stop().animate({height:'150px'},{queue:false, duration:600, easing: 'easeOutBounce'})
    });

    //When mouse is removed
    $("li").mouseout(function(){
        $(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'})
    });

});
1
2
3
4
5
6
7
8
9
10
11
12
13
$(document).ready(function(){
 
    //When mouse rolls over
    $("li").mouseover(function(){
        $(this).stop().animate({height:'150px'},{queue:false, duration:600, easing: 'easeOutBounce'})
    });
 
    //When mouse is removed
    $("li").mouseout(function(){
        $(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'})
    });
 
});