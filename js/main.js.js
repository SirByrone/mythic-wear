const navlist = document.querySelector(".nav-list");

document.querySelector(".hamburger").onclick = () => {
    navlist.classList.add ("show");
};

document.querySelector(".close").onclick = () => {
    navlist.classList.remove("show");
};

