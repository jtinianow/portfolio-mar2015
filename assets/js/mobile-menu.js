function changeClass() {
	if ( document.getElementById("menu-1").className.match(/(?:^|\s)nav-primary__menu(?!\S)/) )
		document.getElementById("menu-1").className = document.getElementById("menu-1").className.replace ( /(?:^|\s)nav-primary__menu(?!\S)/g , 'nav-primary__menu--visible' );
	else (
	document.getElementById("menu-1").className = "nav-primary__menu");
}


window.onload = function(){
	document.getElementById("nav-primary__menu__toggle").addEventListener( 'click' , changeClass );
}