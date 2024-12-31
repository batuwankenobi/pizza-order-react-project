import React from "react";
import { useHistory } from "react-router-dom";

import ramenIcon from "/images/iteration-2-images/icons/1.svg";
import pizzaIcon from "/images/iteration-2-images/icons/2.svg";
import burgerIcon from "/images/iteration-2-images/icons/3.svg";
import friesIcon from "/images/iteration-2-images/icons/4.svg";
import fastFoodIcon from "/images/iteration-2-images/icons/5.svg";
import drinksIcon from "/images/iteration-2-images/icons/6.svg";
import food1 from "/images/iteration-2-images/pictures/food-1.png";
import food2 from "/images/iteration-2-images/pictures/food-2.png";
import food3 from "/images/iteration-2-images/pictures/food-3.png";
export default function Content() {
	const history = useHistory();
  
	const handleClick = () => history.push("/order");
  
	const foodIcons = {
	    ramen: ramenIcon,
	    pizza: pizzaIcon,
	    burger: burgerIcon,
	    fries: friesIcon,
	    fastFood: fastFoodIcon,
	    drinks: drinksIcon
	};
	const favoriteFoods = [
		{ img: food1, title: "Terminal Pizza", rating: "4.9", reviews: 200, price: "60₺" },
		{ img: food2, title: "Position Absolute Acı Pizza", rating: "4.9", reviews: 200, price: "60₺" },
		{ img: food3, title: "useEffect Tavuklu Burger", rating: "4.9", reviews: 200, price: "60₺" }
	  ];
	  return (
		<main className="wrapper">
		    <div className="container">
			  <section className="card-container">
				<div className="box box1">
				    <h1>Özel Lezzetus</h1>
				    <h2>Position:Absolute Acı Burger</h2>
				    <button onClick={handleClick} className="btn-card">SİPARİŞ VER</button>
				</div>  