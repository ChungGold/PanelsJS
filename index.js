const container = document.getElementById('img-container');

let counter = 0;

window.onload = setTimeout(() => {
    for (let i = 1; i <= 96; i++) {
        container.innerHTML +=
        `<div class='panels' style='object-position: calc(${i * 159}px) top;
        animation-delay: ${i}s;
        '>
        </div>`
        console.log(container);
        counter += 0.1;
    }
}, 200);

// background: url(birds.jpg);