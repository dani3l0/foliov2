import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';


// Canvas & resizing
const canvas = document.querySelector('#experience')
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const textureLoader = new THREE.TextureLoader()
let anisotropy = 1

function manageWindowSize() {
    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
}
manageWindowSize()

export default function loadScene(model, callback) {
    textureLoader.load(`textures/${model}.jpg`,
        function(texture) {
            texture.encoding = THREE.sRGBEncoding
            texture.generateMipmaps = false;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.flipY = false
            texture.anisotropy = anisotropy
            texture.needsUpdate = true
            const material = new THREE.MeshBasicMaterial( {
                map: texture
            } );

            const loader = new GLTFLoader();
            loader.load(
                `gltf/${model}.glb`,
                function (gltf) {
                    gltf.scene.traverse((child) => {
                        let useTexture = callback(child)
                        if (useTexture) {
                            child.material = material
                            child.material.map.minFilter = THREE.LinearFilter
                        }
                    })
                    scene.add(gltf.scene);
                    const floor = new THREE.Mesh(
                        new THREE.BoxGeometry(4, 0.5, 4),
                        new THREE.MeshBasicMaterial({
                            color: 0xFFFFFF,
                            transparent: true,
                            opacity: 0.2
                        })
                    )
                    floor.position.y = -0.24
                    scene.add(floor)
                }
            );
            
        }
    )
}





////////////////////////////// Code //////////////////////////////


// Scene & camera
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 2
camera.position.y = 1
camera.position.z = 3
scene.add(camera)


// Orbit controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
anisotropy = renderer.capabilities.getMaxAnisotropy()
renderer.outputEncoding = THREE.sRGBEncoding
renderer.setClearColor(0x000000, 0)
renderer.setSize(sizes.width, sizes.height)
renderer.shadowMap.enabled = 1
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/////////////////////////////////////////////////////////////////

// Animation loop
const clock = new THREE.Clock()
const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()
