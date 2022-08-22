import { buyItem } from "../store/inventory";
import { useDispatch, useSelector } from "react-redux";
import { addBalance } from "../store/balance";

const Inventory = () => {
    const invent = useSelector(state => state.inventories.invItem)
    const balance = useSelector(state => state.balance.value)
    const dispatch = useDispatch()

    const saleItem = (item) => {
        dispatch(buyItem(item))
        dispatch(addBalance(item.price))
    }
    return (
        <div>
            <div>Баланс: {balance} | <button onClick={() => dispatch(addBalance(Number(prompt('Введите сумму').match(/\d*/))))}>+</button></div>
            {invent.length < 0
            ? <h3>Инвентарь пуст</h3>
            : <div>
                <h2>Инвентарь:</h2>
                {invent.map(item => 
                <div key={item.id}>
                    <img src={item.src} alt={item.title}/>
                    <h3>Название: {item.title}</h3>
                    <p>Цена: {item.price} руб.</p>
                    <button onClick={() => saleItem(item)}>Продать предмет</button>
                </div>
                )}
              </div>
            }
        </div>
    )
}

export default Inventory