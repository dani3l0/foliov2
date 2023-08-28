import LocationManager from "./LocationManager";
import NavbarManager from "./NavbarManager";
import SectionManager from "./SectionManager";
import TitleManager from "./TitleManager";

export default class PageManager {
	constructor() {
		this.sectionManager = new SectionManager()
		this.navbarManager = new NavbarManager()
		this.locationManager = new LocationManager()
		this.titleManager = new TitleManager()
		this.init()
	}

	init() {
		this.navbarManager.init((item) => {
			this.locationManager.set(item.getAttribute("to"))
		})

		window.addEventListener("hashchange", (event) => {
			this.show(this.locationManager.get())
		});

		this.show(this.locationManager.get())
	}

	show(id) {
		this.sectionManager.show(id)
		this.navbarManager.select(id)

		// TODO: Pretty names
		this.titleManager.update(id)
	}
}
