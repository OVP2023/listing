import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import jsonData from './data.jsx'


function Listing(props) {
  let title = "";
  let mainImg = "";
  let level = "";
  let strPrice = "";
  if (props.title != undefined) {
    if (props.title.length > 50) {
      title = props.title.slice(0, -(props.title.length - 50)) + "...";
    } else {
      title = props.title;
    }
  }
  if (props.mainImg != undefined) {
    mainImg = props.mainImg.url_570xN;
  }
  if (`${props.currency_code}` == "EUR") {
    strPrice = "€" + `${props.price}`;
  } else if (`${props.currency_code}` == "USD") {
    strPrice = "$" + `${props.price}`;
  } else {
    strPrice = `${props.price}` + " " + `${props.currency_code}`;
  }

  if (props.quantity > 20) {
    level = " level-high";
  } else if (props.quantity <= 10) {
    level = " level-low";
  } else {
    level = " level-medium";
  }

  return (
    <div className="item-list">
      <div className="item">
        <div className="item-image">
          <a href={props.url}>
            <img src={mainImg} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{strPrice}</p>
          <p className="item-quantity level-medium">
            {props.quantity}
            {level}
          </p>
        </div>
      </div>
    </div>
  );
}


export default Listing
