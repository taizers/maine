const headerMenu = document.querySelector(".header__menu");
const headerNav = document.querySelector(".header__nav");
const headerBurgerButton = document.querySelector(".header__button");
const headerBurgerIcon = document.querySelector(".header__burger-svg");
const headerCloseBurgerIcon = document.querySelector(".header__close-burger-svg");

const hideMenu = () => {
    headerMenu.classList.add("header__hide-element-mob");
    headerNav.classList.add("add-padding");
    headerBurgerButton.classList.remove("hide-element");
    headerBurgerButton.classList.add("show-element-only-mob");
};

const onHeaderBurgerBtnClick = (evt) => {
    evt.preventDefault();
    if (headerBurgerIcon.classList.contains("hide-element")) {
        headerBurgerIcon.classList.remove("hide-element");
        headerCloseBurgerIcon.classList.add("hide-element");
        headerNav.classList.add("add-padding");
        headerMenu.classList.add("header__hide-element-mob");
    }
    else{
        headerBurgerIcon.classList.add("hide-element");
        headerCloseBurgerIcon.classList.remove("hide-element");
        headerNav.classList.remove("add-padding");
        headerMenu.classList.remove("header__hide-element-mob");       
    }
};

hideMenu();

headerBurgerButton.addEventListener("click",onHeaderBurgerBtnClick);

const modalOpenButton = document.querySelector(".Q-A__question-link"); 
const modalForm = document.querySelector(".modal"); 
const modalCloseButton = document.querySelector(".modal__close-button"); 

const openModal = () => {
    modalForm.classList.remove("hide-element");
};
const closeModal = () => {
    modalForm.classList.add("hide-element");
};

const onCloseBtnClick = (evt) => {
    closeModal();
    removeModalListeners();
};

const onShowBtnClick = (evt) => {
    evt.preventDefault();
    openModal();
    initModalListeners();
};

const onModalKeyDown = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      onCloseBtnClick();
    };
};

const onModalOutLineClick = (evt) =>{
    if (evt.target == modalForm) {
        onCloseBtnClick();
    }
};

modalOpenButton.addEventListener("click",onShowBtnClick);

const removeModalListeners = () => {
    modalCloseButton.removeEventListener("click",onCloseBtnClick);
    document.removeEventListener('keydown',onModalKeyDown); 
    window.removeEventListener("click",onModalOutLineClick);
};
const initModalListeners = () => {  
    modalCloseButton.addEventListener("click",onCloseBtnClick);
    document.addEventListener('keydown',onModalKeyDown); 
    window.addEventListener("click",onModalOutLineClick);
};
 
const questionButtons = document.querySelectorAll(".Q-A__question-button"); 
const answer = document.querySelector(".Q-A__answer"); 
const answers = document.querySelectorAll(".Q-A__answer");
const questions = document.querySelectorAll(".Q-A__question");

answer.classList.add("hide-element");

for (let index = 0; index < questionButtons.length; index++) {
    questions[index].classList.add("Q-A__plus-answer");
    questionButtons[index].addEventListener('click', (evt) => {
        if (answers[index].classList.contains("hide-element")) {
            answers[index].classList.remove("hide-element");
            questions[index].classList.remove("Q-A__plus-answer");
        }
        else{
            answers[index].classList.add("hide-element");
            questions[index].classList.add("Q-A__plus-answer");
        }
    })
}
