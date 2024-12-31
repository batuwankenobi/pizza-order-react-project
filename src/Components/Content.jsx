import React from "react";
import { useHistory } from "react-router-dom";

// İkon ve resim dosyaları import ediliyor
import ramenIcon from "/images/iteration-2-images/icons/1.svg";
import pizzaIcon from "/images/iteration-2-images/icons/2.svg";
import burgerIcon from "/images/iteration-2-images/icons/3.svg";
import friesIcon from "/images/iteration-2-images/icons/4.svg";
import fastFoodIcon from "/images/iteration-2-images/icons/5.svg";
import drinksIcon from "/images/iteration-2-images/icons/6.svg";
import food1 from "/images/iteration-2-images/pictures/food-1.png";
import food2 from "/images/iteration-2-images/pictures/food-2.png";
import food3 from "/images/iteration-2-images/pictures/food-3.png";

// Ana bileşen
export default function Content() {
    // useHistory hook'u, sayfa yönlendirmesi için kullanılır
    const history = useHistory();

    // Butona tıklanınca "/order" sayfasına yönlendiren işlev
    const handleClick = () => history.push("/order");

    return (
        <>
            <main className="wrapper">
                {/* Ana kart içerikleri */}
                <div className="container">
                    <section className="card-container">
                        <div className="box box1">
                            <h1>Özel Lezzetus</h1>
                            <h2>Position:Absolute Acı Burger</h2>
                            {/* Sipariş butonu */}
                            <button onClick={handleClick} className="btn-card">SİPARİŞ VER</button>
                        </div>
                        <div className="box box2">
                            <h2>Hackathlon</h2>
                            <h2>Burger Menü</h2>
                            {/* Sipariş butonu */}
                            <button onClick={handleClick} className="btn-card">SİPARİŞ VER</button>
                        </div>
                        <div className="box box3">
                            <h2>
                                <span className="red">Çoooook</span> hızlı
                            </h2>
                            <h2>npm gibi kurye</h2>
                            {/* Sipariş butonu */}
                            <button onClick={handleClick} className="btn-card">SİPARİŞ VER</button>
                        </div>
                    </section>
                </div>

                {/* En çok paketlenen ürünler başlığı */}
                <div className="container">
                    <div className="text-container">
                        <h3>en çok paketlenen ürünler</h3>
                        <h4>Acıktıran Kodlara Doyuran Lezzetler</h4>
                    </div>
                </div>

                {/* Menü seçenekleri */}
                <div className="container">
                    <section className="button-container">
                        <button className="btn-card">
                            <img src={ramenIcon} alt="Ramen" />
                            <span className="btn-card-text">Ramen</span>
                        </button>
                        <button className="btn-card">
                            <img src={pizzaIcon} alt="Pizza" />
                            <span className="btn-card-text">Pizza</span>
                        </button>
                        <button className="btn-card">
                            <img src={burgerIcon} alt="Burger" />
                            <span className="btn-card-text">Burger</span>
                        </button>
                        <button className="btn-card">
                            <img src={friesIcon} alt="French fries" />
                            <span className="btn-card-text">French fries</span>
                        </button>
                        <button className="btn-card">
                            <img src={fastFoodIcon} alt="Fast food" />
                            <span className="btn-card-text">Fast food</span>
                        </button>
                        <button className="btn-card">
                            <img src={drinksIcon} alt="Soft drinks" />
                            <span className="btn-card-text">Soft drinks</span>
                        </button>
                    </section>
                </div>

                {/* Favori ürünler kısmı */}
                <div className="container">
                    <section className="favorite-container">
                        <div className="favorite">
                            <img src={food1} alt="Terminal Pizza" />
                            <div className="favorite-text">
                                <h5>Terminal Pizza</h5>
                                <div className="mini-text">
                                    <p>4.9</p>
                                    <p>(200)</p>
                                    <p className="bold">60₺</p>
                                </div>
                            </div>
                        </div>
                        <div className="favorite">
                            <img src={food2} alt="Position Absolute Acı Pizza" />
                            <div className="favorite-text">
                                <h5>Position Absolute Acı Pizza</h5>
                                <div className="mini-text">
                                    <p>4.9</p>
                                    <p>(200)</p>
                                    <p className="bold">60₺</p>
                                </div>
                            </div>
                        </div>
                        <div className="favorite">
                            <img src={food3} alt="useEffect Tavuklu Burger" />
                            <div className="favorite-text">
                                <h5>useEffect Tavuklu Burger</h5>
                                <div className="mini-text">
                                    <p>4.9</p>
                                    <p>(200)</p>
                                    <p className="bold">60₺</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
