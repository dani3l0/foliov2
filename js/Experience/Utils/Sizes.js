export default class Sizes {
	constructor() {
		this.update()
	}

	update() {
		this.width = window.innerWidth
		this.height = window.innerHeight
		this.aspect = this.width / this.height
		this.pixelRatio = Math.min(window.devicePixelRatio, 2)		
	}
}