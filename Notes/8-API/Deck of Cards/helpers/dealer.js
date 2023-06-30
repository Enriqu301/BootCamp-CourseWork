const dealCards = (arr) => {
  let player = []
  let computer = []

  arr.forEach((card, index) => {
    //If the card is even - goes to computer hand
    if(index % 2 == 0){
      computer.push(card)
    } else {
      player.push(card)
    }
  })

  return {player, computer}
}

const updateCards = (arr) => {
  let updatedCards = arr.map((card) => {
    switch(card.value){
      case 'JACK':
        card.value = 11;
        break;
      case 'QUEEN':
        card.value = 12;
        break;
      case 'KING':
        card.value = 13;
        break;
      case 'ACE':
        card.value = 14;
        break;
      default:
        card.value = Number(card.value);
    }
    return card
  })

  return updatedCards
}


const sortHand = (a, b) => {
  return b.value - a.value
}


module.exports = {
  dealCards,
  updateCards,
  sortHand
}