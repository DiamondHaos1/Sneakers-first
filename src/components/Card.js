import React from 'react';

function Cards({
  title,
  imageUrl,
  price,
  onPlus,
  onFavorite,
  cart,
  favoriteItems,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(cart.some((item) => item.title === title));
  };
  const onClickFavorite = () => {
    onFavorite({ imageUrl, title, price });
    setIsFavorite(true);
    console.log('pidot');
  };
  return (
    <div className="sell-sneakers">
      <img
        className="liked"
        onClick={onClickFavorite}
        src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
        alt="add"
      ></img>
      <img className="imgCardSneakers" src={imageUrl} alt="sneakers"></img>
      <p>{title}</p>
      <div className="price">
        <ul>
          <p className="w-500">Ціна:</p>
          <p className="Bold">{price}</p>
        </ul>
        <img
          className="Plus_img"
          onClick={!isAdded ? onClickPlus : null}
          src={isAdded ? '/img/add.svg' : '/img/unadd.svg'}
          alt="sneakers"
        ></img>
      </div>
    </div>
  );
}
export default Cards;
