import { sizes, kalinlik, ekstralar, puan } from "./secenekler"; // Diğer seçenekleri içeren veriler
import axios from "axios"; // HTTP istekleri için axios kütüphanesi
import { useState, useEffect } from "react"; // React hookları
import { toast } from "react-toastify"; // Toast mesajları
import { useHistory } from "react-router-dom"; // Sayfa yönlendirmesi için history

function SiparisFormu({ formData, setFormData, count, setCount }) {
  const [errors, setErrors] = useState({}); // Hata mesajlarını tutan durum
  const [isValid, setIsValid] = useState(false); // Formun geçerliliğini tutan durum
  const history = useHistory(); // Sayfa yönlendirme için kullanılır

  // Formdaki inputların değişimlerini yöneten fonksiyon
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => {
      if (type === "checkbox") {
        // Checkbox için eklenen veya çıkarılan malzemeler
        if (name === "npmHizindaTeslimat") {
          return {
            ...prevData,
            npmHizindaTeslimat: checked,
            total: checked ? prevData.total + 50 : prevData.total - 50, // Acil teslimat için fiyat güncellemesi
          };
        } else {
          const updatedSecimler = checked
            ? [...prevData.secimler, value]
            : prevData.secimler.filter((item) => item !== value); // Ekstra malzeme ekleme/çıkarma
          return { ...prevData, secimler: updatedSecimler };
        }
      }
      return { ...prevData, [name]: value }; // Diğer inputlar için formData güncellemesi
    });
  };

  // Form doğrulama fonksiyonu
  const validateForm = () => {
    const newErrors = {}; // Hata mesajlarını tutacak nesne

    // Zorunlu alanlar ve doğrulama
    if (!formData.boySecim) {
      newErrors.boyut = "Bir boyut seçmelisiniz.";
    }
    if (!formData.kalinlikSecim) {
      newErrors.hamur = "Hamur kalınlığı seçmelisiniz.";
    }
    if (formData.secimler.length < 3) {
      newErrors.ekstralar = "En az 3 malzeme seçmelisiniz.";
    }
    if (!formData.siparisNotu) {
      newErrors.siparisNotu = "Sipariş notu boş bırakılamaz.";
    } else if (formData.siparisNotu.length < 5) {
      newErrors.siparisNotu = "Sipariş notu en az 5 karakter olmalıdır.";
    }

    setErrors(newErrors); // Hata mesajlarını güncelle
    setIsValid(Object.keys(newErrors).length === 0); // Form geçerli mi kontrolü
  };

  // FormData veya count değiştiğinde doğrulama yapılır
  useEffect(() => {
    validateForm();
  }, [formData, count]);

  // Sipariş sayısını azaltma
  const decrement = (e) => {
    e.preventDefault();
    count > 1 ? setCount(count - 1) : setCount(1);
  };

  // Sipariş sayısını artırma
  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  // Form gönderildiğinde yapılacak işlemler
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValid) {
      // Form geçerliyse sipariş verilir
      axios
        .post("https://reqres.in/api/pizza", formData)
        .then((response) => {
          toast.success("Sipariş başarılıyla alındı, afiyet olsun");
          history.push("/siparis-onayi"); // Sipariş onayı sayfasına yönlendir
        })
        .catch((error) => {
          toast.error("Bir hata oluştu, lütfen tekrar deneyin.");
        });
    }
  };

  return (
    <div className="bg-secondary p-ts reset-padding">
      <div className="container-md flex-col gap-s barlow">
        <h2>{puan.isim}</h2> {/* Puan ismi */}
        <div className="flex between">
          <p className="pricetag">{formData.fiyat} TL</p> {/* Fiyat bilgisi */}
          <div className="flex gap-m review">
            <div>
              <p>⭐ ({puan.p})</p> {/* Yıldız puanı */}
            </div>
            <div>
              <p>🗨 ({puan.com})</p> {/* Yorum sayısı */}
            </div>
          </div>
        </div>
        <article className="article">
          {/* Ürün açıklaması */}
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre...
        </article>
        <form className="barlow flex-col between" onSubmit={handleSubmit}>
          {/* Boyut Seçimi */}
          <div className="flex between margin-bottom">
            <div className="flex-col gap-s">
              <h3 className="margin-bottom">
                Boyut Seç <span style={{ color: "red" }}>*</span>
              </h3>
              {sizes.map((boyut) => (
                <label className="flex gap-s" key={boyut.id}>
                  <input
                    type="radio"
                    name="boySecim"
                    value={boyut.boy}
                    checked={formData.boySecim === boyut.boy}
                    onChange={handleChange}
                  />
                  {boyut.boy}
                </label>
              ))}
              {errors.boyut && <p style={{ color: "red" }}>{errors.boyut}</p>} {/* Hata mesajı */}
            </div>

            {/* Hamur Kalınlığı Seçimi */}
            <div>
              <label htmlFor="hamur" className="flex-col">
                <h3 className="margin-bottom">
                  Hamur Kalınlığı <span style={{ color: "red" }}>*</span>
                </h3>
                <select
                  name="kalinlikSecim"
                  value={formData.kalinlikSecim}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Kalınlık Seçiniz
                  </option>
                  {kalinlik.map((kalinlik) => (
                    <option key={kalinlik.id} value={kalinlik.size}>
                      {kalinlik.size}
                    </option>
                  ))}
                </select>
              </label>
              {errors.hamur && <p style={{ color: "red" }}>{errors.hamur}</p>} {/* Hata mesajı */}
            </div>
          </div>

          {/* Ekstra Malzeme Seçimi */}
          <div>
            <h2>Ek Malzemeler</h2>
            <p className="margin-bottom">
              En az 3, fazla 10 malzeme seçebilirsiniz.
              <span style={{ color: "red", fontWeight: "600" }}>
                {" "}
                Tanesi 5 TL
              </span>
            </p>
            <div className="grid-container">
              {ekstralar.map((ekstra) => (
                <div className="grid-item" key={ekstra.id}>
                  <label className="flex gap-s margin-bottom semi-bold">
                    <input
                      type="checkbox"
                      name="secimler"
                      value={ekstra.name}
                      onChange={handleChange}
                      disabled={formData.secimler.length >= 10} // 10'dan fazla malzeme seçilemez
                    />
                    {ekstra.name}
                  </label>
                </div>
              ))}
            </div>
            {errors.ekstralar && <p style={{ color: "red" }}>{errors.ekstralar}</p>} {/* Hata mesajı */}
          </div>

          {/* Sipariş Notu */}
          <div className="flex-col margin-bottom-lg">
            <label htmlFor="siparisNotu">
              <h3>Sipariş Notu:</h3>
            </label>
            <textarea
              name="siparisNotu"
              value={formData.siparisNotu}
              onChange={handleChange}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              style={{
                maxWidth: "960px",
                minWidth: "376px",
                borderRadius: "5px",
              }}
              cols={5}
              rows={4}
            />
            {errors.siparisNotu && <p style={{ color: "red" }}>{errors.siparisNotu}</p>} {/* Hata mesajı */}
          </div>

          <hr />
          {/* Acil Teslimat Seçeneği */}
          <label className="flex gap-s semi-bold padding-s">
            <input
              type="checkbox"
              name="npmHizindaTeslimat"
              checked={formData.npmHizindaTeslimat}
              onChange={handleChange}
            />
            Npm Hızında Acil Teslimat 🛵💨
            <span style={{ color: "red" }}>(+50 TL)</span>
          </label>

          <hr className="margin-bottom-lg" />

          {/* Sipariş Sayısı ve Toplam Fiyat */}
          <div className="flex between">
            <div className="buton-div">
              <button className="buton" onClick={decrement}>
                -
              </button>
              <div className="counter semi-bold">{count}</div>
              <button className="buton" onClick={increment}>
                +
              </button>
            </div>

            <div className="order-container">
              <div className="flex-col">
                <h3 className="padding-s">Sipariş Toplamı</h3>
                <div className="flex between padding-s semi-bold">
                  <div>Seçimler:</div>
                  <div>{formData.secimler.length * 5} TL</div>
                </div>
                <div
                  className="flex between padding-s margin-bottom semi-bold"
                  style={{ color: "#CE2829" }}
                >
                  <div>Toplam:</div>
                  <div>
                    {formData.total}
                    TL
                  </div>
                </div>
                <button
                  type="submit"
                  className="buton semi-bold black padding-s"
                  disabled={!isValid} // Form geçerli değilse buton disabled olur
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SiparisFormu;
