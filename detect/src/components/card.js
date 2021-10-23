import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/card.css'

const Card=(props)=>{
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
      const images = importAll(require.context('./images/alphbets', false, /\.(png|jpe?g|svg)$/));
      
     console.log(images['A.jpg'].default);
    return (
        <div className="card">
            <img src={images[`${props.letter}.jpg`].default} alt={props.letter} className="img-fluid"/>
            
        </div>
    );
}
export default Card;