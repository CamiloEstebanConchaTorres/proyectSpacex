export const getAllLaunches = async () => {
    try {
        const response = await fetch("https://api.spacexdata.com/v4/launches");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching launches:", error);
        return [];
    }
};