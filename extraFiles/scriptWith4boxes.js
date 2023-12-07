const startButton = document.querySelector('.js-start__btn');
const winnerContainerEl = document.querySelector('.js-winner-container');
let resultEl = document.querySelector('.result__container');
let resultContEl = document.querySelectorAll('.container__element');
let resultImage = document.querySelectorAll('.container__img')
let imgId = document.querySelectorAll('.container__element>img');
let randomPrize = '';

// console.log(resultImageContainer);

const participants = [{
  personName: 'Маша Петрова',
  id: '1'
}, {
  personName: 'Варя Варя',
  id: '2'
}, {
  personName: 'Даша Иванова',
  id: '3'
}, {
  personName: 'Лена Иванова',
  id: '4'
}, {
  personName: 'Лиза Иванова1',
  id: '5'
}];

function pickWinner() {
  let personTotalNumber = participants.length;
  const randomPerson = Math.floor(Math.random() * personTotalNumber);

  console.log(participants[randomPerson].personName);

  winner = participants[randomPerson].personName;

  winnerContainerEl.innerHTML = `${winner}`;
};

function pickPrize() {
  const randomNum = Math.floor(Math.random() * 4);

  resultEl.innerHTML =
    `
      <div class="container__element"><img id="img-id-0" data-number="id0" src="images/mystery__box.png" class="container__img">
      </div>

      <div class="container__element"><img id="img-id-1" data-number="id1" src="images/mystery__box.png" class="container__img">
      </div>

      <div class="container__element"><img id="img-id-2" data-number="id2" src="images/mystery__box.png" class="container__img">
      </div>

      <div class="container__element"><img id="img-id-3" data-number="id3" src="images/mystery__box.png" class="container__img">
      </div>
  `
  let randomPrizeNum = Math.floor(Math.random() * 3);

  imgId.forEach((element) => {
    const imgElId = element.id;
    // console.log(imgElId);

    setTimeout(() => {
      if (imgElId === `img-id-${randomNum}`) {
        const imageEl = document.querySelector(`#img-id-${randomNum}`).src = `images/randomPrize${randomPrizeNum}.png`;
      }
    }, 100)
  });
}

// console.log(pickWinner());

startButton.addEventListener('click', () => {
  pickWinner();
  pickPrize();
});






