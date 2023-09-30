export default class NavbarManager {
	constructor() {
		const navbar = document.getElementsByTagName("nav")[0]
		navbar.classList.remove("hidden")
		this.items = navbar.getElementsByTagName("a")
	}

	init(func) {
		for (let elem of this.items) {
			elem.onclick = (e) => {
				e.preventDefault()
				func(elem)
			}
		}
	}

	select(id) {
		for (let elem of this.items) {
			if (elem.getAttribute("to") == id) {
				elem.classList.add("current")
			}
			else {
				elem.classList.remove("current")
			}
		}
	}
}
