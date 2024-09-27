import React from 'react';
import { appContext } from '../App';

function Wrapper({ onClose, item = [], onDelete }) {
  const onClickDeleteItem = (obj) => {
    onDelete(obj);
  };

  const totalSum = item.reduce((acc, obj) => acc + obj.price, 0); // Используем reduce для суммы

  return (
    <div>
      <div className="shadow-wrapper"></div>
      <div className="Wrapper">
        <div className="cart">
          <h1 className="ml-15">Корзина:</h1>
          <img onClick={onClose} src="/img/delete.svg" alt="delete" />
        </div>

        <div className="addTovar">
          {item.map((obj) => (
            <div className="cart_tovar" key={obj.imageUrl}>
              <img width={100} height={100} src={obj.imageUrl} alt="sneakers" />
              <ul>
                <p className="w-400">{obj.title}</p>
                <p className="Bold">{obj.price} грн.</p>
              </ul>
              <div className="delete-icons-cart">
                <img
                  onClick={() => onClickDeleteItem(obj.id)}
                  src="/img/delete.svg"
                  alt="delete"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="Buy">
          <ul className="Suma_text">
            <p>Всього:</p>
            <hr className="dashed-line" />
            <p>{totalSum} грн.</p>
          </ul>
          <ul className="Suma_text">
            <p>Налог 5%:</p>
            <hr className="dashed-line" />
            <p>{(totalSum * 0.05).toFixed(2)} грн.</p>{' '}
            {/* Рассчитываем налог */}
          </ul>
          <button className="Button_buy">ЗАМОВИТИ</button>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
