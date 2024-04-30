import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 56;
camera.position.y = 8;
camera.position.x = 2;

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});
renderer.setSize( window.innerWidth - 50, window.innerHeight - 50 );
document.body.appendChild( renderer.domElement );


const color = 0xffffff;
const intensity = 6;
const light = new THREE.DirectionalLight(color, intensity);
const light2 = new THREE.AmbientLight(color, intensity*0.1);
light.position.set(33, 25, 31);
scene.add(light);
scene.add(light2);

let mixer;
const loaderGLTF = new GLTFLoader();

loaderGLTF.load('../assets/coche/scene.gltf', 
        function(gltf){
            const model = gltf.scene;
            scene.add(model);
            
            model.position.set(0,5,0);
            
            model.rotation.y = 18.25;
            model.rotation.x = 0.33;

            mixer = new THREE.AnimationMixer(model);

            const clips = gltf.animations;
            console.log(clips); 

            const clip = THREE.AnimationClip.findByName(clips,'Base Stack') ;

            const action = mixer.clipAction(clip);

            action.play();

        });
        

const clock = new THREE.Clock();

function animate() {
	requestAnimationFrame( animate );
    mixer.update(clock.getDelta());
	renderer.render( scene, camera );
} 

animate();


