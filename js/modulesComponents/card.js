//////// IMAGENES ROCKETS ////////////////////////////////////////////////////////////////////////////

export const imageRockets = async (flickr_images) => {
    let section__image = document.querySelector("#section__image");
    let divs = [];

    flickr_images.forEach(val => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");

        let img = document.createElement("img");
        img.setAttribute("src", val);
        img.setAttribute("referrerpolicy", "no-referrer");
        div.appendChild(img);

        divs.push(div);
    });
    section__image.append(...divs);
    let textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    let text1 = document.createElement("div");
    text1.textContent = "CABIN MICS:";
    text1.style.color = "white";
    let text2 = document.createElement("div");
    text2.textContent = "RECORDING";
    text2.style.color = "red";
    textContainer.appendChild(text1);
    textContainer.appendChild(text2);

    section__image.appendChild(textContainer);
};


//////////////7 IMAGENES CAPSULAS /////////////////////////////////////////////////////////////
