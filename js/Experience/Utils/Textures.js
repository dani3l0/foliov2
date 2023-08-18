import * as THREE from 'three'

export default class Textures {
    static instance
    constructor() {
		if (Textures.instance) {
			return Textures.instance
		}
		Textures.instance = this
        this.textureLoader = new THREE.TextureLoader()
        this.anisotropy = 1
    }

    load(file) {
        const texture = this.textureLoader.load(file)
        texture.flipY = false
        texture.encoding = THREE.sRGBEncoding
        texture.generateMipmaps = false;
        texture.minFilter = THREE.NearestFilter;
        texture.magFilter = THREE.NearestFilter;
        const material = new THREE.MeshBasicMaterial({
            map: texture
        })
        return material
    }
}
