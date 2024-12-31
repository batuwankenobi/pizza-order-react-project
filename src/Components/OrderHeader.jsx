import React from 'react';

import formBanner from '/images/iteration-2-images/pictures/form-banner.png';

function OrderHeader() {
    return (
        <div className="OrderHeader" style={{
            backgroundColor: "#FAF7F2",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: "0",
            width: "100%"
        }}>

            <img
                src={formBanner}
                alt="Yarim Pizza"
            />
            <div className="favorite" style={{ backgroundColor: "#FAF7F2", width: "50%" }}>
                <div className="favorite-text">
                    <h5>Position Absolute Acı Pizza</h5>
                    <div className="mini-text">
                        <p className="bold">85₺</p>
                        <p>4.9</p>
                        <p>(200)</p>
                    </div>
                </div>
                <p style={{ color: '#5F5F5F' }}>
                    Frontend Dev olarak hala position:
                    absolute kullanıyorsan bu çok acı pizza tam sana göre.
                    Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
                    daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                    genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
                    İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                </p>
            </div>
        </div>
    )
}

export default OrderHeader;
