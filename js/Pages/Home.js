import SwitchingText from "../UI/CandyBox/SwitchingText"

export default class Home {
	constructor(id) {
		let switchingSpeed = 5000

		this.div = document.getElementById(id)

		let switchings = this.div.getElementsByClassName("switching-twoline")[0].children
		this.switchingA = new SwitchingText(switchings[0])
		this.switchingB = new SwitchingText(switchings[1])
		this.switchingA.autoSwitch(switchingSpeed)
		this.switchingB.autoSwitch(switchingSpeed)
	}
}