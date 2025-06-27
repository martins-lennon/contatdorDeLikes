import { useEffect, useState } from "react";
import "../src/App.css"
function App() {

  const [likes, setLikes] = useState(0)
  const [input, setInput] = useState('Nada')

  function darOLike() {
    setLikes(prevLikes => prevLikes + 1);
  }

  // useEffect(() => {
  //   alert("Esse é um exemplo sem array de dependência")
  // });

  // useEffect(() => {
  //   alert("Esse é um exemplo com array de dependência vazio (carrega só ao incializar a página)")
  // }, []);

  useEffect(() => {
    if (likes >= 5 ) {
      alert("Parabéns! Esse é um exemplo com array de dependência que observa a aleração de um state");
    }
  }, [likes])

  return (
    <div>
      <p>Quantidade de likes: {likes}</p>
      <button onClick={darOLike}>Like</button>

      <p>O que você digitou no input: {input}</p>
      <input onChange={event => setInput(event.target.value)} type="text" />
    </div>
  );
}

export default App;
