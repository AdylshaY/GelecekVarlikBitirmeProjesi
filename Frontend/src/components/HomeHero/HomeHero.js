import React from "react";

function HomeHero() {
  return (
    <>
      <div class="container my-5">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1">
              Sitenizi tek yerden, modern ve sade bir arayüz ile yönetmeye
              başlayın.
            </h1>
            <p class="lead">
              Siz hala kapı kapı aidat toplamaya mı çalışıyorsunuz? Yoksa
              kimlerin ödemeleri yaptığını takip etmekte zorlanyor musunuz? Yeni
              nesil site yönetim programımız ile tüm sitenizi tek yerden, modern
              ve minimal bir arayüz ile yönetebilirsiniz. Bilgi almak için bizi
              arayın.
            </p>
            <p className="lead">
              <strong>Adres:</strong> Türkiye İş Bankası, Beyazıt Meydanı,
              Beyazıt Mahallesi, Istanbul, Fatih, Istanbul, Marmara Region,
              34126, Turkey
            </p>
            <p className="lead">
              <strong>Telefon No:</strong> 0212-111-0099
            </p>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              class="rounded-lg-3"
              src="https://www.senyonet.net/wp-content/uploads/83-1536x1024.jpg"
              alt=""
              width="720"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
