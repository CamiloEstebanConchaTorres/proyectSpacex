////////////////////// PROGRESS BAR ROCKETS /////////////////////////////////////////////////////

import { 
    getRocketMassTotal, 
    getRocketPayloadWeightsTotal, 
    getRocketHeightTotal, 
    getRocketDiameterTotal,
    getRocketSecondStageCompositeFairingDiameterTotal,
    getRocketSecondStageCompositeFairingHeightTotal
} from "../modules/rockets.js";

import{
    getCapsuleStats
}   from "../modules/capsules.js"

import{
    getCoresStats
}   from "../modules/cores.js"

import{
    getDragonMassTotal
}   from "../modules/dragons.js"

export const progressRocketWeight = async(Rockets)=>{
    let {kg} = await getRocketMassTotal();
    let conterDiv = [];
    [Rockets].forEach((val) => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = "Rocket weight :";
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = kg
        ProgressFist.value = `${val.mass.kg}`;
        ProgressFist.textContent = `${val.mass.kg}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numKg = new Intl.NumberFormat('cop').format(val.mass.kg)
        let numLb = new Intl.NumberFormat('cop').format(val.mass.lb)
        spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressPayloadWeights = async(Rockets)=>{
    let {kg} = await getRocketPayloadWeightsTotal();
    let conterDiv = [];
    Rockets.payload_weights.forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `${val.name} :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = kg;
        ProgressFist.value = `${val.kg}`;
        ProgressFist.textContent = `${val.kg}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numKg = new Intl.NumberFormat('cop').format(val.kg)
        let numLb = new Intl.NumberFormat('cop').format(val.lb)
        spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressHeightRocket = async(Rockets)=>{
    let {meters} = await getRocketHeightTotal();
    let conterDiv = [];
    [Rockets.height].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Rocket Height :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressDiameterRocket = async(Rockets)=>{
    let {meters} = await getRocketDiameterTotal();
    let conterDiv = [];
    [Rockets.diameter].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Rocket diameter :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressSecondStageDiameterRocket = async(Rockets)=>{
    let {meters} = await getRocketSecondStageCompositeFairingDiameterTotal();
    let conterDiv = [];
    [Rockets.second_stage.payloads.composite_fairing.diameter].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Diameter rocket shield :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressSecondStageHeightRocket = async(Rockets)=>{
    let {meters} = await getRocketSecondStageCompositeFairingHeightTotal();
    let conterDiv = [];
    [Rockets.second_stage.payloads.composite_fairing.height].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Height rocket shield :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}


/////////////////// PROGRES BAR CAPSULAS //////////////////////////////////////////////////////////

export const progressCapsuleStats = async (Capsules) => {
    let { reuse_count, water_landings, land_landings } = await getCapsuleStats();

    [Capsules].forEach((val) => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.style.textAlign = "center";
        divInformationContainer.style.fontSize = "16px";
        divInformationContainer.style.marginBottom = "15px";
        let divReuseCount = document.createElement("div");
        let labelReuseCount = document.createElement("label");
        labelReuseCount.textContent = "Reuse Count:";
        labelReuseCount.style.color = "white";
        divReuseCount.append(labelReuseCount);
        let progressReuseCount = document.createElement("progress");
        progressReuseCount.max = reuse_count;
        progressReuseCount.value = val.reuse_count;
        progressReuseCount.textContent = `${val.reuse_count}`;
        if (val.reuse_count === 0 || val.reuse_count === 1) {
            progressReuseCount.style.color = "white";
            progressReuseCount.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        } else if (val.reuse_count === 2) {
            progressReuseCount.style.color = "white";
            progressReuseCount.style.backgroundColor = "yellow";
        } else {
            progressReuseCount.style.color = "white";
            progressReuseCount.style.backgroundColor = "green";
        }
        let divWaterLandings = document.createElement("div");
        let labelWaterLandings = document.createElement("label");
        labelWaterLandings.textContent = "Water Landings:";
        labelWaterLandings.style.color = "white";
        divWaterLandings.append(labelWaterLandings);
        let progressWaterLandings = document.createElement("progress");
        progressWaterLandings.max = 3;
        progressWaterLandings.value = val.water_landings;
        if (val.water_landings === 3) {
            progressWaterLandings.textContent = "Complete";
            progressWaterLandings.style.backgroundColor = "green";
        } else if (val.water_landings === 2) {
            progressWaterLandings.textContent = "Half";
            progressWaterLandings.style.backgroundColor = "yellow";
        } else if (val.water_landings === 1) {
            progressWaterLandings.textContent = "Some";
            progressWaterLandings.style.backgroundColor = "red";
        } else {
            progressWaterLandings.textContent = "None";
            progressWaterLandings.style.backgroundColor = "red";
        }
        let divLandLandings = document.createElement("div");
        let labelLandLandings = document.createElement("label");
        labelLandLandings.textContent = "Land Landings:";
        labelLandLandings.style.color = "white";
        divLandLandings.append(labelLandLandings);
        let progressLandLandings = document.createElement("progress");
        progressLandLandings.max = land_landings;
        progressLandLandings.value = val.land_landings;
        progressLandLandings.textContent = `${val.land_landings}`;
        if (val.land_landings === 0 || val.land_landings === 1) {
            progressLandLandings.style.color = "white";
            progressLandLandings.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        } else if (val.land_landings === 2) {
            progressLandLandings.style.color = "white";
            progressLandLandings.style.backgroundColor = "yellow";
        } else {
            progressLandLandings.style.color = "white";
            progressLandLandings.style.backgroundColor = "green";
        }
        divInformationContainer.append(divReuseCount);
        divInformationContainer.append(progressReuseCount);
        divInformationContainer.append(document.createElement("br"));
        divInformationContainer.append(divWaterLandings);
        divInformationContainer.append(progressWaterLandings);
        divInformationContainer.append(document.createElement("br"));
        divInformationContainer.append(divLandLandings);
        divInformationContainer.append(progressLandLandings);
        document.querySelector("#information__2").appendChild(divInformationContainer);
    });
};
/////////////////// PROGRES BAR CORES //////////////////////////////////////////////////////////

export const progressCoresStats = async (Cores) => {
    let { reuse_count, rtls_attempts, rtls_landings, asds_attempts, asds_landings } = await getCoresStats();

    [Cores].forEach((val) => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.style.textAlign = "center";
        divInformationContainer.style.fontSize = "16px";
        divInformationContainer.style.marginBottom = "15px";

        let divReuseCount = document.createElement("div");
        let labelReuseCount = document.createElement("label");
        labelReuseCount.textContent = "Reuse Count:";
        labelReuseCount.style.color = "white";
        divReuseCount.append(labelReuseCount);

        let progressReuseCount = document.createElement("progress");
        progressReuseCount.max = reuse_count;
        progressReuseCount.value = val.reuse_count;
        progressReuseCount.textContent = val.reuse_count === 0 ? "No hay datos" : `${val.reuse_count}`;

        if (val.reuse_count === 0) {
            progressReuseCount.style.color = "white";
            progressReuseCount.style.backgroundColor = "red";
        } else if (val.reuse_count === 1) {
            progressReuseCount.style.color = "white";
            progressReuseCount.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        } else if (val.reuse_count === 2) {
            progressReuseCount.style.color = "white";
            progressReuseCount.style.backgroundColor = "yellow";
        } else {
            progressReuseCount.style.color = "white";
            progressReuseCount.style.backgroundColor = "green";
        }

        let divRtlsAttempts = document.createElement("div");
        let labelRtlsAttempts = document.createElement("label");
        labelRtlsAttempts.textContent = "RTLS Attempts:";
        labelRtlsAttempts.style.color = "white";
        divRtlsAttempts.append(labelRtlsAttempts);

        let progressRtlsAttempts = document.createElement("progress");
        progressRtlsAttempts.max = rtls_attempts;
        progressRtlsAttempts.value = val.rtls_attempts;
        progressRtlsAttempts.textContent = val.rtls_attempts === 0 ? "No hay datos" : `${val.rtls_attempts}`;

        if (val.rtls_attempts === 0) {
            progressRtlsAttempts.style.color = "white";
            progressRtlsAttempts.style.backgroundColor = "red";
        } else {
            progressRtlsAttempts.style.color = "white";
            progressRtlsAttempts.style.backgroundColor = "green";
        }

        let divRtlsLandings = document.createElement("div");
        let labelRtlsLandings = document.createElement("label");
        labelRtlsLandings.textContent = "RTLS Landings:";
        labelRtlsLandings.style.color = "white";
        divRtlsLandings.append(labelRtlsLandings);

        let progressRtlsLandings = document.createElement("progress");
        progressRtlsLandings.max = rtls_landings;
        progressRtlsLandings.value = val.rtls_landings;
        progressRtlsLandings.textContent = val.rtls_landings === 0 ? "No hay datos" : `${val.rtls_landings}`;

        if (val.rtls_landings === 0) {
            progressRtlsLandings.style.color = "white";
            progressRtlsLandings.style.backgroundColor = "red";
        } else {
            progressRtlsLandings.style.color = "white";
            progressRtlsLandings.style.backgroundColor = "green";
        }

        let divAsdsAttempts = document.createElement("div");
        let labelAsdsAttempts = document.createElement("label");
        labelAsdsAttempts.textContent = "ASDS Attempts:";
        labelAsdsAttempts.style.color = "white";
        divAsdsAttempts.append(labelAsdsAttempts);

        let progressAsdsAttempts = document.createElement("progress");
        progressAsdsAttempts.max = asds_attempts;
        progressAsdsAttempts.value = val.asds_attempts;
        progressAsdsAttempts.textContent = val.asds_attempts === 0 ? "No hay datos" : `${val.asds_attempts}`;

        if (val.asds_attempts === 0) {
            progressAsdsAttempts.style.color = "white";
            progressAsdsAttempts.style.backgroundColor = "red";
        } else {
            progressAsdsAttempts.style.color = "white";
            progressAsdsAttempts.style.backgroundColor = "green";
        }

        let divAsdsLandings = document.createElement("div");
        let labelAsdsLandings = document.createElement("label");
        labelAsdsLandings.textContent = "ASDS Landings:";
        labelAsdsLandings.style.color = "white";
        divAsdsLandings.append(labelAsdsLandings);

        let progressAsdsLandings = document.createElement("progress");
        progressAsdsLandings.max = asds_landings;
        progressAsdsLandings.value = val.asds_landings;
        progressAsdsLandings.textContent = val.asds_landings === 0 ? "No hay datos" : `${val.asds_landings}`;

        if (val.asds_landings === 0) {
            progressAsdsLandings.style.color = "white";
            progressAsdsLandings.style.backgroundColor = "red";
        } else {
            progressAsdsLandings.style.color = "white";
            progressAsdsLandings.style.backgroundColor = "green";
        }

        divInformationContainer.append(divReuseCount);
        divInformationContainer.append(progressReuseCount);
        divInformationContainer.append(document.createElement("br"));
        divInformationContainer.append(divRtlsAttempts);
        divInformationContainer.append(progressRtlsAttempts);
        divInformationContainer.append(document.createElement("br"));
        divInformationContainer.append(divRtlsLandings);
        divInformationContainer.append(progressRtlsLandings);
        divInformationContainer.append(document.createElement("br"));
        divInformationContainer.append(divAsdsAttempts);
        divInformationContainer.append(progressAsdsAttempts);
        divInformationContainer.append(document.createElement("br"));
        divInformationContainer.append(divAsdsLandings);
        divInformationContainer.append(progressAsdsLandings);

        document.querySelector("#information__2").appendChild(divInformationContainer);
    });
};


///////////////////////////////77 DRAGONS ///////////////////////////////////////////////////////////////77

export const progressDragonWeight = async(Dragons)=>{
    let kg = await getDragonMassTotal();
    let conterDiv = [];
    [Dragons].forEach((val) => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container");

        let divFirst = document.createElement("div");
        let labelFirst = document.createElement("label");
        labelFirst.textContent = "Dragon weight:";

        let progressFirst = document.createElement("progress");
        progressFirst.max = kg;
        progressFirst.value = val.dry_mass_kg;
        progressFirst.textContent = `${((val.dry_mass_kg / kg) * 100).toFixed(2)}%`;

        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numKg = new Intl.NumberFormat('cop').format(val.dry_mass_kg);
        let numLb = new Intl.NumberFormat('cop').format(val.dry_mass_lbs);
        spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`;

        divFirst.append(labelFirst);
        divFirst.append(progressFirst);
        divLast.append(spanLast);
        divInformationContainer.append(divFirst);
        divInformationContainer.append(divLast);
        conterDiv.push(divInformationContainer);
    });

    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv);
}
