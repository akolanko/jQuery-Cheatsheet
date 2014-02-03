/*TO MAKE SURE JQUERY IS LOADED call jQuery in the console
jQuery
>function (e,t){return new x.fn.init(e,t,r)}

OR call $
$
>function (e,t){return new x.fn.init(e,t,r)}
*/

/*INCLUDE A COPY OF THE JQUERY LIBRARY IN YOUR HTML FILE IN THE HEAD SECTION:
<script src="http://ajax.googleapis. com/ajax/libs/jquery/1.10.2/jquery.min. js"></script>
(copy of library from the Google Content Delivery Network)
*/

/*DOM = DOCUMENT OBJECT MODEL

SELECTING ELEMENTS IN THE DOM WITH JQUERY

$("<element name, class, id, or XPATH>")

$("body")
>[><body>...</body>]
*/

/*
ANONYMOUS FUNCTIONS
useful when an entirely separate function, B,
is being passed as an argument to another function, A,
meaning some functionality inside B should not be run immediately,
but only when the other function, A, says so

function(){
     console.log(“This is an anonymous function.”);
}

Anonymous functions can be stored in variables
var anonFunction = function(){
	console.log(“This is an anonymous function.”);
}
*/

/*DOCUMENT READY FUNCTION
ensures that code doesn't run until document fires a ready event
*/
$(document).ready( function (){
//SENDS ALERT WHEN DOCUMENT IS READY
	alert("The document is ready!");
	console.log("This logs to the console when the document is ready.");

//THE CLICK EVENT

	$("a").click( function(){
		alert("Are you sure you want to go to go to Aleksandra Kolanko's insagram page?");
		}
	);

//None of the actions will be performed unless the user clicks somewhere on the page

	$("body").click( function(){

/*HIDING AN ELEMENT
NOTE: the time in milliseconds for the action to be performed is specifed in parentheses
IE #paraOne will hide over a period of 3 seconds
*/
		$("#paraOne").hide(3000);

//SHOWING AN ELEMENT
		$("#paraOne").show(3000);

/*SLIDING AN ELEMENT UP AND DOWN
DELAYING THIS ACTION
*/
		$("#paraTwo").delay(6000).slideUp(3000).slideDown(3000);

//FADING OUT AND IN AN ELEMENT
		$("#paraThree").delay(12000).fadeOut(3000).fadeIn(3000);

/*ANIMATING NUMBERIC CSS PROPERTIES
CHANGING AN ELEMENT'S OPACITY
*/
		$("ul li").delay(18000).animate({opacity: 0.2}, 3000);

//CHANGING AN ELEMENTS WIDTH

		$("#paraFour").delay(21000).animate({width: "40%"}, 3000);

		$("#paraFour").animate({width: "100%"}, 3000);

//NOTE: In "#paraFour"s syntax, we do not need to delay for the second animation

/*PERFORMING ANIMATION ACTIONS SIMULTENEOUSLY
Changing an element's opacity while changing its width
*/

		$("#paraFive").delay(27000).animate({
			opacity: .4,
			width: "50%"
		}, 3000);

		$("#paraFive").animate({
			opacity: 1,
			width: "100%"
		}, 3000);

//CHANGING AN IMAGE'S ANIMATION

		$("img").delay(33000).animate({opacity: .6}, 3000).slideUp(3000).delay(1000).slideDown(3000).animate({opacity: 1}, 3000);
	});
});





