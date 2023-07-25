const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Create the universe background
const textureLoader = new THREE.TextureLoader();
const universeTexture = textureLoader.load('path/to/universe_texture.jpg', () => {
    // Texture loaded callback, start the rendering after texture is loaded
    animate();
});
const background = new THREE.Mesh(
    new THREE.SphereGeometry(100, 32, 32),
    new THREE.MeshBasicMaterial({ map: universeTexture, side: THREE.BackSide })
);
scene.add(background);

// Create a rotating cube in the center
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
