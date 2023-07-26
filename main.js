// Create and append the iframe element with the universe background
const iframeElement = document.createElement('iframe');
iframeElement.src = 'https://clara.io/embed/cf02d69e-0dc9-4d9e-84ed-53c0ca9f77bd?renderer=webgl';
iframeElement.width = '800';
iframeElement.height = '600';
iframeElement.allowFullscreen = true;
document.body.appendChild(iframeElement);
