function changeClass() {
	if ( document.getElementById("menu-1").className.match(/(?:^|\s)site-title__wrapper(?!\S)/) )
		document.getElementById("menu-1").className = document.getElementById("menu-1").className.replace ( /(?:^|\s)site-title__wrapper(?!\S)/g , 'site-title__wrapper--visible' );
	else (
	document.getElementById("menu-1").className = "site-title__wrapper");
}


window.onload = function(){
	document.getElementById("nav-primary__menu-toggle").addEventListener( 'click' , changeClass );
}