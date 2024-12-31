import React from "react";

function SiparisOnayi({ formData, count }) {
  return (
    <div className="hero-section flex-col gap-m">
      <div className="text-center">
        <h2>Siparişiniz Başarılı!</h2> {/* Başlık */}
      </div>
      <div className="flex-col gap-m text-center bigger barlow order-bg">
        <div className="text-center">
          <h3 className="big white text-center">SEÇİMLERİNİZ</h3> {/* Seçilen bilgilerin başlığı */}
        </div>
        <div>
          <strong>Pizza Seçimi:</strong> {formData.pizzaSecim} {/* Pizza türü */}
        </div>
        <div>
          <strong>Adet:</strong> {count} {/* Sipariş edilen adet */}
        </div>
        <div>
          <strong>Boyut:</strong> {formData.boySecim} {/* Pizza boyutu */}
        </div>
        <div>
          <strong>Hamur Kalınlığı:</strong> {formData.kalinlikSecim} {/* Hamur kalınlığı */}
        </div>
        <div>
          <strong>Ekstra Malzemeler:</strong> {formData.secimler.join(", ")} {/* Seçilen ekstra malzemeler */}
        </div>
        <div>
          <strong>Sipariş Notu:</strong> {formData.siparisNotu} {/* Sipariş notu */}
        </div>
        <div>
          <strong>Teslimat Türü:</strong>{" "}
          {formData.npmHizindaTeslimat ? "NPM Hızında 🛵💨" : "Standart"} {/* Teslimat türü */}
        </div>
        <div>
          <h3 className="black">Toplam Tutar:</h3>
          {formData.npmHizindaTeslimat === true ? (
            <h3 className="deli">Acil Teslim :50 TL</h3> // Acil teslimat ücreti
          ) : (
            ""
          )}
          <h4>{formData.total} TL</h4> {/* Toplam tutar */}
        </div>
      </div>
    </div>
  );
}

export default SiparisOnayi;
