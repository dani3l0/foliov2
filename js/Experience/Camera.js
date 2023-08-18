import * as THREE from 'three'
import Experience from "./Experience";


export default class Camera {
	constructor() {
		this.experience = new Experience()
		this.sizes = this.experience.sizes
		this.scene = this.experience.scene
		this.createCamera()
	}
	
	createCamera() {
		this.camera = new THREE.PerspectiveCamera(40, this.sizes.aspect, 0.1, 100)
		this.scene.add(this.camera)
		this.camera.position.set(2, 0, 2)
		this.camera.rotateY(1)
		this.camera.rotateX(1)
	}

	resize() {
		this.camera.aspect = this.sizes.aspect;
		this.camera.updateProjectionMatrix();
	}
}
