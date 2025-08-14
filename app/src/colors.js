export const newpal = (id, title, colors, temp) => {

  const palList = document.querySelector('.premade');
  const pal = document.createElement('li');

  pal.id = id;
  pal.className = 'palette';
  palList.appendChild(pal);

  const palContent = document.createElement('div');
  palContent.className = 'pal-content';
  pal.appendChild(palContent);

  const palTitle = document.createElement('h3');
  palTitle.textContent = title;
  palContent.appendChild(palTitle);

  colors.forEach((color) => {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color-block';
    palContent.appendChild(colorDiv);

    const outer = document.createElement('div');
    outer.className = 'outer-color';
    colorDiv.appendChild(outer);

    const box = document.createElement('div');
    box.className = 'color-box';
    box.dataset.hex = color;
    box.style.backgroundColor = color;
    outer.appendChild(box);

    const whiteDiv = document.createElement('div');
    whiteDiv.className = 'white-block';
    const whiteText = document.createElement('p');
    whiteText.className = 'white';
    whiteText.textContent = 'Text Color 1';
    whiteDiv.appendChild(whiteText);
    box.appendChild(whiteDiv);

    const blackDiv = document.createElement('div');
    blackDiv.className = 'black-block';
    const blackText = document.createElement('p');
    blackText.className = 'black';
    blackText.textContent = 'Text Color 2';
    blackDiv.appendChild(blackText);
    box.appendChild(blackDiv);

    const copybutton = document.createElement('button');
    copybutton.className = 'copy-button';
    copybutton.textContent = `Copy ${color}`;
    box.appendChild(copybutton);

    copybutton.addEventListener('click', () => {
      navigator.clipboard.writeText(color).then(() => {
        const originalText = copybutton.textContent;
        copybutton.textContent = 'Copied hex code!';
        setTimeout(() => (copybutton.textContent = originalText), 1000);
      });
    });
  });

  const deleteButt = document.createElement('button');
  deleteButt.className = 'delete-butt';
  deleteButt.textContent = 'Delete Palette';
  palContent.appendChild(deleteButt);

  deleteButt.addEventListener('click', () => {
    pal.remove();
  });

  const tempText = document.createElement('div');
  tempText.className = 'temp-text';
   if (temp === 'warm') {
        tempText.style.backgroundColor = 'red';
        tempText.textContent = 'Warm';
      } else if (temp === 'cool') {
        tempText.style.backgroundColor = 'blue';
        tempText.textContent = 'Cool';
      } else {
        tempText.style.backgroundColor = 'gray';
        tempText.textContent = 'Neutral';
      }
  palContent.appendChild(tempText);
};

export const handleFormSubmit = (event) => {
  event.preventDefault();

  const PalTitle = event.target.title.value;
  const color1 = event.target['color-1'].value;
  const color2 = event.target['color-2'].value;
  const color3 = event.target['color-3'].value;
  const temp = event.target.temp.value;

  if (!PalTitle || !color1 || !color2 || !color3) {
    alert('Please fill out all fields');
    return;
  }

  const id = 'pal-' + Math.random().toString(36);
  newpal(id, PalTitle, [color1, color2, color3], temp);

  event.target.reset();
};
