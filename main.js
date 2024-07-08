import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as lilGui from "lil-gui";
import gsap from "gsap";


const canvas=document.querySelector("canvas");

const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

camera.position.set(-4.9, 4.4, 1.9);
camera.rotation.set(-0.9, -0.8, -0.8);



//scene.add(camera);

const renderer=new THREE.WebGLRenderer({
    canvas:canvas,  
});

renderer.setSize(window.innerWidth,window.innerHeight);


// const controls=new OrbitControls(camera,canvas);
// controls.enableDamping=true;

let position=0;


//const gui=new lilGui.GUI();

const gltfLoader=new GLTFLoader();
gltfLoader.load('./static/model/swedish-royal/scene.gltf',(gltf)=>{
    console.log(gltf);
    const model=gltf.scene;
    scene.add(model);


      window.addEventListener('mouseup', function () {
        switch (position) {
          case 0:
            cameraMovement(-6.0, 1.72, 1.34);
            cameraRotation(-2.75, -1.24, -2.77);
            position = 1;
            break;
    
          case 1:
            cameraMovement(0.48, 2.09, -2.11);
            cameraRotation(-3.12, 0.22, 3.13);
            position = 2;
            break;
    
          case 2:
            cameraMovement(-1.49, 1.7, 0.48);
            cameraRotation(0.44, 1.43, -0.44);
            position = 0;
        }
      });

      function cameraMovement(x,y,z){
        gsap.to(camera.position,{
            x,
            y,
            z,
            duration:3
        });
      }

      function cameraRotation(x,y,z){
        gsap.to(camera.rotation,{
            x,
            y,
            z,
            duration:3
        })
      }

    // const gui=new lilGui.GUI();
    // gui.add(model.position,"x")
    // .min(-100)
    // .max(100)
    // .step(0.001)
    // .name("model X Axis")

    // gui.add(model.position,"y")
    // .min(-100)
    // .max(100)
    // .step(0.001)
    // .name("model Y Axis")


    // gui.add(model.position,"z")
    // .min(-100)
    // .max(100)
    // .step(0.01)
    // .name("model Z Axis")
});


const animate = () =>{

    renderer.render(scene,camera);

    //window.requestAnimationFrame(animate);

    //controls.update();
};

renderer.setAnimationLoop(animate);

animate();





