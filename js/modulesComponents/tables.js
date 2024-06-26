////////////////////////////// TABLAS ROCKETS ////////////////////////////////////////////////////

export const tableRocketColum1 = async (Rocket)=>{

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Information rocket"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Rocket in service"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Rocket.active) ? "Active" : "Low" }`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Number of stages"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Rocket.stages}`
    div2.append(span2, strong2)
    
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Number of propellants"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Rocket.boosters}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Type"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Rocket.type}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Landing legs"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Rocket.landing_legs.number}`
    div5.append(span5, strong5)

    // 
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Leg material"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.landing_legs.material) ? Rocket.landing_legs.material : ""}`
    div6.append(span6, strong6)

    div.append(div4, div1, div2, div3, div5, div6)
    information__table__1.append(div)
    // 

    // <h3>Title</h3>
    // <hr>
    // <div class="table__container__1">
    //     <div>
    //         <span>Title</span>
    //         <strong>Hola</strong>
    //     </div>
        
    // </div>
}
export const tableRocketColum2 = async (Rocket)=>{
    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Engine information"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Maximum power loss"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Rocket.engines.engine_loss_max) ? Rocket.engines.engine_loss_max : 0}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Engine availability"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${(Rocket.engines.layout) ? Rocket.engines.layout : ""}`
    div2.append(span2, strong2)

    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Number of engines"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${(Rocket.engines.number) ? Rocket.engines.number : 0}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Stage 1 fuel"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${(Rocket.engines.propellant_1) ? Rocket.engines.propellant_1 : ""}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Stage 2 fuel"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${(Rocket.engines.propellant_2) ? Rocket.engines.propellant_2 : ""}`
    div5.append(span5, strong5)

    // 
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Type"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.engines.type) ? Rocket.engines.type : 0} ${(Rocket.engines.version) ? Rocket.engines.version : ""}`
    div6.append(span6, strong6)

    div.append(div6, div1, div2, div3, div4, div5)
    information__table__2.append(div)
    // 

    // <h3>Title</h3>
    // <hr>
    // <div class="table__container__1">
    //     <div>
    //         <span>Title</span>
    //         <strong>Hola</strong>
    //     </div>
        
    // </div>
}


////////////////////////////////7 TABLAS CAPSULAS ////////////////////////////////////////////////7

export const tableCapsulesLaunches = async (Capsules) => {
    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.style.fontSize = "32px"; // Aumenta el tamaño de fuente del título a 32 píxeles
    h3.style.color = "red";
    h3.textContent = "Capsule Launches";
    let hr = document.createElement("hr");
    let div = document.createElement("div");
    div.classList.add("table__container__1");
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.style.fontSize = "24px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    span1.textContent = "Launches";
    let strong1 = document.createElement("strong");
    strong1.style.fontSize = "24px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    strong1.textContent = `${Capsules.launches}`;
    div1.append(span1, strong1);
    div.append(div1);
    information__table__1.append(h3, hr, div);
};

export const tableCapsulesserial = async (Capsules) => {
    let information__table__1 = document.querySelector("#information__table__2");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.style.fontSize = "25px"; // Aumenta el tamaño de fuente del título a 32 píxeles
    h3.style.color = "red";
    h3.textContent = "Capsule Serial";
    let hr = document.createElement("hr");
    let div = document.createElement("div");
    div.classList.add("table__container__1");
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.style.fontSize = "20px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    span1.textContent = "Serial";
    let strong1 = document.createElement("strong");
    strong1.style.fontSize = "20px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    strong1.textContent = `${Capsules.serial}`;
    div1.append(span1, strong1);
    div.append(div1);
    information__table__1.append(h3, hr, div);
};

////////////////////////////////////7 CORES //////////////////////////////////////////////////////////

