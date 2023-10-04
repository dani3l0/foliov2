import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Experience from './Experience'


export default class Controls {
	constructor(enabled = true) {
		if (!enabled) return
		this.enabled = enabled
		this.experience = new Experience()
		this.camera = this.experience.camera.camera
		this.canvas = this.experience.canvas
		this.controls = new OrbitControls(this.camera, this.canvas)
		this.controls.enableDamping = false
	}
	
	update() {
		if (this.enabled) this.controls.update()
	}
}