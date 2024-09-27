import Cards from '../components/Card';

function Home({
  item,
  setItem,
  cartItem,
  setCartItem,
  searchItem,
  setSearchItem,
  onAddToCart,
  onChangeSearch,
}) {
  return (
    <div className="back_body">
      <div className="top_body">
        <h1>{searchItem ? `Пошук по : ${searchItem}` : 'Всі кросівки'}</h1>
        <div className="Search">
          <img src="/img/Search.png" alt="Search" />
          <input
            onChange={onChangeSearch}
            placeholder="Пошук..."
            value={searchItem}
          />
          {searchItem && (
            <img
              onClick={() => setSearchItem('')}
              src="/img/delete.svg"
              alt="delete"
            />
          )}
        </div>
      </div>
      <div className="Selling_Grid">
        {item
          .filter((item) =>
            item.title.toLowerCase().includes(searchItem.toLowerCase())
          )
          .map((obj, index, cartItem) => (
            <Cards
              key={index}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={onAddToCart}
              onFavorite={0}
              cart={cartItem}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
