import Experience from "../Experience/Experience";
import LocationManager from "./LocationManager";
import NavbarManager from "./NavbarManager";
import SectionManager from "./SectionManager";
import TitleManager from "./TitleManager";

export default class PageManager {
	constructor() {
		this.experience = new Experience()
		this.world = this.experience.world
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

		let coords = document.getElementById(id).getAttribute("lookAt")
		if (!coords) coords = "0,0,0,0"
		coords = coords.split(",")
		this.world.lookAt(coords)

		// TODO: Pretty names
		this.titleManager.update(id)
	}
}
