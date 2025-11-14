import Experience from "./Experience/Experience";
import UI from "./UI/UI";

export default class App {
	constructor() {
		const canvas = document.getElementById("experience")
		this.experience = new Experience(canvas)

		this.ui = new UI()
		this.experience.loadingManager.addOnLoadListener(() => {
			setTimeout(this.ui.init, 1000)
			document.getElementById("init").classList.add("hidden")
		})
	}
}