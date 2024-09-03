export default class Settings {
	constructor(id) {
		this.items = document.getElementById("settings").getElementsByTagName("b")
		for (let item of this.items) {
			console.log(item)
			item.addEventListener("click", () => {
				this.toggle(item)
			})
		}
	}

	toggle(obj) {
		let button = obj.getElementsByClassName("switch")[0].classList
		let key = obj.getElementsByTagName("i")[0].innerText
		let value = button.contains("enabled")
		value ? button.remove("enabled") : button.add("enabled")
	}
}