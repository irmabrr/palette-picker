export const newpal = (id, title, colors, temp) => {
    const palList = document.querySelector('.premade');
    const pal  = document.createElement('ul');

    pal.id = id;
    pal.className = 'palette';
    palList.appendChild(pal);

    const palContent = document.createElement('div');
    palContent.className = 'pal-content';
    pal.appendChild(palContent);

    const palTitle = document.createElement('h3');
    palTitle.textContent = title;
    palContent.appendChild(palTitle);

    // Color 1
    const palColor1 = document.createElement('div');
    palColor1.className = 'color-one';
    palContent.appendChild(palColor1);

    const outerOne = document.createElement('div');
    outerOne.className = 'outer-color-one';
    palColor1.appendChild(outerOne);

    const boxOne = document.createElement('div');
    boxOne.className = 'box-color-one';
    boxOne.style.backgroundColor = colors[0];
    outerOne.appendChild(boxOne);

    const textOne = document.createElement('div');
    textOne.className = 'text-color-one';
    boxOne.appendChild(textOne);

    const firstText =  document.createElement('p');
    firstText.className = 'first-text';
    firstText.textContent = 'Text Color 1';
    textOne.appendChild(firstText);

    const nextText = document.createElement('p');
    nextText.className = 'two-text';
    nextText.textContent = 'Text Color 2';
    textOne.appendChild(nextText);

    // Color 2
    const palColor2 = document.createElement('div');
    palColor2.className = 'color-two';
    palContent.appendChild(palColor2);

    const outerTwo = document.createElement('div');
    outerTwo.className = 'outer-color-two';
    palColor2.appendChild(outerTwo);

    const boxTwo = document.createElement('div');
    boxTwo.className = 'box-color-two';
    boxTwo.style.backgroundColor = colors[1];
    outerTwo.appendChild(boxTwo);

    const textTwo = document.createElement('div');
    textTwo.className = 'text-color-two';
    boxTwo.appendChild(textTwo);

    const secondText =  document.createElement('p');
    secondText.className = 'first-text';
    secondText.textContent = 'Text Color 1';
    textTwo.appendChild(secondText);

    const twoText = document.createElement('p');
    twoText.className = 'two-text';
    twoText.textContent = 'Text Color 2';
    textTwo.appendChild(twoText);

    // Color 3
    const palColor3 = document.createElement('div');
    palColor3.className = 'color-three';
    palContent.appendChild(palColor3);

    const outerThree = document.createElement('div');
    outerThree.className = 'outer-color-three';
    palColor3.appendChild(outerThree);

    const boxThree = document.createElement('div');
    boxThree.className = 'box-color-three';
    boxThree.style.backgroundColor = colors[2];
    outerThree.appendChild(boxThree);

    const textThree = document.createElement('div');
    textThree.className = 'text-color-tree';
    boxThree.appendChild(textThree);

    const thirdText =  document.createElement('p');
    thirdText.className = 'third-text';
    thirdText.textContent = 'Text Color 1';
    textThree.appendChild(thirdText);

    const afterText = document.createElement('p');
    afterText.className = 'two-text';
    afterText.textContent = 'Text Color 2';
    textThree.appendChild(afterText);

    const deleteButt = document.createElement('button');
    deleteButt.className = 'delete-butt';
    deleteButt.textContent = 'Delete Palette';
    palContent.appendChild(deleteButt);

    deleteButt.addEventListener('click', () => {
      pal.remove();
    });

    const tempText = document.createElement('div');
    tempText.className = 'temp-text';
    tempText.textContent = temp ;
    if (temp === 'warm') {
      tempText.style.backgroundColor = 'red';
    } else if (temp === 'cool') {
      tempText.style.backgroundColor = 'blue';
    } else {
      tempText.style.backgroundColor = 'gray';
    }
    palContent.appendChild(tempText);
}

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
}