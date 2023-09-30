import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import Experience from "../Experience"

export default class GLTF {
	constructor(file, callback=(gltf)=>{}) {
		this.experience = new Experience()
		const scene = this.experience.scene

		this.loader = new GLTFLoader()
		this.loader.load(file, (gltf) => {
			scene.add(gltf.scene)
			callback(gltf)
		})
	}
}
