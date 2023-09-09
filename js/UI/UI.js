import PageManager from "../PageManager/PageManager";
import Home from "../Pages/Home";

export default class UI {
	static instance
	constructor() {
		if (UI.instance) return
		UI.instance = this
	}

	init() {
        this.pageManager = new PageManager()
		this.pageHome = new Home("main")
	}
}
