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