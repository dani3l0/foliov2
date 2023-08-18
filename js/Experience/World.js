import GLTF from "./Utils/GLTF"
import Textures from "./Utils/Textures"

export default class World {
	constructor() {
		this.textures = new Textures()
		this.create()
	}

	create() {
		this.importScene()
	}

	importScene() {
		let buildingTexture = this.textures.load("textures/building.jpg")
		let furnitureTexture = this.textures.load("textures/furniture.jpg")
		let detailsTexture = this.textures.load("textures/details.jpg")

		this.scene = new GLTF("gltf/scene.glb", (gltf) => {
			console.log(gltf)
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
			console.log(child)
		})
	}
}
