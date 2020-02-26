import React from 'react';
import PropTypes from 'prop-types';

const foodLike = [
  {
    id: 1,
   name: "kimchi",
   image: "https://i.ytimg.com/vi/iJzBe08Rtb8/hqdefault.jpg",
   rating: 5

  },
  {
    id: 2,
    name: "ramen",
    image: "https://i.ytimg.com/vi/-wa0umYJVGg/hqdefault.jpg",
    rating: 2
   },
   {
    id: 3,
    name: "samgyeopsal",
    image: "https://greenwalledtower.files.wordpress.com/2014/02/samgyeopsal.jpg",
    rating: 4.9
   },
   {
    id: 4,
    name: "chukumi",
    image: "http://3.bp.blogspot.com/-z_PjxY9_V7U/UW3pnJz6b-I/AAAAAAAAANQ/8SOJaFB43iw/s320/chukumi.jpg",
    rating: 3.7
   },
];

function Food({name,picture,rating}) {
  const imgSize = '500px';
  return (
  <div>
    <h1>I like {name}</h1>
    <h4>{rating}/5</h4>
    <img width={imgSize} src={picture} alt="food"/>
  </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}
function App() {
  
  return (
    <div>
      {foodLike.map( dish => <Food name={dish.name} picture={dish.image} key={dish.id} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
