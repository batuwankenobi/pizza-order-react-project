import { useLocation } from 'react-router-dom';
import Head from '../components/Head';
import Footers from '../components/Footer';
import "../components/Success.css";

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
				