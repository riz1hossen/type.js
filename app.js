    const texts = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque odio labore culpa rerum est debitis natus! Sequi, vel. Assumenda sapiente ea doloremque nihil repellat.'];
    const display = document.querySelector('.text');
    let textIndex = 0;
    let characterIndex = 0;
    display.classList.add('typing');

    setInterval(() => {

        if (characterIndex === texts[textIndex].length) {
            characterIndex = 0;
            if (textIndex === texts.length - 1) {
                textIndex = 0;
            } else {
                textIndex++;
            }
            display.innerHTML = '';
            return;
        }

        display.innerHTML += texts[textIndex][characterIndex];
        characterIndex++;

    }, 60);
