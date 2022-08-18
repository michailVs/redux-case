import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, buyItem } from "./store/inventory";

function App() {
  const dispatch = useDispatch()
  const cases = useSelector(state => state.cases.caseItem)
  const invent = useSelector(state => state.inventories.invItem)
  const [randomItem, setRandomItem] = useState([])
  const [isCase, setIsCase] = useState(false)

  const randomize = () => {
    let ran = Math.round(Math.random() * 100)
    if (ran <= 80) {
      setRandomItem(cases[2])
    } else if (ran > 80 && ran < 90) {
      setRandomItem(cases[0])
    } else if (ran > 90 && ran < 94) {
      setRandomItem(cases[1])
    } else if (ran > 94 && ran < 99) {
      setRandomItem(cases[3])
    } else {
      setRandomItem(cases[4])
    }
    setIsCase(true)
  }
  const addInvent = () => {
    if (randomItem.length < 0) {
      return false
    } else {
      dispatch(addItem(randomItem))
      setIsCase(false)
      setRandomItem([])
    }
  }
  const buyItems = () => {
    setRandomItem([])
    setIsCase(false)
  }
  return (
    <div className="App">
      {isCase === false || randomItem.length < 0
      ? <div>
          <h2>Сначала откройте кейс</h2>
          <button onClick={randomize}>Открыть кейс</button>
        </div>
      : <div>
          <img src={randomItem.src} alt={randomItem.title}/>
          <h3>{randomItem.title}</h3>
          <button onClick={addInvent}>Оставить предмет</button>
          <button onClick={buyItems}>Продать предмет за {randomItem.price} руб.</button>
        </div>
      }
      <div>
        {cases.map(item => 
          <div key={item.id}>
            <img src={item.src} alt={item.title}/>
            <h3>Название: {item.title}</h3>
            <p>Цена: {item.price} руб.</p>
          </div>
        )}
      </div>
      {invent.length < 0
      ? <h3>Инвентарь пуст</h3>
      : <div>
        <h2>Инвентарь:</h2>
      {invent.map(item => 
        <div key={item.id}>
          <img src={item.src} alt={item.title}/>
          <h3>Название: {item.title}</h3>
          <p>Цена: {item.price} руб.</p>
          <button onClick={() => dispatch(buyItem(item))}>Продать предмет</button>
        </div>
      )}
    </div>
      }
    </div>
  );
}

export default App;
