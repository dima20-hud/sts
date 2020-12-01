function $() 
{var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; } 


function js1_f11()
{
$('b1').style.backgroundColor="#fc0";
}
function js1_f12()
{
$('b2').style.backgroundRepeat="repeat-x";
}
function js1_f13()
{
$('b3').style.borderBottomColor="red";
}
function js1_f14()
{
$('b4').style.borderColor="blue";
}
function js1_f15()
{
$('b5').style.borderLeftStyle="dotted";
}
function js1_f15()
{
$('b5').style.borderLeftWidth="7px";
}
function js1_f16()
{
$('b6').style.borderRightColor="grey";
}
function js1_f17()
{
$('b7').style.borderStyle="solid";
}
function js1_f17()
{
$('b7').style.borderWidth="7px";
}

function js1_f18()
{
$('b8').style.borderTopStyle="double";
}