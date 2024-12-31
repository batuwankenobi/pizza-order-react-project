import React from 'react';

// İcon görsellerini içeri aktarıyoruz.
import icon1 from '/images/iteration-2-images/icons/1.svg';
import icon2 from '/images/iteration-2-images/icons/2.svg';
import icon3 from '/images/iteration-2-images/icons/3.svg';
import icon4 from '/images/iteration-2-images/icons/4.svg';
import icon5 from '/images/iteration-2-images/icons/5.svg';
import icon6 from '/images/iteration-2-images/icons/6.svg';

export default function Navbar() {
    return (
        <>
            {/* Navbar dış sarma (wrapper) kısmı, arka plan rengini beyaz yapıyoruz */}
            <div className="wrapper bg-white">
                <div className="container">
                    {/* Kategoriler bloğu, içerisinde her bir kategori için bir item barındırıyoruz */}
                    <section className="category-block">
                        {/* Her bir kategori için item oluşturuluyor */}
                        <div className="block-item">
                            {/* Kategoriye ait ikonu görsel olarak ekliyoruz */}
                            <img src={icon1} alt="Kore" />
                            {/* Kategori ismini yazıyoruz */}
                            <p>YENİ! Kore</p>
                        </div>
                        <div className="block-item">
                            <img src={icon2} alt="Pizza" />
                            <p>Pizza</p>
                        </div>
                        <div className="block-item">
                            <img src={icon3} alt="Burger" />
                            <p>Burger</p>
                        </div>
                        <div className="block-item">
                            <img src={icon4} alt="Kızartmalar" />
                            <p>Kızartmalar</p>
                        </div>
                        <div className="block-item">
                            <img src={icon5} alt="Fast food" />
                            <p>Fast food</p>
                        </div>
                        <div className="block-item">
                            <img src={icon6} alt="Gazlı İçecek" />
                            <p>Gazlı İçecek</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
