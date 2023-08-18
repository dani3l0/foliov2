import * as THREE from 'three'
import Experience from './Experience'
import Sizes from './Utils/Sizes'


export default class Loop {
	constructor() {
		this.experience = new Experience()
		this.sizes = new Sizes()
		this.clock = new THREE.Clock()
		this.onResize = []
		this.onUpdate = []
	}

	addResizeListener(func) {
		this.onResize.push(func)
	}

	addUpdateListener(func) {
		this.onUpdate.push(func)
	}

	listenResizes() {
		window.addEventListener("resize", () => {
			this.sizes.update()
			for (const func of this.onResize) {
				func()
			}
		})
	}

	startRendering() {
		this.listenResizes()
		const tick = () => {
			const elapsedTime = this.clock.getElapsedTime()
			for (const func of this.onUpdate) {
				func(elapsedTime)
			}
			window.requestAnimationFrame(tick)
		}
		tick()
	}
}