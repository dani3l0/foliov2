import * as THREE from 'three'
import Experience from "./Experience";

export default class Camera {
	constructor() {
		this.experience = new Experience()
		this.sizes = this.experience.sizes
		this.scene = this.experience.scene
		this.createCamera()
		document.addEventListener('mousemove', (e) => {
			this.onDocumentMouseMove(e, this)
		})
	}
	
	createCamera() {
		this.camera = new THREE.PerspectiveCamera(65, this.sizes.aspect, 0.1, 100)
		this.camera.position.z = 0.001
		this.scene.add(this.camera)
	}

	resize() {
		this.camera.aspect = this.sizes.aspect;
		this.camera.updateProjectionMatrix();
	}

	onDocumentMouseMove(event) {
		window.mouseX = event.clientX
		window.mouseY = event.clientY
	}
}
