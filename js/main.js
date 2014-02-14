alert("hay javascript!");
console.log("i'm the console");
function myFunct()
{
alert("you clicked!");
}
var myVar= document.getElementsByTagName('h1');
console.log(myVar);
myVar.onclick=function()
{
alert("you clicked an h1");
};
