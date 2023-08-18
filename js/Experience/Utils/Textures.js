import * as THREE from 'three'

export default class Textures {
    static instance
    constructor() {
		if (Textures.instance) {
			return Textures.instance
		}
		Textures.instance = this
        this.textureLoader = new THREE.TextureLoader()
    }

    load(file) {
        const texture = this.textureLoader.load(file)
        texture.flipY = false
        const material = new THREE.MeshBasicMaterial({
            map: texture
        })
        return material
    }
}
