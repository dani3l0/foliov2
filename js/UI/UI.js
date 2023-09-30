import PageManager from "../PageManager/PageManager";
import AboutMe from "../Pages/AboutMe";
import Home from "../Pages/Home";
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

		this.pageManager.init()

		// Expandables
		let expandables = document.getElementsByClassName("expandable")
		for (let e of expandables) {
			new Expandable(e)
		}

		// Moving boxes animation
		let sections = document.getElementsByTagName("section")
		for (let section of sections) {
			let boxes = section.getElementsByClassName("box")
			let num = 0
			for (let box of boxes) {
				box.setAttribute("style", `--num: ${num}`)
				num++
			}
		}
	}
}
