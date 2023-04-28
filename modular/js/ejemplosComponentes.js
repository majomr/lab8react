import React, { useState, useEffect} from 'react';
import ImageCard from './newCard';

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const images = [
  { id: "Debut", url:"https://images.genius.com/203e241c2eed07f36f49a44b8c0a3d83.1000x1000x1.jpg", matched: false},
  { id: "Red", url:"https://i.scdn.co/image/ab67616d0000b273318443aab3531a0558e79a4d", matched: false },
  { id: "Fearless", url:"https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_Swift.png", matched: false },
  { id: "Speak Now", url:"https://m.media-amazon.com/images/I/71+q4wh2+YL._UF1000,1000_QL80_.jpg", matched: false},
  { id: "1989", url:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Taylor_Swift_-_1989.png/220px-Taylor_Swift_-_1989.png", matched: false},
  { id: "Reputation", url:"https://hips.hearstapps.com/hmg-prod/images/taylor-swift-reputation-1503637544.jpg", matched: false},
  { id: "Folklore", url:"https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png", matched: false},
  { id: "Evermore", url:"https://upload.wikimedia.org/wikipedia/en/0/0a/Taylor_Swift_-_Evermore.png", matched: false},
  { id: "Debut2", url:"https://images.genius.com/203e241c2eed07f36f49a44b8c0a3d83.1000x1000x1.jpg" , matched: false},
  { id: "Red2", url:"https://i.scdn.co/image/ab67616d0000b273318443aab3531a0558e79a4d", matched: false },
  { id: "Fearless2", url:"https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_Swift.png" , matched: false},
  { id: "Speak Now2", url:"https://m.media-amazon.com/images/I/71+q4wh2+YL._UF1000,1000_QL80_.jpg", matched: false},
  { id: "19892", url:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Taylor_Swift_-_1989.png/220px-Taylor_Swift_-_1989.png", matched: false},
  { id: "Reputation2", url:"https://hips.hearstapps.com/hmg-prod/images/taylor-swift-reputation-1503637544.jpg", matched: false},
  { id: "Folklore2", url:"https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png", matched: false},
  { id: "Evermore2", url:"https://upload.wikimedia.org/wikipedia/en/0/0a/Taylor_Swift_-_Evermore.png", matched: false}
];
shuffle(images); 

const App = () => {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const shuffleCards = () => {
    setCards(images);
    setTurns(0); 
  }
  console.log(cards,turns)
  const imageGrid = {
    width: '800px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '5px'
  }
 
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  
  useEffect(() => {
      if(choiceOne && choiceTwo){
        if(choiceOne.url==choiceTwo.url){
          setCards(prevCards =>{
            return prevCards.map(card => {
              if(card.url == choiceOne.url || card.url == choiceTwo.url){
                return {...card, matched: true}
              } else {
                return card 
              }
            })
          })
          resetTurn()
        }
        else{
          setTimeout(() => resetTurn(), 1000) 
        }
      }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    console.log(turns)
  }

  return (
    <div>
      <div>
        <h1>Memoria</h1>
        <button onClick={shuffleCards}>New Game</button>
        <p>Turnos: {turns}</p>
      </div>
      <div style={imageGrid}>
        {cards.map((card) => (
          <ImageCard
            key={card.id} 
            imageUrl={card.url} 
            card={card}
            handleChoice = {handleChoice}
            flipped = {card == choiceOne || card == choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
