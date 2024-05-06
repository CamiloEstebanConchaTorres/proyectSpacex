export const nameRockets = async (name) => {
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";
    header__title.textContent = name;
    header__title.style.fontFamily = "Brush Script MT";
    header__title.style.color = "#82cfff";
};