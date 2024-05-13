export const getAllCapsules = async (page,limit)=>{
  let config = {
      headers:{
          "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
          "options": {
              page,
              limit
          }
      })
  }
  let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config)
  let data = await res.json();
  console.log(data);
  return data;
}

export const getAllCapsulesId = async (id) => {
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`);
    let data = await res.json();
    return [data];
};

export const getCapsuleTotalMass = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "dry_mass_kg": 1,
                    "mass_returned_kg": 1
                },
                "sort": {
                    "dry_mass_kg": "desc"
                },
                "limit": 1
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs: [{ dry_mass_kg, mass_returned_kg }] = [] } = await res.json();
    
    // Calcular la masa total sumando la masa en estado seco y la masa devuelta
    let totalMass = (dry_mass_kg || 0) + (mass_returned_kg || 0);

    return totalMass;
};

export const getCapsulesData = async () => {
    try {
      // Hacer la solicitud GET a la API
      const response = await fetch("https://api.spacexdata.com/v4/capsules");
      
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error("Error al obtener los datos de las cápsulas");
      }
  
      // Convertir la respuesta a formato JSON
      const data = await response.json();
  
      // Devolver los datos obtenidos
      return data;
    } catch (error) {
      console.error("Error:", error.message);
      return null;
    }
  };