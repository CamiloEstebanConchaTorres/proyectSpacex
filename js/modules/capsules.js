export const getAllCapsules = async () => {
    let res = await fetch("https://api.spacexdata.com/v4/capsules");
    let data = await res.json();
    return data;
};

export const getAllCapsulesId = async (id) => {
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`);
    let data = await res.json();
    return data;
};

export const getCapsulesStatus = async () => {
    let config = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
                "options": {
                    "select": {
                        "status": 1,
                        "original_launch": 1
                    },
                    "sort": {
                        "original_launch": "asc"
                    }
                }
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs: capsules } = await res.json();

    let totalData = {
        totalCapsules: capsules.length,
        activeCapsules: capsules.filter(capsule => capsule.status === "active").length,
        retiredCapsules: capsules.filter(capsule => capsule.status === "retired").length
    };

    return totalData;
};

export const getCapsulesReuse = async () => {
    let config = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
                "options": {
                    "select": {
                        "reuse_count": 1
                    },
                    "sort": {
                        "reuse_count": "desc"
                    }
                }
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs: capsules } = await res.json();
    let maxReuseCount = capsules[0].reuse_count;

    return maxReuseCount;
};