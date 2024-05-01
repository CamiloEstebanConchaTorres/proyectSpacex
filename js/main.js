import { getAllRockets } from "./modules/rockets.js";
import { 
    progressRocketWeight, 
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket
} from "./modulesComponents/progressBar.js";


let information__2 = document.querySelector("#information__2");
let dataRockets = await getAllRockets();
let Totales = dataRockets.pop()

let [Rockets1, Rockets2, Rockets3, Rockets4] = dataRockets; 

console.log(dataRockets);
console.log(Totales);

information__2.append(...progressRocketWeight(Totales.kg_max, Rockets3))
information__2.append(...progressPayloadWeights(Totales.payload_weights, Rockets3))
information__2.append(...progressHeightRocket(Totales.height, Rockets3))
information__2.append(...progressDiameterRocket(Totales.diameter, Rockets3))
information__2.append(...progressSecondStageDiameterRocket(Totales.composite_diameter, Rockets3))
information__2.append(...progressSecondStageHeightRocket(Totales.composite_height, Rockets3))


////////////////////////////PARTE IZQUIERDA DE LA PAGINA PARA OBTENER DATOS DE LANZAMIENTOS //////////////////////////////////7

import { getAllLaunches } from "./modules/launches.js"; 
let informationLeft = document.querySelector("#information__1");

(async () => {
    try {
        let [rocketData, launchData] = await Promise.all([getAllRockets(), getAllLaunches()]);
        let launchesToShow = launchData.slice(0, 40);
        let html = "";
        launchesToShow.forEach(launch => {
            html += `
                <div class="description__container">
                    <div>
                        <img src="${launch.links.patch.small}" alt="${launch.name}">
                    </div>
                    <div>
                        <h3>${launch.name}</h3>
                        <small>${launch.details}</small>
                    </div>
                </div>
            `;
        });
        informationLeft.innerHTML = html;
    } catch (error) {
        console.error("Error:", error);
    }
})();