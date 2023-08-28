export default class LocationManager {
	constructor() {
		this.mainSection = "main"
	}

	get() {
		let location = window.location.hash.replaceAll("#", "")
		if (location == "") location = this.mainSection
		return location
	}

	set(location) {
		location = location.toLowerCase().trim()
		if (this.get() == location) return
		if (location == this.mainSection) window.location.hash = ""
		else window.location.hash = location
	}
}
