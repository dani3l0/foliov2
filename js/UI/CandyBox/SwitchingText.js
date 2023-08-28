export default class SwitchingText {
	constructor(elem) {
		this.div = elem
		this.words = this.div.children
		this.init()
		this.autoSwitchInterval = null
	}

	init() {
		let words = this.words
		for (let word of words) {
			let letters = word.innerHTML.split("")
			word.innerHTML = ""
			for (let letter of letters) {
				let b = document.createElement("b")
				b.innerHTML = letter
				word.appendChild(b)
			}
		}
		let calculatedHeight = words[0].offsetHeight
		this.div.style.height = `${calculatedHeight}px`
	}

	show(num) {
		let words = this.words
		for (let i = 0; i < words.length; i++) {
			const word = words[i].children
			for (let j = 0; j < word.length; j++) {
				const element = word[j]
				setTimeout(() => {
					if (i < num) {
						element.classList.add("top")
						element.classList.remove("bottom")
					}
					else if (i > num) {
						element.classList.remove("top")
						element.classList.add("bottom")
					}
					else {
						element.classList.remove("top")
						element.classList.remove("bottom")
					}
				}, 35 * j)
			}
		}
	}

	autoSwitch(interval) {
		this.autoSwitchIndex = 0
		let maxlen = this.words.length - 1
		clearInterval(this.autoSwitchInterval)
		const func = () => {
			this.show(this.autoSwitchIndex)
			this.autoSwitchIndex++
			if (this.autoSwitchIndex > maxlen) this.autoSwitchIndex = 0
		}
		func()
		this.autoSwitchInterval = setInterval(func, interval)
	}
}