document.querySelector('.prize__button').addEventListener('click', () => {
  const elements = document.querySelectorAll('.prize_number');
  const allPrizes = document.querySelectorAll('.prize');
  const resultArea = document.querySelector('.prize__result');
  const prizeNumbers = [];
  
  
  for (let index = 0; index < elements.length; index++) {
    prizeNumbers.push(elements[index].textContent);
  }
  
  for (let cardIndex = 0; cardIndex < allPrizes.length; cardIndex++) {
    allPrizes[cardIndex].classList.remove('active');
  }
  
  const randomIndex = Math.floor(Math.random() * prizeNumbers.length);
  const randomNumber = prizeNumbers[randomIndex];
  
  resultArea.innerHTML = randomNumber;
  
  const winningPrize = Array.from(elements).find(el => el.textContent === randomNumber).closest('.prize');
  winningPrize.classList.add('active');

});