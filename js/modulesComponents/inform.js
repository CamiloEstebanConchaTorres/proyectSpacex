//////////////////////////// INFORM ROCKETS /////////////////////////////////////////////////////////

import {
    getAllRocketEngineTotal,
    getAllRocketEngineThrustVacuumTotal,
    getAllRocketData
} from "../modules/rockets.js";

import{
    getAllDragonEngineTotal,
    getAllDragonData
}   from "../modules/dragons.js"

export const informRocketEngineThrustSeaLevel = async (thrust_sea_level) => {
    let { kN: totalKN } = await getAllRocketEngineTotal();
    let percentage = (thrust_sea_level.kN * 100) / totalKN;
    let div = document.createElement('div');
    div.classList.add("carousel__item");
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    let color = '';
    if (percentage < 30) {
        color = 'red';
    } else if (percentage < 70) {
        color = 'orange';
    } else {
        color = 'blue';
    }
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(${color} ${percentage}%, transparent 0)`;
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value");
    let strong = document.createElement('strong');
    strong.textContent = "Atmospheric acceleration";
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${percentage.toFixed(2)} %`;
    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_sea_level.kN);
    let lbf = new Intl.NumberFormat('cop').format(thrust_sea_level.lbf);
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`;
    divFirstChildren.append(strong, smallFirst, smallLast);
    divFirst.append(divFirstChildren);
    div.append(divFirst);
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.innerHTML = "";
    section__information__1.append(div);
};

export const informRocketEngineThrustVacuum = async (thrust_vacuum) => {
    let { kN: totalKN } = await getAllRocketEngineThrustVacuumTotal();
    let percentage = (thrust_vacuum.kN * 100) / totalKN;
    let div = document.createElement('div');
    div.classList.add("carousel__item");
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    let color = '';
    if (percentage < 30) {
        color = 'red';
    } else if (percentage < 70) {
        color = 'orange';
    } else {
        color = 'blue';
    }
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(${color} ${percentage}%, transparent 0)`;
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value");
    let strong = document.createElement('strong');
    strong.textContent = "Speed in space";
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${percentage.toFixed(2)} %`;
    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_vacuum.kN);
    let lbf = new Intl.NumberFormat('cop').format(thrust_vacuum.lbf);
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`;
    divFirstChildren.append(strong, smallFirst, smallLast);
    divFirst.append(divFirstChildren);
    div.append(divFirst);
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.append(div);
};

export const informRocketData = async () => {
    let { totalRockets, activeRockets } = await getAllRocketData();
    let div = document.createElement('div');
    div.classList.add("carousel__item");
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    let percentage = (totalRockets * 100) / totalRockets;
    let color = 'blue';
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(${color} ${percentage}%, transparent 0)`;
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value");
    let strong = document.createElement('strong');
    strong.textContent = "Total Rockets";
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${percentage.toFixed(2)} %`;
    let smallLast = document.createElement('small');
    smallLast.innerHTML = `${totalRockets}`;
    divFirstChildren.append(strong, smallFirst, smallLast);
    divFirst.append(divFirstChildren);
    div.append(divFirst);
    document.getElementById('section__information__q').append(div);
    div = document.createElement('div');
    div.classList.add("carousel__item");
    divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    percentage = (activeRockets * 100) / totalRockets;
    color = 'orange';
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(${color} ${percentage}%, transparent 0)`;
    divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value");
    strong = document.createElement('strong');
    strong.textContent = "Active Rockets";
    smallFirst = document.createElement('small');
    smallFirst.textContent = `${percentage.toFixed(2)} %`;
    smallLast = document.createElement('small');
    smallLast.innerHTML = `${activeRockets}`;
    divFirstChildren.append(strong, smallFirst, smallLast);
    divFirst.append(divFirstChildren);
    div.append(divFirst);
    document.getElementById('section__information__w').append(div);
};



////////////////////////// INFORM DRAGONS ////////////////////////////////////////////////////////////////////

export const informDragonLaunchPayloadMass = async (launch_payload_mass) => {
    let { kg: totalKg } = await getAllDragonEngineTotal();
    let percentage = (launch_payload_mass.kg * 100) / totalKg;
    let div = document.createElement('div');
    div.classList.add("carousel__item");
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    let color = '';
    if (percentage < 30) {
        color = 'red';
    } else if (percentage < 70) {
        color = 'orange';
    } else {
        color = 'blue';
    }
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(${color} ${percentage}%, transparent 0)`;
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value");
    let strong = document.createElement('strong');
    strong.textContent = "Launch Payload Mass";
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${percentage.toFixed(2)} %`;
    let smallLast = document.createElement('small');
    let kg = new Intl.NumberFormat('cop').format(launch_payload_mass.kg);
    let lb = new Intl.NumberFormat('cop').format(launch_payload_mass.lb);
    smallLast.innerHTML = `${kg} kg <br> ${lb} lb`;
    divFirstChildren.append(strong, smallFirst, smallLast);
    divFirst.append(divFirstChildren);
    div.append(divFirst);
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.innerHTML = "";
    section__information__1.append(div);
};

export const informDragonData = async () => {
    let { totalDragons, activeDragons } = await getAllDragonData();
    let div = document.createElement('div');
    div.classList.add("carousel__item");
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    let percentage = (totalDragons * 100) / totalDragons;
    let color = 'blue';
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(${color} ${percentage}%, transparent 0)`;
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value");
    let strong = document.createElement('strong');
    strong.textContent = "Total Dragons";
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${percentage.toFixed(2)} %`;
    let smallLast = document.createElement('small');
    smallLast.innerHTML = `${totalDragons}`;
    divFirstChildren.append(strong, smallFirst, smallLast);
    divFirst.append(divFirstChildren);
    div.append(divFirst);
    document.getElementById('section__information__q').append(div);
    div = document.createElement('div');
    div.classList.add("carousel__item");
    divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    percentage = (activeDragons * 100) / totalDragons;
    color = 'orange';
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(${color} ${percentage}%, transparent 0)`;
    divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value");
    strong = document.createElement('strong');
    strong.textContent = "Active Dragons";
    smallFirst = document.createElement('small');
    smallFirst.textContent = `${percentage.toFixed(2)} %`;
    smallLast = document.createElement('small');
    smallLast.innerHTML = `${activeDragons}`;
    divFirstChildren.append(strong, smallFirst, smallLast);
    divFirst.append(divFirstChildren);
    div.append(divFirst);
    document.getElementById('section__information__w').append(div);
}

/////////////////////////// LAND /////////////////////////////////

export const createCenteredImage = () => {
    // Crear la imagen
    let img = document.createElement('img');
    img.src = 'storage/img/giphy-unscreen.gif'; // Reemplaza con la ruta de tu imagen
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.style.maxWidth = '50%'; // Ajusta el ancho máximo de la imagen al 50% del contenedor
    img.style.height = 'auto'; // Mantiene la proporción de la imagen

    // Obtener el elemento donde se insertará la imagen
    let container = document.getElementById('section__information__q');

    // Insertar la imagen en el contenedor
    container.appendChild(img);
}

export const createCenteredImageship = () => {
    // Crear la imagen
    let img = document.createElement('img');
    img.src = 'storage/img/giphy-unscreen.gif'; // Reemplaza con la ruta de tu imagen
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.style.maxWidth = '50%'; // Ajusta el ancho máximo de la imagen al 50% del contenedor
    img.style.height = 'auto'; // Mantiene la proporción de la imagen

    // Obtener el elemento donde se insertará la imagen
    let container = document.getElementById('section__information__q');

    // Insertar la imagen en el contenedor
    container.appendChild(img);
}