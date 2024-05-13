import { 
    load,
    paginationCapsules,
    paginationRockets,
    //paginationCompany
} from "./modulesComponents/pagination.js";

let footerSelect = async(e, id)=>{
    e.preventDefault();
    await load();
    let li = document.querySelectorAll(".footer ul li")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}


let rocket = document.querySelector("#overview-link")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
} )

let capsules = document.querySelector("#Capsules-link")
capsules.addEventListener("click", async(e)=>{
    await footerSelect(e, capsules)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})

//let company = document.querySelector("#Company-link")
//company.addEventListener("click", async(e)=>{
    //await footerSelect(e, company)
    //let paginacion = document.querySelector("#paginacion");
    //paginacion.innerHTML = ""
    //paginacion.append(await paginationCompany())
//})


rocket.click();


  
  // Función para mostrar la información de las cápsulas en la página
  const displayCapsulesInfo = async () => {
    try {
      // Obtener los datos de las cápsulas
      const capsulesData = await getCapsulesData();
  
      // Verificar si se obtuvieron los datos correctamente
      if (!capsulesData) {
        console.error("No se pudieron obtener los datos de las cápsulas");
        return;
      }
  
      // Iterar sobre los datos de las cápsulas y mostrar la información
      capsulesData.forEach(capsule => {
        // Aquí puedes agregar tu lógica para mostrar la información de cada cápsula en la página
        console.log(capsule);
      });
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  // Llamar a la función para mostrar la información de las cápsulas
  displayCapsulesInfo();