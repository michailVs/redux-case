import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBalance, getBalance } from "../store/balance";
import { addItem, buyItem } from "../store/inventory";

const CaseList = () => {
    const dispatch = useDispatch()
    const cases = useSelector(state => state.cases.caseItem)
    const balance = useSelector(state => state.balance.value)
    const [randomItem, setRandomItem] = useState([])
    const [isCase, setIsCase] = useState(false)

    
    const randomize = () => {
      if (balance < 6000) {
        return false
      } else {
        dispatch(getBalance(6000))
        let ran = Math.round(Math.random() * 100)
        if (ran <= 80) {
            setRandomItem(cases[2])
            dispatch(addItem(cases[2]))
        } else if (ran > 80 && ran < 90) {
            setRandomItem(cases[0])
            dispatch(addItem(cases[0]))
        } else if (ran > 90 && ran < 94) {
            setRandomItem(cases[1])
            dispatch(addItem(cases[1]))
        } else if (ran > 94 && ran < 99) {
            setRandomItem(cases[3])
            dispatch(addItem(cases[3]))
        } else {
            setRandomItem(cases[4])
            dispatch(addItem(cases[4]))
        }
        setIsCase(true)
      }
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
    const buyItems = (item) => {
      dispatch(addBalance(item.price))
      setRandomItem([])
      setIsCase(false)
      dispatch(buyItem(item))
    }
    return (
      <div className="App">
        <div>Баланс: {balance} | <button onClick={() => dispatch(addBalance(Number(prompt('Введите сумму').match(/\d*/))))}>+</button></div>
        {isCase === false || randomItem.length < 0
        ? <div>
            <h2>Сначала откройте кейс</h2>
            <button onClick={randomize}>Открыть кейс</button>
          </div>
        : <div>
            <img src={randomItem.src} alt={randomItem.title}/>
            <h3>{randomItem.title}</h3>
            <button onClick={addInvent}>Оставить предмет</button>
            <button onClick={() => buyItems(randomItem)}>Продать предмет за {randomItem.price} руб.</button>
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
      </div>
    );
}

export default CaseList