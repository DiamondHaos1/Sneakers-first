import Wrapper from './components/Wrapers';
import TopHead from './components/Headers';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';

function App() {
  const [item, setItem] = React.useState([]);
  const [cartItem, setCartItem] = React.useState([]);
  const [favoriteItem, setFavoriteItem] = React.useState([]);
  const [searchItem, setSearchItem] = React.useState('');
  const [openWrapper, setOpenWrapper] = React.useState(false);

  React.useEffect(() => {
    axios
      .get('https://66ea8c7955ad32cda4795c6f.mockapi.io/item')
      .then((res) => {
        setItem(res.data);
      });
    axios
      .get('https://66ea8c7955ad32cda4795c6f.mockapi.io/cart')
      .then((res) => {
        setCartItem(res.data);
      });
    axios
      .get('https://66f4596d77b5e88970993e05.mockapi.io/favorite')
      .then((res) => {
        setFavoriteItem(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    const isItemInCart = cartItem.some((elem) => elem.id === obj.id);
    if (!isItemInCart) {
      axios
        .post('https://66ea8c7955ad32cda4795c6f.mockapi.io/cart', obj)
        .then((res) => {
          setCartItem((prev) => [...prev, res.data]);
        });
    }
  };

  const onAddToFavorite = (obj) => {
    const isItemInFavorite = favoriteItem.some((elem) => elem.id === obj.id);
    if (!isItemInFavorite) {
      axios
        .post('https://66f4596d77b5e88970993e05.mockapi.io/favorite', obj)
        .then((res) => {
          setFavoriteItem((prev) => [...prev, res.data]);
        });
    }
  };

  const onDeleteToCart = (id) => {
    axios.delete(`https://66ea8c7955ad32cda4795c6f.mockapi.io/cart/${id}`);
    setCartItem((prev) => prev.filter((item) => item.id !== id));
  };

  const onDeleteToFavorite = (id) => {
    axios.delete(`https://66f4596d77b5e88970993e05.mockapi.io/favorite/${id}`);
    setFavoriteItem((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearch = (event) => {
    setSearchItem(event.target.value);
  };

  return (
    <Router>
      <div className="App">
        {openWrapper && (
          <Wrapper
            onDelete={onDeleteToCart}
            item={cartItem}
            onClose={() => setOpenWrapper(false)}
          />
        )}
        <header>
          <TopHead onClickCart={() => setOpenWrapper(true)} />
          <hr />
        </header>
        <Switch>
          <Route path="/" exact>
            <Home
              item={item}
              setItem={setItem}
              cartItem={cartItem}
              setCartItem={setCartItem}
              searchItem={searchItem}
              setSearchItem={setSearchItem}
              onAddToCart={onAddToCart}
              onChangeSearch={onChangeSearch}
            />
          </Route>

          <Route path="/Favorite" exact>
            <Favorite
              favoriteItem={favoriteItem}
              setFavoriteItem={setFavoriteItem}
              onAddToFavorite={onAddToFavorite}
              onDeleteToFavorite={onDeleteToFavorite}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
