import { useLocation } from 'react-router-dom';
import Head from '../components/Head';
import Footers from '../components/Footer';
import "../../components/Success.css";

export default function Assent() {
	// useLocation ile geçerli location state'ini alıyoruz
	const location = useLocation();
	const { orderData, formData } = location.state || {}; // State'den veriyi al
	// Eğer orderData veya formData mevcut değilse hata mesajı döndürüyoruz
	if (!orderData || !formData) {
		return <p>Geçerli sipariş bulunamadı!</p>;
	  }// Seçimlerin toplam maliyetini hesaplıyoruz (Malzeme sayısı * 5 TL * adet sayısı)
	  const choose = (formData.ingredients.value.length * 5) * formData.quantity;
	  // Toplam tutarı hesaplıyoruz (Adet sayısı * pizza fiyatı + seçim maliyeti)
	  const total = formData.quantity * 85.50 + choose;
	  return (
		<>
		    {/* Sayfanın başlık kısmını dahil ediyoruz */}
		    <Head />
		    
		    {/* Sipariş onay sayfası */}
		    <div className='assent'>
			  {/* Lezzetin yolda mesajı */}
			  <p className="yellowText">lezzetin yolda</p>
			  
			  {/* Başlık */}
			  <h1>SİPARİŞİNİZ ALINDI</h1>
			  
			  {/* Yatay çizgi */}
			  <div className="horizontal-line"></div>
			  
			  {/* Pizza adı */}
			  <p className="pizzaName">Position Absolute Acı Pizza</p>
				   {/* Sipariş detayları */}
				   <div className="order-detail">
                    <p>Ad-Soyad: {formData.name}</p>
                    <p>Boyut: {formData.size.value}</p>
                    <p>Hamur: {formData.dough.value}</p>
                    <p>Malzemeler: {formData.ingredients.value.join(', ')}</p>
                    <p>Not: {formData.note}</p>
                    <p>Adet: {formData.quantity}</p>
                </div>

                {/* Ödeme bilgisi ve toplam tutar */}
                <div className='payment'>
                    <p>Sipariş Toplamı</p>
                    <div className='chooser'>
                        <p>Seçimler:</p>
                        <span>{choose} &#8378;</span> {/* Seçimlerin toplam maliyeti */}
                    </div>
                    <div className='totals'>
                        <p>Toplam:</p>
                        <span>{total} &#8378;</span> {/* Toplam tutar */}
                    </div>
                </div>
            </div>

            {/* Sayfanın alt kısmını dahil ediyoruz */}
            <Footers />
        </>
    );
}