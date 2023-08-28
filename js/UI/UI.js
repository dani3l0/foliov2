import PageManager from "../PageManager/PageManager";
import Home from "../Pages/Home";

export default class UI {
	constructor() {
        this.pageManager = new PageManager()

		this.pageHome = new Home("main")
	}
}
