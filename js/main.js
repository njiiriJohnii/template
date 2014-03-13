<<<<<<< HEAD
$('h1').on("click",function(){
	$("h1").css('color','blue');
})

/*for(var i=0;i<myArray.length;i++)
{
 	document.write("<br>"+myArray[i].Name);
}*/

$.each(myArray,function(index, person){
	$('#people').append('<li>'+person.Name+'</li>');
});
function generateEq(){
	var eq={
		a:Math.floor((Math.random()*100)+1),
		b:Math.floor((Math.random()*100)+1)
	};
	return eq;
}
var eq=generateEq();
$("#questions").text(eq.a+"+"+eq.b);
correctAnswer=eq.a+eq.b;
$("#answer").on("click",function(){
	var input=$("input").val();
	if(input==correctAnswer)
	{
		$("#message").text("Correct.");
	}
	else
	{
		$("#message").text("Incorrect.");
	}
});
=======
function Car(){
}

var myCar=new Car()
var yourcar=new Car()
if(myCar==yourCar)
{
alert("same")
>>>>>>> 1a630f851d97ec540009890aa91ce1ef759d0597

