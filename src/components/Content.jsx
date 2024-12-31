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
				</div>   <div className="box box2">
                        <h2>Hackathlon</h2>
                        <h2>Burger Menü</h2>
                        <button onClick={handleClick} className="btn-card">SİPARİŞ VER</button>
                    </div>
                    <div className="box box3">
                        <h2>
                            <span className="red">Çoooook</span> hızlı
                        </h2>
                        <h2>npm gibi kurye</h2>
                        <button onClick={handleClick} className="btn-card">SİPARİŞ VER</button>
                    </div></section>
            </div>
            <div className="container">
                <div className="text-container">
                    <h3>en çok paketlenen ürünler</h3>
                    <h4>Acıktıran Kodlara Doyuran Lezzetler</h4>
                </div>
            </div>
            <div className="container">
                <section className="button-container">
                    {Object.keys(foodIcons).map((food) => (
                        <button key={food} className="btn-card">
                            <img src={foodIcons[food]} alt={food} />
                            <span className="btn-card-text">{food.charAt(0).toUpperCase() + food.slice(1)}</span>
                        </button>
                    ))}
                </section> </div>
            <div className="container">
                <section className="favorite-container">
                    {favoriteFoods.map((food, index) => (
                        <div className="favorite" key={index}>
                            <img src={food.img} alt={food.title} />
                            <div className="favorite-text">
                                <h5>{food.title}</h5>
                                <div className="mini-text">
                                    <p>{food.rating}</p>
                                    <p>({food.reviews})</p>
                                    <p className="bold">{food.price}</p>                  </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
}