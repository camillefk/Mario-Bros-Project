const trailerButton = document.querySelector(".trailer-button");
const buttonCloseModal = document.querySelector(".close-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkVideo = video.src;

function changeModal(){
    modal.classList.toggle("open");
}

trailerButton.addEventListener("click", () => {
    changeModal();
    video.setAttribute("src", linkVideo);
});

buttonCloseModal.addEventListener("click", () => {
    changeModal();
    video.setAttribute("src", "");
})
