let toggleClassMenu = () => {
	myMenu.classList.add("sidebar--animatable");	
	myMenu.classList.contains("sidebar--visible") ? myMenu.classList.remove('sidebar--visible') : myMenu.classList.add("sidebar--visible");	
}
let OnTransitionEnd = () => myMenu.classList.remove("sidebar--animatable");
var myMenu = document.querySelector(".sidebar");
var oppMenu = document.querySelector(".sidebar-icon");
myMenu.addEventListener("transitionend", OnTransitionEnd, false);
oppMenu.addEventListener("click", toggleClassMenu, false);
myMenu.addEventListener("click", toggleClassMenu, false);