export const tableCoresLaunches = async (Cores) => {
    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.style.fontSize = "32px"; // Aumenta el tamaño de fuente del título a 32 píxeles
    h3.style.color = "red";
    h3.textContent = "Capsule Launches";
    let hr = document.createElement("hr");
    let div = document.createElement("div");
    div.classList.add("table__container__1");
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.style.fontSize = "24px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    span1.style.color = "blue";
    span1.textContent = "N° Block";
    let strong1 = document.createElement("strong");
    strong1.style.fontSize = "24px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    strong1.style.color = "green";
    strong1.textContent = `${Cores.block}`;
    div1.append(span1, strong1);
    div.append(div1);
    information__table__1.append(h3, hr, div);
};


export const tableCoreLaunchesid = async (Cores) => {
    let information__table__1 = document.querySelector("#information__table__2");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.style.fontSize = "32px"; // Aumenta el tamaño de fuente del título a 32 píxeles
    h3.style.color = "red";
    h3.textContent = "Capsule Launches";
    let hr = document.createElement("hr");
    let div = document.createElement("div");
    div.classList.add("table__container__1");
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.style.fontSize = "24px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    span1.textContent = "Launches";
    let strong1 = document.createElement("strong");
    strong1.style.fontSize = "24px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    strong1.textContent = `${Cores.launches}`;
    div1.append(span1, strong1);
    div.append(div1);
    information__table__1.append(h3, hr, div);
}

//////////////////////////////////// DRAGONES ////////////////////////////////////////////7

export const tableDragonColumn1 = async (Dragons) => {
    let informationTable1 = document.querySelector("#information__table__1");
    informationTable1.innerHTML = "";
    
    let h3 = document.createElement("h3");
    h3.textContent = "Dragon Information";
    let hr = document.createElement("hr");
    informationTable1.append(h3, hr);

    let div = document.createElement("div");
    div.classList.add("table__container__1");

    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Dragon in service";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.active ? "Active" : "Inactive"}`;
    div1.append(span1, strong1);

    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Crew capacity";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.crew_capacity}`;
    div2.append(span2, strong2);

    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Cargo capacity";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Dragons.cargo_capacity_kg} kg`;
    div3.append(span3, strong3);

    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Heat shield material";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Dragons.heat_shield.material}`;
    div4.append(span4, strong4);

    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Thruster type";
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Dragons.thrusters.type}`;
    div5.append(span5, strong5);

    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Number of thrusters";
    let strong6 = document.createElement("strong");
    strong6.textContent = `${Dragons.thrusters.number}`;
    div6.append(span6, strong6);

    div.append(div1, div2, div3, div4, div5, div6);
    informationTable1.append(div);
}


//////////////////////////// LANDPADS /////////////////////////////////////////////////////777

export const tableCoresLaunchesland = async (Land) => {
    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.style.fontSize = "22px"; // Aumenta el tamaño de fuente del título a 32 píxeles
    h3.style.color = "red";
    h3.textContent = "LANDPADS ID";
    let hr = document.createElement("hr");
    let div = document.createElement("div");
    div.classList.add("table__container__1");
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.style.fontSize = "14px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    span1.style.color = "blue";
    span1.textContent = "N° ID";
    let strong1 = document.createElement("strong");
    strong1.style.fontSize = "14px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    strong1.style.color = "green";
    strong1.textContent = `${Land.id}`;
    div1.append(span1, strong1);
    div.append(div1);
    information__table__1.append(h3, hr, div);
};

////////////////////////////////// SHIPS /////////////7



export const tableCoresLauncheslandship = async (Ships) => {
    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Information Ship"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "IMO"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Ships.imo}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "MMSI"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Ships.mmsi}`
    div2.append(span2, strong2)
    
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "ABS"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Ships.abs}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Class"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Ships.class}`
    div4.append(span4, strong4)

    div.append(div1, div2, div3, div4)
    information__table__1.append(div)
}


export const tableCoresLauncheslandsship = async (Ships) => {
    let information__table__1 = document.querySelector("#information__table__2");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Information Ship"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "IMO"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Ships.mass_kg}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "MMSI"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Ships.mass_lbs}`
    div2.append(span2, strong2)
    
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "ABS"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Ships.year_built}`
    div3.append(span3, strong3)

    
    div.append(div1, div2, div3)
    information__table__1.append(div)
}
