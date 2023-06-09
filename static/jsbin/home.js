function setBannerHeight() {
	let bannerElement = document.getElementById("banner"),
		aspectRatio = 1.7777777777777777777777777777778,
		bannerWidth = bannerElement.offsetWidth;
	if (window.innerWidth === 1920) {
		aspectRatio = bannerWidth / (window.innerHeight > 1080 ? 1080 : window.innerHeight);
	}
	if (window.innerWidth >= 1280) {
		bannerElement.style.minHeight = `${bannerWidth / aspectRatio}px`;
		bannerElement.style.maxHeight = `${bannerWidth / aspectRatio}px`;
	} else {
		bannerElement.style.minHeight = `${640}px`;
		bannerElement.style.maxHeight = `${640}px`;
	}
}

function menuDrawerActions() {
	const openDrawerBtn = document.getElementById("drawer_btn");
	openDrawerBtn.addEventListener("click", function (event) {
		event.preventDefault();

		const menuDrawer = document.getElementById("menu_drawer");
		menuDrawer.style.display = "flex";

		const bodyElement = document.getElementById("home");
		bodyElement.style.overflow = "hidden";
	});

	const closeDrawerBtn = document.getElementById("close_btn");
	closeDrawerBtn.addEventListener("click", function (event) {
		event.preventDefault();

		const menuDrawer = document.getElementById("menu_drawer");
		menuDrawer.removeAttribute("style");

		const bodyElement = document.getElementById("home");
		bodyElement.removeAttribute("style");
	});
}

window.addEventListener("DOMContentLoaded", (event) => {
	setBannerHeight();
	menuDrawerActions();
});

window.addEventListener(
	"resize",
	function (event) {
		setBannerHeight();
	},
	true
);

$(document).ready(function () {
	$("#layer_1").click(function (e) {
		e.preventDefault();

		document.getElementById("layer_1").style.backgroundColor = "#000";
		document.getElementById("layer_2").style.backgroundColor = "#5a5a5a";

		let imageWrapper = document.getElementsByClassName("image-wrapper");
		imageWrapper[0].style.display = "block";
		imageWrapper[1].style.display = "block";
		imageWrapper[2].style.display = "block";
		imageWrapper[3].style.display = "none";
		imageWrapper[4].style.display = "none";
		imageWrapper[5].style.display = "none";
	});
	$("#layer_2").click(function (e) {
		e.preventDefault();

		document.getElementById("layer_1").style.backgroundColor = "#5a5a5a";
		document.getElementById("layer_2").style.backgroundColor = "#000";

		let imageWrapper = document.getElementsByClassName("image-wrapper");
		imageWrapper[0].style.display = "none";
		imageWrapper[1].style.display = "none";
		imageWrapper[2].style.display = "none";
		imageWrapper[3].style.display = "block";
		imageWrapper[4].style.display = "block";
		imageWrapper[5].style.display = "block";
	});
});
