import * as THREE from "three"
import Experience from "./Experience"
import Textures from "./Utils/Textures"


export default class Renderer {
	constructor() {
		this.experience = new Experience()
		this.textures = new Textures()
		this.sizes = this.experience.sizes
		this.scene = this.experience.scene
		this.canvas = this.experience.canvas
		this.camera = this.experience.camera.camera
		this.setRenderer()
	}

	setRenderer() {
		this.renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: false // this generates kinda ugly white outlines
		})
		this.resize()
		this.textures.anisotropy = this.renderer.capabilities.getMaxAnisotropy()
	}

	resize() {
		this.renderer.setSize(this.sizes.width, this.sizes.height)
		this.renderer.setPixelRatio(this.sizes.pixelRatio * 2) // *2 for fake anti-aliasing
	}

	update() {
		this.renderer.render(this.scene, this.camera)
	}
}