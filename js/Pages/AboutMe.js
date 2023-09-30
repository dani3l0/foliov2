export default class AboutMe {
	constructor(id) {
		this.div = document.getElementById(id)
		this.age = document.getElementById("about-age")

		let birthDate = new Date("2003-05-07")
		let todayDate = new Date()
		let diffDate = new Date(todayDate.getTime() - birthDate.getTime())

		let age = Math.floor(diffDate.getUTCFullYear() - 1970)
		this.age.setAttribute("style", `--value:${age}`)
	}
}