let phonePrice = document.querySelector(".phone-price")
let phoneTitle = document.querySelector(".phone-title")
let iphoneFourteenPro = document.querySelector(".iphone-14pro")
let iphoneFourteenProMax = document.querySelector(".iphone-14pro-max")
let deepPurple = document.querySelector(".deeppurple")

let gold = document.querySelector(".gold")
let silver = document.querySelector(".silver")
let spaceBlack = document.querySelector(".spaceblack")
let image = document.querySelector(".phone-image")
let color = document.querySelector(".phone-color")

let gb128 = document.querySelector(".gb128")
let gb256 = document.querySelector(".gb25``6")
let gb512 = document.querySelector(".gb512")
let gbt = document.querySelector(".gbt")
let bool = null

iphoneFourteenPro.onclick = () => {
	phoneTitle.innerHTML = "Buy iPhone 14 Pro"
	phonePrice.innerHTML = "From $999 or $41.62/mo. for 24 mo. before trade-in*"
	iphoneFourteenPro.classList.add("active")
	iphoneFourteenProMax.classList.remove("active")
	image.src = "img/iphone-14-pro-spaceblack.jpg"
	color.innerHTML = "Color - Space Black"
	spaceBlack.classList.add("outline")
	bool = true
}
iphoneFourteenProMax.onclick = () => {
	image.src = "img/iphone-14-pro-max-spaceblack.jpg"
	iphoneFourteenProMax.classList.add("active")
	iphoneFourteenPro.classList.remove("active")
	phoneTitle.innerHTML = "Buy iPhone 14 Pro Max"
	phonePrice.innerHTML = "From $1099 or $45.79/mo. for 24 mo. before trade-in*"
	color.innerHTML = "Color - Space Black"
	spaceBlack.classList.add("outline")
	bool = false
}

deepPurple.onclick = () => {
	if (bool) {
		deepPurple.classList.add("outline")
		gold.classList.remove("outline")
		silver.classList.remove("outline")
		spaceBlack.classList.remove("outline")
		image.src = "img/iphone-14-pro-deeppurple.jpg"
		color.innerHTML = "Color - Deep Purple"
	} else {
		deepPurple.classList.add("outline")
		gold.classList.remove("outline")
		silver.classList.remove("outline")
		spaceBlack.classList.remove("outline")
		image.src = "img/iphone-14-pro-max-deeppurple.jpg"
		color.innerHTML = "Color - Deep Purple"
	}
}
gold.onclick = () => {
	if (bool) {
		gold.classList.add("outline")
		deepPurple.classList.remove("outline")
		silver.classList.remove("outline")
		spaceBlack.classList.remove("outline")
		image.src = "img/iphone-14-pro-gold.jpg"
		color.innerHTML = "Color - Gold"
	} else {
		gold.classList.add("outline")
		deepPurple.classList.remove("outline")
		silver.classList.remove("outline")
		spaceBlack.classList.remove("outline")
		image.src = "img/iphone-14-pro-max-gold.jpg"
		color.innerHTML = "Color - Gold"
	}
}
silver.onclick = () => {
	if (bool) {
		silver.classList.add("outline")
		gold.classList.remove("outline")
		deepPurple.classList.remove("outline")
		spaceBlack.classList.remove("outline")
		image.src = "img/iphone-14-pro-silver.jpg"
		color.innerHTML = "Color - Silver"
	} else {
		silver.classList.add("outline")
		gold.classList.remove("outline")
		deepPurple.classList.remove("outline")
		spaceBlack.classList.remove("outline")
		image.src = "img/iphone-14-pro-max-silver.jpg"
		color.innerHTML = "Color - Silver"
	}
}
spaceBlack.onclick = () => {
	if (bool) {
		spaceBlack.classList.add("outline")
		gold.classList.remove("outline")
		silver.classList.remove("outline")
		deepPurple.classList.remove("outline")
		image.src = "img/iphone-14-pro-spaceblack.jpg"
		color.innerHTML = "Color - Space Black"
	} else {
		spaceBlack.classList.add("outline")
		gold.classList.remove("outline")
		silver.classList.remove("outline")
		deepPurple.classList.remove("outline")
		image.src = "img/iphone-14-pro-max-spaceblack.jpg"
		color.innerHTML = "Color - Space Black"
	}
}


gb128.onclick = () => {
	if (bool) {
		phonePrice.innerHTML = "From $999 or $41.62/mo. for 24 mo. before trade-in*"
		gb128.classList.add("active")
		gb256.classList.remove("active")
		gb512.classList.remove("active")
		gbt.classList.remove("active")
	} else {
		phonePrice.innerHTML = "From $1099 or $41.62/mo. for 24 mo. before trade-in*"
		gb128.classList.add("active")
		gb256.classList.remove("active")
		gb512.classList.remove("active")
		gbt.classList.remove("active")
	}
}
gb256.onclick = () => {
	if (bool) {
		phonePrice.innerHTML = "From $1099 or $45.79/mo. for 24 mo. before trade-in*"
		gb256.classList.add("active")
		gb512.classList.remove("active")
		gb128.classList.remove("active")
		gbt.classList.remove("active")
	} else {
		phonePrice.innerHTML = "From $1199 or $49.95/mo. for 24 mo. before trade-in*"
		gb256.classList.add("active")
		gb512.classList.remove("active")
		gb128.classList.remove("active")
		gbt.classList.remove("active")
	}
}
gb512.onclick = () => {
	if (bool) {
		phonePrice.innerHTML = "From $1299 or $54.12/mo. for 24 mo. before trade-in*"
		gb512.classList.add("active")
		gb256.classList.remove("active")
		gb128.classList.remove("active")
		gbt.classList.remove("active")
	} else {
		phonePrice.innerHTML = "From $1399 or $58.29/mo. for 24 mo. before trade-in*"
		gb512.classList.add("active")
		gb256.classList.remove("active")
		gb128.classList.remove("active")
		gbt.classList.remove("active")
	}
}
gbt.onclick = () => {
	if (bool) {
		phonePrice.innerHTML = "From $1499 or $62.45/mo. for 24 mo. before trade-in*"
		gb512.classList.add("active")
		gb256.classList.remove("active")
		gb128.classList.remove("active")
		gbt.classList.remove("active")
	} else {
		phonePrice.innerHTML = "From $1599 or $66.62/mo. for 24 mo. before trade-in*"
		gb512.classList.add("active")
		gb256.classList.remove("active")
		gb128.classList.remove("active")
		gbt.classList.remove("active")
	}
}






