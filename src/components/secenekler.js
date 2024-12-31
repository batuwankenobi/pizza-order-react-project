// Pizza boyutları için seçenekleri tanımlayan dizi
export const sizes = [
    { id: "s", boy: "Küçük" }, // Küçük boy
    { id: "m", boy: "Orta" }, // Orta boy
    { id: "l", boy: "Büyük" }, // Büyük boy
];

// Pizza hamuru kalınlık seçeneklerini tanımlayan dizi
export const kalinlik = [
    { id: "i", size: "İnce" }, // İnce hamur
    { id: "n", size: "Normal" }, // Normal hamur
    { id: "k", size: "Kalın" }, // Kalın hamur
];

// Pizza üzerine eklenebilecek ekstra malzeme seçeneklerini tanımlayan dizi
export const ekstralar = [
    { id: 1, name: "Pepperoni" }, // Pepperoni
    { id: 2, name: "Domates" }, // Domates
    { id: 3, name: "Biber" }, // Biber
    { id: 4, name: "Sosis" }, // Sosis
    { id: 5, name: "Mısır" }, // Mısır
    { id: 6, name: "Sucuk" }, // Sucuk
    { id: 7, name: "Kanada Jambonu" }, // Kanada Jambonu
    { id: 8, name: "Ananas" }, // Ananas
    { id: 9, name: "Tavuk Izgara" }, // Tavuk Izgara
    { id: 10, name: "Jalepeno" }, // Jalapeno
    { id: 11, name: "Kabak" }, // Kabak
    { id: 12, name: "Soğan" }, // Soğan
    { id: 13, name: "Sarımsak" }, // Sarımsak
];

// Pizza değerlendirme bilgilerini içeren nesne
export const puan = {
    p: 4.2, // Ortalama puan
    com: 200, // Yapılan yorum sayısı
    isim: "Position Absolute Acılı Pizza" // Pizza adı
};