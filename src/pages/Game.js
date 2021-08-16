import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import { Renderer, TextureLoader } from 'expo-three';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// load textures from favs before and stock it 

import {
  AmbientLight,
  BoxBufferGeometry,
  Fog,
  GridHelper,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
  Raycaster,
  Vector2,
  SphereBufferGeometry,
  SphereGeometry, 
  MeshBasicMaterial,
  Vector3,
  Clock,
  Color
} from 'three';

import {
  View,
	Animated,
	Text,
	Dimensions,
	PanResponder
} from "react-native";

import {Button} from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import styles from '../utils/styles';

export default function Game(props) {

  const navigation = useNavigation();
  const fav = useSelector(state => state.fav);

  let timeout;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const mouseX = React.useRef();
  const mouseY = React.useRef();
  const fire = React.useRef();

  const [begin, setBegin] = React.useState(false);


  React.useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => {
      clearTimeout(timeout);
      setBegin(false);
    }
  }, []);

  const onBegin = () => {
    setBegin(true);
  }

  const panResponder = React.useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) =>
        true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
        true,

      onPanResponderGrant: (evt, gestureState) => {
        mouseX.current = gestureState.x0;
        mouseY.current = gestureState.y0;
        fire.current = true;
  
       
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        //console.log(gestureState);
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) =>
        true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      }
    })
  ).current;

  if (!begin) {
    return (
      <View style={styles.centered}>
        <Button mode="contained" onPress={onBegin}>Play</Button>
      </View>
    );
  }

  return (
    <GLView
    {...panResponder.panHandlers}
      style={{ flex: 1 }}
      onContextCreate={async (gl) => {
        const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
        const sceneColor = new Color("rgb(36, 98, 115 )");

        // Create a WebGLRenderer without a DOM element
        const renderer = new Renderer({ gl });
        renderer.setSize(width, height);
        renderer.setClearColor(sceneColor);

        let mouse = new Vector2();
     
        let spawningTimeMax = 2;
        let spawningTime = spawningTimeMax;
        
        let balls = [];
        let cubes = [];
        let textures = [];
      
        const clock = new Clock();
        let running = true;
        let time = 0;
        let spawnNum = 1;

        const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
        //camera.position.set(0, 0, 0);

        const scene = new Scene();
        scene.fog = new Fog(sceneColor, 1, 10000);
        //scene.add(new GridHelper(10, 10));

        const ambientLight = new AmbientLight(0x101010);
        scene.add(ambientLight);

        const pointLight = new PointLight(0xffffff, 2, 800, 2);
        pointLight.position.set(-6, 20, 6);
        scene.add(pointLight);

        const spotLight = new SpotLight(0xffffff, 0.1);
        spotLight.position.set(-10, 20, 6);
        spotLight.lookAt(scene.position);
        scene.add(spotLight);

     
        function loadTextures(){
          if (fav.things.length < 0) return;
          let textureLoader = new TextureLoader();

          for (let i=0; i<fav.things.length; i++){
            textures.push( textureLoader.load(fav.things[i].Poster) );
          }
        }

        loadTextures();
        //camera.lookAt(cube.position);

        function createRand(min, max){
          let num = Math.floor(Math.random()*max) + min; 
          num *= Math.round(Math.random()) ? 1 : -1; 
          return num;
        }


        function createCube(delta){
                 
          if ( time < spawningTime ) return;
          spawningTime = time + spawningTimeMax;
          
          if (time > 100 ) { spawnNum = 4; }
          else if (time > 50 ) { spawnNum = 3; }
          else if (time > 20 ) { spawnNum = 2; }

          for (let i=0; i<spawnNum; i++){
              let cube;
            if (textures.length<1) {
              cube = new ColorMesh();
            }else{
                let rand = Math.floor(Math.random()*textures.length);
                cube = new IconMesh(textures[rand]);
            }// if textures
            
              cubes.push(cube);
              scene.add(cube);           
              cube.position.set(createRand(1,4), createRand(1,6), -20);
              //cube.originPoint = cube.position;
              cube.axis = camera.position.sub(cube.position).normalize();
              cube.speed = 1;
          }// for 

        
        } // createCube

 

        function moveCubes(delta){
          if (cubes.length <1) return;
          for ( let i = 0; i <cubes.length; i ++ ) {
            cubes[i].rotation.x += 2*delta;
            cubes[i].rotation.y += 2*delta;
		       // cubes[i].translateOnAxis(cubes[i].axis, cubes[i].speed*delta);
         
          // let newPos = cubes[i].position.add( cubes[i].axis.addScalar(cubes[i].speed*delta) );

          let endPoint = new Vector3(0,0,2); // or camera 
          let newPos = new Vector3(cubes[i].position.x, cubes[i].position.y, cubes[i].position.z);
          newPos = newPos.lerp(endPoint, cubes[i].speed*delta);
          cubes[i].position.set(newPos.x, newPos.y, newPos.z);
          
          // or distance < 1 with cam
            if ( cubes[i].position.z > 0 ) {
              scene.remove( cubes[i] );
              cubes.splice(i,1);
              
              running = false;
              clearTimeout(timeout);
              navigation.replace('Game');
               
            
         
             // GLView.destroyContextAsync(gl);
             // setBegin(false);
        

              //setBegin(false);
              }//if dist
	        }//for
        }


        function createBall(pos){
          const geometry = new SphereGeometry( 0.1, 16, 8 );
          const material = new MeshStandardMaterial( { color: 0xffff00 } );
          const sphere = new Mesh( geometry, material );
          balls.push(sphere);
          scene.add( sphere );
          sphere.position.copy(pos);
          sphere.originPoint = pos;
          sphere.axis = new Vector3(Math.random(), Math.random(), Math.random()).normalize();
          sphere.speed = 12; 
         
        }

        function moveBalls(delta){
       
          if (balls.length <1) return;
          for ( let i = 0; i < balls.length; i ++ ) {
		        balls[i].translateOnAxis(balls[i].axis, balls[i].speed*delta);
            if (balls[i].position.distanceTo(balls[i].originPoint) > 6) {
              scene.remove( balls[i] );
              balls.splice(i,1);
            }//if dist
	        }//for
        }//moveBalls


        function raycast(){
          mouse.x =  (mouseX.current / windowWidth) * 2 - 1;
          mouse.y =  -(mouseY.current / windowHeight) * 2 + 1;
       
         let raycaster = new Raycaster();
          raycaster.setFromCamera( mouse, camera );

	        // calculate objects intersecting the picking ray
	        const intersects = raycaster.intersectObjects( scene.children );
    

          if (intersects.length >0){
           // console.log(intersects[0].object);
            scene.remove(intersects[0].object);
            let index = cubes.findIndex(e => e.id === intersects[0].object.id); 
            cubes.splice(index, 1);

            for (let i=0; i<10; i++){
              createBall(intersects[0].object.position);
            }// for
          }// if interfect
          

        }//raycast()

        function update(delta) {
   
         
          if (fire.current === true){
            raycast();
            fire.current = false;
          }

          createCube(delta);

          moveCubes(delta);
          moveBalls(delta);
        
        }

        // Setup an animation loop
        const render = () => {
          if (!running )return;
          timeout = requestAnimationFrame(render);
          let delta = clock.getDelta();
          time += delta;
 
           //onsole.log(time);
          update(delta);

          renderer.render(scene, camera);
          gl.endFrameEXP();
        };
        render();
      }}
    />
  );
}

class IconMesh extends Mesh {
  constructor(texture) {
    
    super(
   
      new BoxBufferGeometry(0.8, 0.8, 0.8),
      new MeshStandardMaterial({
  
        //map: new TextureLoader().load(require('../assets/pic.jpeg')),
        map: texture
        // color: 0xff0000
      })
    );
  }
}

class ColorMesh extends Mesh {
  constructor() {
    
    super(
   
      new BoxBufferGeometry(0.8, 0.8, 0.8),
      new MeshStandardMaterial({
         color: 0xff0000
      })
    );
  }
}

