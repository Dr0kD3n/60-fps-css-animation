function toggleClassMenu() {
	myMenu.classList.add("wrapper--animatable");	
	if(!myMenu.classList.contains("wrapper--visible")) {		
		myMenu.classList.add("wrapper--visible");
	} else {
		myMenu.classList.remove('wrapper--visible');		
	}	
}

function OnTransitionEnd() {
	myMenu.classList.remove("wrapper--animatable");
}

var myMenu = document.querySelector(".wrapper");
var oppMenu = document.querySelector(".wrapper-icon");
myMenu.addEventListener("transitionend", OnTransitionEnd, false);
oppMenu.addEventListener("click", toggleClassMenu, false);
myMenu.addEventListener("click", toggleClassMenu, false);