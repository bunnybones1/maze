import { PCFSoftShadowMap, WebGLRenderer } from "three";
import { PerspectiveCamera } from "three";
import { Scene } from "three";
import { Object3D } from "three";
import type {} from "vite";
import { Game } from "./Game";
import { initResizeHandler } from "./initResizeHandler";
// import { testModelCluster } from "./testModelCluster"

// Create a scene
const scene = new Scene();

// Create a camera
const camera = new PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000,
);

scene.add(camera);
camera.position.set(0, 0, 5);
camera.frustumCulled;

// camera.position.set(Number(c[0]), Number(c[1]) + 1, Number(c[2]))
const renderer = new WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;

renderer.autoClear = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const pivot = new Object3D();
scene.add(pivot);
const pivotCluster = new Object3D();
pivot.add(pivotCluster);
const testPivot = new Object3D();
pivot.add(testPivot);

function rafRender() {
	requestAnimationFrame(rafRender);
	// light.position.set(1, 1, 1).normalize()
	// light.position.applyQuaternion(camera.quaternion)
	renderer.render(scene, camera);
}
rafRender();

let simulate: ((dt: number) => void) | undefined;
let lastNow = performance.now();
function rafSimulate() {
	requestAnimationFrame(rafSimulate);
	const now = performance.now();
	if (simulate) {
		simulate((now - lastNow) * 0.001);
	}
	lastNow = now;
}
rafSimulate();
initResizeHandler(camera, renderer);

const gamePivot = new Object3D();
scene.add(gamePivot);

if (import.meta.hot) {
	import.meta.hot.accept("./Game", (mod) => {
		while (gamePivot.children.length > 0) {
			gamePivot.remove(gamePivot.children[0]);
		}
		game.cleanup();
		game = new mod.Game(gamePivot, camera);
		simulate = game.simulate;
	});
}
let game = new Game(gamePivot, camera);
simulate = game.simulate;
