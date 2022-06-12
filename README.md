# Gelecek Varlık & Patika.dev Full Stack Bootcamp Bitirme Projesi

## Site Yönetimi Projesi

Bir sitede yöneticinin aidat ve diğer faturaların yönetimini yapmasını sağlayan bir sistem.

## İçindekiler
- [Proje Hakkında](#proje-hakkında)
- [Katmanlar Hakkında](#katmanlar)
- [Kullanıcı Doğrulama](#kullanıcı-doğrulama)
- [Ekran Görüntüleri](#arayüzelere-ait-görüntüler)
- [Projenin Çalıştırılması ve Kullanımı](#projenin-çalıştırılması)


### Proje Hakkında:

- İki tür kullanıcı vardır; Admin/Yönetici ve Kullanıcı.
- Yönetici sisteme site, apartman, daire ve kullanıcı bilgilerini arayüz üzerinden girer.
- Kullanıcıları oturdukları dairelere atar. 
- Daire üzerinden kullanıcılara faturalarını gönderir.
- Kullanıcılar kendi hesapları ile giriş yaptıklarında kendine ait daireleri ve faturaları görür. 
- Yönetici ve kullanıcı birbirleri ile canlı mesajlaşma yapabilir.
- Kredi kartı bilgilerini girebilir.
- Projede MsSQL, .Net Core 5, React.js ve MongoDB kullanıldı.
- Kredi kartları için MongoDB diğer tüm işlemler için ise MsSQL kullanıldı.
- Database First yaklaşımı ile tasarlanmıştır.
- Bu projede kurumsal katmanlı mimari kullanılmıştır.
- Generic yapılar kullanılmıştır.
- Dependency Injection kullanılarak proje içerisinde bağımlılık azaltılmıştır. 
- Projenin backendi toplamda 6 katmandan oluşuyor, bunlar; 
    1. Entity Layer
    2. Data Access Layer
    3. Business Logic Layer
    4. Interface Layer
    5. WebApi
    6. MongoApi (Kredi Kartı Servisi)

![BackendDosyaları](/Screenshots/backend_projeleri.png)

### Katmanlar Hakkında:

Modüler bir yaklaşım sergilenmiştir. Web API'den gelen istekler önce Interface katmanında bulunan servislere gelir. Burada bulunan interfaceler Business Logic Layer'da bulunan Manager classlarına istekleri iletir. 

Manager classlarından ise Data Access Layer'da bulunan abstract sınıflara iletilir. Buradan ise concrete repository sınıflarına iletilir. Daha sonra veritabanı ile etkileşime girerek istenen sorgulamalar yapılır. 

Entity Layer'da veritabanında bulunan tablolara ait modeller ve bu modellere ait DTO'lar bulunur, bunların Mapper ile birbirleri arasında dönüştürülebilmesi sağlanır.

### Kullanıcı Doğrulama: 

Projede JWT kullanıldı. JWT içerisine claimlenen kullanıcı adı ile api üzerinde controllerlara olan erişim yönetici ve kullanıcı olma durumuna göre sınırlandırıldı. Startup içerisinde policy kullanılarak yapıldı.

### Arayüzelere Ait Görüntüler: 
- Uygulamanın açılış ekranı:

![Giriş Ekranı](/Screenshots/home.png)

- Giriş ekranı:

![Login Ekranı](/Screenshots/login.png)

- Admin panelinde apartmanların yönetildiği ekran:

![Admin Apartmanlar](/Screenshots/admin_apartmanlar.png)

- Admin panelinde dairelerin yönetildiği ekran:

![Admin Daireler](/Screenshots/admin_daireler.png)

- Kullanıcının kayıtlı olduğu daireleri gösteren ekran:

![Kullanici Daireler](/Screenshots/user_daireler.png)

- Kullanıcının kayıtlı kredi kartlarını gösteren ekran:

![Kullanici Kredi Kartlari](/Screenshots/user_kredikartlar%C4%B1.png)

### Projenin Çalıştırılması 

Projeyi çalıştırmak için Visual Studio üzerinden solution seçeneklerinden Multiple Startup seçilmeli ve 2 adet api işaretlenmelidir.

Daha sonra proje çalıştırılır. İlk sayfadan giriş butonuna tıklanarak giriş yapma ekranına gidilir. Kullanıcı veya Admin olma durumuna göre ilgili seçim yapılır ve bilgiler girilir. 

Admin olarak giriş yapıldıysa blok, apartman, daire, kullanıcı ve fatura ekleme, düzenleme ve silme işlemleri yapabilir. Kullanıcı mailini girerek canlı mesajlaşma odasından görüşme gerçekleştirilebilir.

Kullanıcı olarak giriş yapıldıysa kendine ait daireleri ve faturaları görebilir. Kendisi kredi kartı kaydı oluşturabilir ve bunları silebilir. Yönetici ile canlı mesajlaşma yapabilir.