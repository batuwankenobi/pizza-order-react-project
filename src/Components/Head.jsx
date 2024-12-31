import React from 'react';

// Logo resmini içeri aktarıyoruz.
import logoImage from '/images/iteration-1-images/logo.svg';

export default function Head() {
    return (
        <>
            {/* Head div container'ı, stil ayarlarını burada yapıyoruz */}
            <div className="head"
                style={{
                    height: "138px", // Yüksekliği belirliyoruz
                    display: "flex", // Flexbox ile yerleşim düzeni sağlıyoruz
                    flexDirection: "column", // Elemanları dikey yönde sıralıyoruz
                    justifyContent: "flex-start", // Elemanları üstte hizalıyoruz
                    alignItems: "center", // Elemanları yatayda ortalıyoruz
                    margin: "0", // Dış margin'i sıfırlıyoruz
                    width: "100%", // Genişlik %100, ekranı tamamen kaplıyor
                    backgroundColor: "#CE2829" // Arka plan rengini belirliyoruz
                }}>
                {/* Logo görüntüsü için img elemanı */}
                <img
                    className="teknyemekler"
                    style={{
                        width: "20rem", // Logo genişliğini belirliyoruz
                        height: "auto", // Yükseklik oranını koruyoruz
                        margin: "3.5rem", // Logo etrafında margin bırakıyoruz
                    }}
                    src={logoImage}  // Logo resmini src olarak veriyoruz
                    alt="Teknolojik Yemekler" // Alternatif metin
                />
            </div>
        </>
    );
}
