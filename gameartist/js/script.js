// Print Button
function printPageA4() {
  window.print();
}

// Zoom Controls
let currentZoom = 1;

function zoomIn() {
  currentZoom += 0.1;
  updateZoom();
}

function zoomOut() {
  if (currentZoom > 0.2) {
    currentZoom -= 0.1;
    updateZoom();
  }
}

function zoomReset() {
  currentZoom = 1;
  updateZoom();
}

function updateZoom() {
  const pageA4 = document.querySelector('.pageA4');
  const zoomDisplay = document.querySelector('.zoom-controls_zoom');
  
  pageA4.style.zoom = currentZoom;
  zoomDisplay.textContent = Math.round(currentZoom * 100) + '%';
}
