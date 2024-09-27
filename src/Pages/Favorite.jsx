import Cards from '../components/Card';
import React from 'react';
import { appContext } from '../App';

function Favorite({
  favoriteItem = [],
  setFavoriteItem,
  onAddToFavorite,
  onDeleteToFavorite,
}) {
  const [favoriteItems, setFavoriteItems] = React.useState([]);

  // Функція для додавання та видалення товарів із улюблених
  const handleFavorite = (item, action) => {
    if (action === 'add') {
      setFavoriteItems((prev) => [...prev, item]);
    } else if (action === 'remove') {
      setFavoriteItems((prev) =>
        prev.filter((favItem) => favItem.title !== item.title)
      );
    }
  };

  return (
    <div className="back_body">
      <div className="Selling_Grid">
        <h1>Мої Закладки:</h1>

        {favoriteItem.map((obj, index) => (
          <Cards
            key={index}
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onFavorite={handleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
