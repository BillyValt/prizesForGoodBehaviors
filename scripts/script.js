import { participants, chosenWinner } from './dataParticipants.js';

const startButton = document.querySelector('.js-start__btn');
const resetButton = document.querySelector('.js-reset__btn');
const winnerNameEl = document.querySelector('.js-winner-name');
const winnerContainerEl = document.querySelector('.winner__container');
const resultEl = document.querySelector('.result__container');
const resultImage = document.querySelector('.container__img');
const imageContainer = document.querySelector('.container__element');
const dotsWrapper = document.querySelector('.js-dots-wrapper')

let savedDemoIsOn = JSON.parse(localStorage.getItem('setting'));

let winner;
let wishWinner = chosenWinner[0].personName;

// ======== Index Javascrpt ========
function pickWinner() {
  let personTotalNumber = participants.length;
  const randomPerson = Math.floor(Math.random() * personTotalNumber);
  let intervalId1;

  resultEl.innerHTML =
    `
    <div class="winner__incription">Подарок:</div>
    <div class="container__element">
      <img class="container__img" id="img-id-0" src="images/mystery__box1.png">
    </div>
  `
    ;

  winnerContainerEl.style.backgroundColor = 'white';

  intervalId1 = setInterval(() => {
    const randomPerson2 = Math.floor(Math.random() * personTotalNumber);;

    let randomName = participants[randomPerson2].personName;

    winnerNameEl.classList.add('winner-name-animation');

    winnerNameEl.innerHTML = `${randomName}`;

  }, 70);

  setTimeout(() => {
    clearInterval(intervalId1);

    winner = savedDemoIsOn ? participants[randomPerson].personName : wishWinner;

    winnerContainerEl.style.backgroundColor = 'rgb(170, 255, 0)';

    winnerNameEl.innerHTML = `${winner}`;

    winnerNameEl.classList.remove('winner-name-animation');

    dotsWrapper.classList.add('dots-wrapper')

  }, 3500)

  dotsWrapper.classList.remove('dots-wrapper')
  winnerNameEl.classList.remove('winner-name-animation');
  winnerContainerEl.classList.remove('winner__container__animation');
};

function pickPrize() {
  let randomPrizeNum = Math.floor(Math.random() * 9); //<==Prizes quantity adjustment

  resultImage.style.opacity = '0';

  setTimeout(() => {
    const copyResultImage = document.querySelector('.container__img');

    copyResultImage.classList.add('prize-animation-disappearing');
  }, 3500);


  setTimeout(() => {
    resultEl.innerHTML = savedDemoIsOn ?
      `
      <div class="winner__incription">Подарок:</div>
      <div class="container__element">
        <img class="container__img" id="img-id-0" src="images/randomPrize${randomPrizeNum}.png">
      </div>
    ` : `
      <div class="winner__incription">Подарок:</div>
        <div class="container__element">
          <img class="container__img" id="img-id-0" src="images/randomPrize6.png">
        </div>
    ` ;

    winnerContainerEl.classList.add('winner__container__animation');

    const copyResultImage = document.querySelector('.container__img');

    copyResultImage.classList.add('prize-animation');

    console.log(copyResultImage.classList.contains('prize-animation'));

    startButton.style.display = 'none'
    
    resetButton.style.display = 'block';
  }, 4300);

}

resultImage.classList.add('prize-animation');

function resetPrize() {
  winnerNameEl.innerHTML = '&#10053;&#10053;&#10053;&#10053;&#10053; &#10053;&#10053;&#10053;&#10053;&#10053;';

  resultEl.innerHTML =
    `
    <div class="winner__incription">Подарок:</div>
    <div class="container__element">
      <img class="container__img js-prize-animation-disappearing" id="img-id-0" src="images/mystery__box1.png">
    </div>
  `;
  winnerContainerEl.style.backgroundColor = 'white';

  const copyResultImage = document.querySelector('.container__img');
  copyResultImage.classList.add('prize-animation');
}

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  startButton.style.opacity = '0.6';
  pickWinner();
  pickPrize();
});

resetButton.addEventListener('click', () => {
  //buttons styles
  startButton.disabled = false;
  startButton.style.opacity = '1';
  startButton.style.display = 'block';
  resetButton.style.display = 'none';
  
  resetPrize();
});








