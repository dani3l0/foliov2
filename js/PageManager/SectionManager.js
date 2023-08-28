export default class SectionManager {
	constructor() {
		this.sections = document.getElementsByTagName("section")
	}

	show(id) {
		this.hideAll()
		document.getElementById(id).classList.add("current")
	}

	hideAll() {
		for (let item of this.sections) {
			item.classList.remove("current")
		}
	}
}
