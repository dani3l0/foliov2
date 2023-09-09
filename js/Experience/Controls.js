import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Experience from './Experience'


export default class Controls {
	constructor() {
		this.experience = new Experience()
		this.camera = this.experience.camera.camera
		this.canvas = this.experience.canvas
		this.controls = new OrbitControls(this.camera, this.canvas)
		this.controls.enableDamping = false
		this.enabled = true
	}
	
	update() {
		if (this.enabled) this.controls.update()
	}
}