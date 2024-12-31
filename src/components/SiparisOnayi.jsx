// SiparişOnayi bileşeni, kullanıcıdan gelen sipariş verilerini göstermek için tasarlanmıştır.
import React from "react";

// SiparişOnayi bileşeni, formData ve count prop'larını alır ve sipariş bilgilerini görüntüler.
function SiparisOnayi({ formData, count }) {
  return (
    <div className=" hero-section flex-col gap-m ">
      <div className="text-center">
        <h2>Siparişiniz Başarılı!</h2>
      </div>
      <div className="flex-col  gap-m text-center bigger barlow order-bg">
        <div className="text-center">
          <h3 className="big white text-center">SEÇİMLERİNİZ</h3>
        </div>
        <div>
          <strong>Pizza Seçimi:</strong> {formData.pizzaSecim} {/* Kullanıcının pizza seçimi */}
        </div>
        <div>
          <strong>Adet:</strong> {count} {/* Sipariş edilen pizza adedi */}
        </div>
        <div>
          <strong>Boyut:</strong> {formData.boySecim} {/* Seçilen boyut */}
        </div>
        <div>
          <strong>Hamur Kalınlığı:</strong> {formData.kalinlikSecim} {/* Seçilen hamur kalınlığı */}
        </div>
        <div>
          <strong>Ekstra Malzemeler:</strong> {formData.secimler.join(", ")} {/* Ekstra malzeme listesi */}
        </div>
        <div>
          <strong>Sipariş Notu:</strong> {formData.siparisNotu} {/* Kullanıcının eklediği sipariş notu */}
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
          <h4>{formData.total} TL</h4> {/* Toplam sipariş tutarı */}
        </div>
      </div>
    </div>
  );
}

export default SiparisOnayi; // SiparişOnayi bileşeni dışa aktarılır.
