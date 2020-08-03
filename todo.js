$("input").on("keypress",function(e){
  var a=$(this).val();
if(e.which===13){
  $("ul").append("<li><span> <i class='fas fa-trash'></i> </span>"+a+"</li>");
  $(this).val(" ");
}
});


//Deleting TODO
//stop propogation is to stop triggering parent element
//  $(this).parent() -parent of span to be remove after 500secs
//we have selected ul instead of span because span is dynamic in this case and new span is added when we add todo list but event trigger on when we click on span
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropogation();
});

//Adding a strikethrough
//we have selected ul instead of li because li is dynamic in this case and new li is added when we add todo list but event trigger as we click on
$("ul").on("click","li",function(){
  $(this).toggleClass("strike");
});

$(".fa-plus").on("click",function(){
  $("input").fadeToggle(500);
});
