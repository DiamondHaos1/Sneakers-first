import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function TopHead(props) {
  return (
    <div className="top">
      <Link to="/">
        <div className="top-left">
          <img width={40} height={40} src="\img\Logo.png" alt="Logo"></img>
          <ul>
            <li>
              <h2>REACT SNEAKERS</h2>
            </li>
            <li>Магазин найкращих кросівок</li>
          </ul>
        </div>
      </Link>
      <div>
        <ul className="top-right">
          <ul onClick={props.onClickCart}>
            <img src="\img\Cart.png" alt="Cart"></img>
            <li>1205 грн.</li>
          </ul>
          <ul>
            <Link to="/Favorite">
              <img src="\img\Favorite.png" alt="Favorite"></img>
              <li>Закладки</li>
            </Link>
          </ul>
          <ul>
            <img src="\img\Person.png" alt="Person"></img>
            <li>Профіль</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default TopHead;
