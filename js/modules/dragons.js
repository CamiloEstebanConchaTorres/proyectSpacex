export const getAllDragons = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/dragons")
    let data = await res.json();
    return data;
}
export const getAllDragonsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/dragons/${id}`)
    let data = await res.json();
    return data;
}

export const getDragonMassTotal = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "dry_mass_kg": 1
                },
                "sort":{
                    "dry_mass_kg": "desc"
                },
                "limit": 1
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let {docs:[{dry_mass_kg} = maxMassDragon]} = await res.json();
    return dry_mass_kg;
}
