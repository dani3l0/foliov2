export default class TitleManager {
	constructor() {
		// TODO: Load site name from config
		this.siteName = "dani3l0"
	}

	update(sectionName) {
		document.title = `${sectionName} - ${this.siteName}`
	}
}