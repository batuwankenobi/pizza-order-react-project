import React from 'react';
import formBanner from '/images/iteration-2-images/pictures/form-banner.png';
function OrderHeader() {
	// Stil objeleri tanımlanıyor
	const headerStyle = {
	    backgroundColor: "#FAF7F2",  // Arka plan rengi
	    backgroundSize: "cover",     // Arka plan resmi boyutu
	    backgroundPosition: "center", // Arka planın yerleşimi
	    backgroundRepeat: "no-repeat", // Arka planın tekrarlanmaması
	    display: "flex",              // Flexbox düzeni
	    flexDirection: "column",      // Flex öğelerini dikey olarak hizala
	    justifyContent: "flex-start", // Flex öğelerini üstten hizala
	    alignItems: "center",         // Flex öğelerini ortala
	    margin: "0",                  // Marjin sıfırla
	    width: "100%"                 // Genişlik %100
	};
	 const favoriteStyle = {
		backgroundColor: "#FAF7F2",  // Favori bölümünün arka plan rengi
		width: "50%",                 // Favori bölümünün genişliği
	  };
    
	  const favoriteTextStyle = {
		color: '#5F5F5F'              // Metin rengi
	  };
	  return (
		<div className="OrderHeader" style={headerStyle}>
		    {/* Banner görseli */}
		    <img src={formBanner} alt="Pizza Banner" />
		    
		    {/* Favori pizza detayları */}
		    <div className="favorite" style={favoriteStyle}>
			  {/* Pizza başlığı ve fiyat bilgisi */}
			  <div className="favorite-text">
				<h5>Position Absolute Acı Pizza</h5>
				<div className="mini-text">
				    <p className="bold">85₺</p>
				    <p>4.9</p>
				    <p>(200)</p>
				</div>
			  </div>