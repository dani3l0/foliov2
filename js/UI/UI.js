import PageManager from "../PageManager/PageManager";
import AboutMe from "../Pages/AboutMe";
import Home from "../Pages/Home";
import Settings from "../Pages/Settings";
import Expandable from "./CandyBox/Expandable";

export default class UI {
	static instance
	constructor() {
		if (UI.instance) return
		UI.instance = this
	}

	init() {
		this.pageManager = new PageManager()

		this.pageHome = new Home("main")
		this.pageAbout = new AboutMe("about")
		this.pageSettings = new Settings("settings")

		this.pageManager.init()

		// Expandables
		let expandables = document.getElementsByClassName("expandable")
		for (let e of expandables) {
			new Expandable(e)
		}
	}
}
