// React
import { useEffect, useState } from 'react';

// Helpers
import { letters } from './helpers/letters';
import { getRandomWord } from './helpers/getRandomWord';

/* componentes */
import { HangImages } from './components/HangImages';

import './App.css'

function App() {

  const [ word, newGameWord ] = useState(getRandomWord());
  const [ hiddenWord, setLetter ] = useState( '_ '.repeat(word.length) );
  const [attempts, setAttempts] = useState(0);
  
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  // delete last letter of word
  

  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    console.log(currentHiddenWord);
    
    if (currentHiddenWord === word) {
      setWon(true);
    }
  }, [hiddenWord]);

  const checkLetter = (letter: string) => {
    if (lose || won) return;
   
    if ( !word.includes(letter) ) {
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
        console.log(hiddenWordArray);
      }
    }

    setLetter(hiddenWordArray.join(' '));

  }

  const newGame = () => {
    const newWord = getRandomWord();
    setLetter( '_ '.repeat(newWord.length) );
    setAttempts(0);
    setLose(false);
    setWon(false);
    newGameWord(newWord);
  }
  

  return (
    <div className="App">
      <>
        {/* Comentario */}
        <HangImages imageNumber={attempts} />
    
        <h3>{ hiddenWord }</h3>

        <h3>Intentos: {attempts}</h3>
        
        {/* Handle Lose */}
        {
          (lose) 
            ? <h2>Perdió {word}</h2>
            : ''
        }
        {/* Handle Won */}
        {
          (won) 
            ? <h2>Felicidades, usted ganó</h2>
            : ''
        }

        {/* Código de React */}
        {
          letters.map(letter => (
            <button 
              onClick={() => checkLetter(letter)}
              key={ letter }>
              { letter }
            </button>
          ))
        }
        <br /><br />

        <button onClick={ newGame }>¿Jugar de nuevo?</button>
      </>
    </div>
  )
}

export default App
