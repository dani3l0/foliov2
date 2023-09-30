export default class TitleManager {
	constructor() {
		this.siteName = "dani3l0"
	}

	update(sectionName) {
		let section = document.getElementById(sectionName)
		let name = section.getAttribute("t")
		this.set(name)
	}

	set(name) {
		document.title = `${name} • ${this.siteName}`
	}
}