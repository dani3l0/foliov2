export default class Expandable {
	constructor(elem) {
		this.div = elem
		this.text = this.div.getElementsByClassName("content")[0]
		this.timeout = null

		this.div.addEventListener("click", () => {
			this.onclick()
		})
	}

	onclick() {
		let height = this.text.scrollHeight
		let expanded = this.div.classList.contains("expanded")
		this.text.style.height = `${height}px`

		clearTimeout(this.timeout)

		if (!expanded) {
			this.timeout = setTimeout(() => {
				this.text.style.height = null
			}, 500)
		}
		else {
			setTimeout(() => {
				this.text.style.height = 0
				this.timeout = setTimeout(() => {
					this.text.style.height = 0
				}, 500)
			}, 0)
		}
		this.div.classList.toggle("expanded")
	}
}