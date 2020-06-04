// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", ".delete", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("ul").on("click", ".star", function(event){
	$(this).parent().toggleClass("gold");
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span class = 'delete'><i class='fa fa-trash'></i></span><span class='star'><i class='fa fa-star'></i></span> " + todoText + "</li>")
	}
});
//<li><span class = "delete"><i class="fa fa-trash"></i></span><span class="star"><i class="fa fa-star"></i></span> Go To Potions Class</li>

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});