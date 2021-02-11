const container = document.getElementById('img-container');

for (let i = 1; i <= 97; i++) {
    if (i <= 12) {
        container.innerHTML +=
        `<div class='panels'>
            <img src="birds.jpg" style='object-position: calc(${(i-1) * -159}px) top;'>
        </div>`
    } else if (i >= 13 && i <= 24) { 
        container.innerHTML +=
        `<div class='panels'>
            <img src="birds.jpg" style='object-position: calc(${(i-13) * -159}px) -117px;'>
        </div>`
    } else if (i >= 25 && i <= 36) { 
        container.innerHTML +=
        `<div class='panels'>
            <img src="birds.jpg" style='object-position: calc(${(i-25) * -159}px) -234px;'>
        </div>`
    } else if (i >= 37 && i <= 48) { 
        container.innerHTML +=
        `<div class='panels'>
            <img src="birds.jpg" style='object-position: calc(${(i-37) * -159}px) -351px;'>
        </div>`
    } else if (i >= 49 && i <= 60) { 
        container.innerHTML +=
        `<div class='panels'>
            <img src="birds.jpg" style='object-position: calc(${(i-49) * -159}px) -468px;'>
        </div>`
    } else if (i >= 61 && i <= 72) { 
        container.innerHTML +=
        `<div class='panels'>
            <img src="birds.jpg" style='object-position: calc(${(i-61) * -159}px) -585px;'>
        </div>`
    } else if (i >= 73 && i <= 84) { 
        container.innerHTML +=
        `<div class='panels'>
            <img src="birds.jpg" style='object-position: calc(${(i-73) * -159}px) -702px;'>
        </div>`
    } else if (i >= 85 && i <= 96) { 
        container.innerHTML +=
        `<div class='panels'>
            <img src="birds.jpg" style='object-position: calc(${(i-85) * -159}px) -819px;'>
        </div>`
    } 
    
    console.log(container);
}
