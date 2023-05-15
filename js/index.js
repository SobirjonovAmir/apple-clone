let img = {
	silver: "img/macbook-silver.png",
	spaceGray: "img/macbook-spacegray.png"
}
let colorSwitch = document.querySelectorAll(".color-switch")
let memorySwitch = document.querySelectorAll(".memory-switch")

colorSwitch.forEach(color => {
	let productImg = document.querySelector(".product__img")
	let productColor = document.querySelector(".product__color")
	color.onclick = () => {
		let key = img[color.getAttribute("data-color")]
		productImg.src = key
		productColor.innerText = color.innerText
		
		colorSwitch.forEach(item => {
			item.classList.remove("active-color")
		})
		color.classList.add('active-color')
	}
})



let memoryPrice = {
	"512gb": 0,
	"1tb": 200,
	"2tb": 600,
	"4tb": 1200,
}

memorySwitch.forEach(memory => {
	let productPrice = document.querySelector(".pricing")
	memory.onclick = () => {
		let key = memory.getAttribute("data-memory")
		let price = memoryPrice[key]
		let orgPrice = 1999
		productPrice.innerHTML = orgPrice + price
		
		memorySwitch.forEach(item => {
			item.classList.remove("active")
		})
		memory.classList.add("active")
	}
})