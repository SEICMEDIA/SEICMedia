$(document).ready(function() {
    // Fade in the title
    $('header h1').addClass('animated fadeIn');
  
    // Create the 3D scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);
  
    // Create stars
    const starGeometry = new THREE.SphereGeometry(0.1);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const stars = new THREE.Group();
  
    for (let i = 0; i < 100; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.set(randomPosition(), randomPosition(), randomPosition());
      stars.add(star);
    }
  
    scene.add(stars);
  
    // Set up camera position
    camera.position.z = 5;
  
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
  
      stars.rotation.x += 0.001;
      stars.rotation.y += 0.001;
  
      renderer.render(scene, camera);
    }
  
    animate();
  });
  
  function randomPosition() {
    return Math.random() * 30 - 15;
  }
  