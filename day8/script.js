function updateInputs() {
  const shape = document.getElementById('shape').value;
  const inputsContainer = document.getElementById('inputs');
  inputsContainer.innerHTML = ''; // Clear previous inputs

  if (shape === 'square') {
    inputsContainer.innerHTML = `
      <input type="number" id="side" placeholder="Enter side length">
    `;
  } else if (shape === 'rectangle') {
    inputsContainer.innerHTML = `
      <input type="number" id="length" placeholder="Enter length">
      <input type="number" id="width" placeholder="Enter width">
    `;
  } else if (shape === 'circle') {
    inputsContainer.innerHTML = `
      <input type="number" id="radius" placeholder="Enter radius">
    `;
  } else if (shape === 'triangle') {
    inputsContainer.innerHTML = `
      <input type="number" id="base" placeholder="Enter base">
      <input type="number" id="height" placeholder="Enter height">
    `;
  }
}

// Function to calculate the area
function calculateArea() {
  const shape = document.getElementById('shape').value;
  let area;

  if (shape === 'square') {
    const side = Number(document.getElementById('side').value);
    if (!side) {
      document.getElementById("result").textContent = 'Please enter a valid side length.';
      return;
    }
    area = side ** 2;
  } else if (shape === 'rectangle') {
    const length = Number(document.getElementById('length').value);
    const width = Number(document.getElementById('width').value);
    if (!length || !width) {
      document.getElementById("result").textContent = 'Please enter valid dimensions.';
      return;
    }
    area = length * width;
  } else if (shape === 'circle') {
    const radius = Number(document.getElementById("radius").value);
    if (!radius) {
      document.getElementById("result").textContent = 'Please enter a valid radius.';
      return;
    }
    area = Math.PI * radius ** 2;
  } else if (shape === 'triangle') {
    const base = Number(document.getElementById('base').value);
    const height = Number(document.getElementById('height').value);
    if (!base || !height) {
      document.getElementById("result").textContent = 'Please enter valid dimensions.';
      return;
    }
    area = 0.5 * base * height;
  }

  document.getElementById("result").textContent = `The area is = ${area.toFixed()}`;
}
updateInputs();