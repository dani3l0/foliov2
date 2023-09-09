import { Power3, gsap } from "gsap"
import GLTF from "./Utils/GLTF"
import Textures from "./Utils/Textures"
import GUI from 'lil-gui'
import Experience from "./Experience"

export default class World {
	constructor() {
		this.camera = new Experience().camera.camera
		this.textures = new Textures()
		this.importScene()
		this.gui = new GUI()
	}

	lookAt(coords) {
		let x = -coords[0]
		let y = -coords[1]
		let z = -coords[2]
		let r = (coords[3] - 90) * (Math.PI * 2) / 360
		let duration = 2
		let ease = Power3.easeInOut
		gsap.to(this.scene.position, {x, y, z, duration, ease})
		gsap.to(this.camera.rotation, {y: r, duration, ease})
	}

	lookAtDefault(scene) {
		scene.position.set(2.5,-2.4,3.5)
		let deg = -90
		scene.rotation.y = (deg / 360) * (Math.PI * 2)
		this.gui.add(this.scene.position, "x").min(-3).max(3).step(0.05)
		this.gui.add(this.scene.position, "y").min(-3).max(0).step(0.05)
		this.gui.add(this.scene.position, "z").min(-3).max(3).step(0.05)
	}

	importScene() {
		let buildingTexture = this.textures.load("textures/building.jpg")
		let furnitureTexture = this.textures.load("textures/furniture.jpg")
		let detailsTexture = this.textures.load("textures/details.jpg")

		new GLTF("gltf/scene.glb", (gltf) => {
			this.scene = gltf.scene
			for (let obj of gltf.scene.children) {
				let name = obj.name
				if (name == "Building") {
					this.handleTextures(obj, buildingTexture)
				}
				else if (name == "Furniture") {
					this.handleTextures(obj, furnitureTexture)
				}
				else if (name == "Details") {
					this.handleTextures(obj, detailsTexture)
				}
				else if (name == "Special") {
					this.handleSpecials(obj)
				}
				else {
					this.handleDefault(obj)
				}
			}
			this.lookAtDefault(gltf.scene)
		})
	}

	handleSpecials(obj) {
		let name = obj.name
	}

	handleTextures(obj, material) {
		obj.traverse((child) => {
			child.material = material
		})
	}

	handleDefault(obj) {
		obj.traverse((child) => {
			//console.log(child)
		})
	}
}
