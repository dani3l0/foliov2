export default class SectionManager {
	constructor() {
		this.sections = document.getElementsByTagName("section")
		this.timeout = null
		this.canvas = document.getElementsByTagName("canvas")[0]
	}

	show(id) {
		this.hideAll()
		this.canvas.classList.add("moving")
		clearTimeout(this.timeout)
		this.timeout = setTimeout(() => {
			this.canvas.classList.remove("moving")
			document.getElementById(id).classList.add("current")
		}, 1500)
	}

	hideAll() {
		for (let item of this.sections) {
			item.classList.remove("current")
		}
	}
}
