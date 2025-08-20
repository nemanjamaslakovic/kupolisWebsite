$(document).ready(function() {

  // Ispis menija

  let menuNames = ["Početna", "O Nama", "Modeli", "Kontakt", "Autor"];

  let menuLinks;
  if (window.location.pathname.includes("/pages/")) {
    menuLinks = ["../index.html", "about.html", "models.html", "contact.html", "author.html"];
  } else {
    menuLinks = ["index.html", "pages/about.html", "pages/models.html", "pages/contact.html", "pages/author.html"];
  }

  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "") currentPage = "index.html"; 

  let menuList = document.getElementById("menuList");

  for (let i = 0; i < menuNames.length; i++) {
    let li = document.createElement("li");
    li.classList.add("nav-item");

    let a = document.createElement("a");
    a.classList.add("nav-link");
    a.href = menuLinks[i];
    a.textContent = menuNames[i];

    if (menuLinks[i].includes(currentPage)) {
      li.classList.add("active");

      let span = document.createElement("span");
      span.classList.add("sr-only");
      span.textContent = "(current)";
      a.appendChild(span);
    }

    li.appendChild(a);
    menuList.appendChild(li);
  }

  // Ispis banera na pocetnoj stranici

  const bannerIcons = [
    "fa-solid fa-house",
    "fa-solid fa-house-flood-water",
    "fa-solid fa-city"
  ];

  const bannerTitles = [
    "Kupolis Terra",
    "Kupolis Floating",
    "Kupolis Resorts"
  ];

  const bannerTexts = [
    "Kupolis Terra model je klasičan predstavnik geodezijskih kupola. Mogu se pronaći čak 4 prethodno dizajnirana modela, ali se takođe mogu dizajnirati potpuno novi modeli, shodno potrebama i željama klijenta.",
    "Kupolis Floating model se izrađuje na bazi prethodno odabranog rešenja iz Kupolis Terra kolekcije. Dolazi u varijanti sa ili bez motornog pogona, kao fiksni li kao pokretni splav.",
    "Kupolis Resorts predstavlja posebnu vrstu usluge koju nudimo, a zasniva se na udruživanju prethodno navedenih Kupolis modela u potpuno funkcionalno ekološko naselje izgrađeno od naših objekata."
  ];

  const bannerLinks = [
    "pages/models.html",
    "pages/models.html",
    "pages/models.html"
  ];

  const bannerRow = document.getElementById("bannerRow");

  if (bannerRow) {
    let htmlBanner = "";
    for (let i = 0; i < bannerTitles.length; i++) {
      htmlBanner +=
        '<div class="col-12 col-lg-4 text-center my-4">' +
          '<div class="card card-h">' +
            '<div class="card-body">' +
              '<i class="' + bannerIcons[i] + '"></i>' +
              '<h5 class="card-title">' + bannerTitles[i] + '</h5>' +
              '<p class="card-text">' + bannerTexts[i] + '</p>' +
              '<a href="' + bannerLinks[i] + '" class="btn border border-dark rounded-0 mb-2 btn-hvr">Vidi još</a>' +
            '</div>' +
          '</div>' +
        '</div>';
    }

    bannerRow.innerHTML = htmlBanner;
  }

  // Ispis benefita na pocetnoj stranici

  var icons = [
    "assets/img/bezbednost1.png",
    "assets/img/kvalitet1.png",
    "assets/img/sigurnost1.png",
    "assets/img/poverenje1.png",
    "assets/img/otpornost.png",
    "assets/img/garancija1.png"
  ];

  var titles = [
    "Bezbednost",
    "Kvalitet",
    "Sigurnost",
    "Poverenje",
    "Otpornost",
    "Garancija"
  ];

  var texts = [
    "Svaki naš proizvod izgrađen je od potpuno negorivih materijala",
    "Objekat je izgrađen od najotpornijih materijala, rok trajanja je minimum 70 godina",
    "Uz polisu osiguranja od svih rizika, omogućili smo miran san našem klijentu",
    "Klijentu se dostavlja kompletna dokumentacija, kao i sve informacije o objektu",
    "Objekat je projektovan da nesmetano funkcioniše u svim vremenskim neprilikama, kao i na temperaturama -40 do +70 stepeni",
    "Kupolis Vam pruža garanciju na ceo objekat u trajanju od čak 3 godine"
  ];

  var benefitsRow = document.getElementById("benefitsRow");
  var htmlBenefits = "";
  
  if(benefitsRow){
    for (var i = 0; i < icons.length; i++) {
    htmlBenefits += "<div class='col-12 col-lg-4 text-center my-4'>" +
              "<div class='card card-h'>" +
                "<div class='card-body'>" +
                  "<img src='" + icons[i] + "' alt='" + titles[i] + "'>" +
                  "<h5 class='card-title'>" + titles[i] + "</h5>" +
                  "<p class='card-text'>" + texts[i] + "</p>" +
                "</div>" +
              "</div>" +
            "</div>";
    }

    benefitsRow.innerHTML = htmlBenefits;
  }

  // Ispis tima

  var names = ["Petar Petrović", "Marko Marković", "Nemanja Maslaković"];
  var roles = ["CEO", "Architect", "Web Developer"];

  var $teamRow = $("#teamRow");

  for (var i = 0; i < names.length; i++) {
    var card = "<div class='col-8 col-md-3 mt-4'>" +
                 "<div class='card c-hvr'>" +
                   "<div class='card-body'>" +
                     "<h5>" + names[i] + "</h5>" +
                     "<p class='card-text'>" + roles[i] + "</p>" +
                   "</div>" +
                 "</div>" +
               "</div>";

    $teamRow.append(card);
  }

  // Automatsko menjanje slike na O nama stranici

  let page = window.location.pathname.split("/").pop();

  let imagesCarousel = [];
  let altCarousel = [];

  if (page === "about.html") {
    imagesCarousel = [
      "../assets/img/compact1.jpeg",
      "../assets/img/compact2.jpeg",
      "../assets/img/compact3.jpeg"
    ];
    altCarousel = [
      "Kupolis Compact 1",
      "Kupolis Compact 2",
      "Kupolis Compact 3"
    ];
  } else if (page === "models.html") {
    imagesCarousel = [
      "../assets/img/compact2.jpeg",
      "../assets/img/floating_2.jpeg",
      "../assets/img/floating_resorts3.jpeg"
    ];
    altCarousel = [
      "Kupolis Compact 2",
      "Floating 2",
      "Floating Resort 3"
    ];
  } else if (page === "contact.html") {
    imagesCarousel = [
      "../assets/img/floating2.jpeg",
      "../assets/img/interior.JPG",
      "../assets/img/floating_widnow.jpg"
    ];
    altCarousel = [
      "Kupolis Floating 2",
      "Interior",
      "Kupolis Window"
    ];
  }

  let sliderCounter = 0;

  setInterval(()=>{
      sliderCounter++;
      if(sliderCounter == imagesCarousel.length){sliderCounter=0;}
      $("#aboutCarousel img").attr({
          src: imagesCarousel[sliderCounter],
          alt: altCarousel[sliderCounter]
      })
  }, 4000);

  // Ispis opisa u about stranici
  let aboutTitles = [
    "KUPOLIS",
    "GEODEZIJSKE KUPOLE"
  ];

  let aboutTexts = [
    "Ujedinili smo znanja, resurse i vizije domaćih proizvođača i stručnjaka iz različitih oblasti sa ciljem da kreiramo jedinstvene kupole zasnovane na principima funkcionalnosti i ekonomičnosti. Prirodnim oblikom i unutrašnjim dizajnom u nameri smo da Vam pružimo uslove maksimalnog komfora na mestu koje Vi odaberete. Naš tim je tu da vam pruži kompletnu uslugu u rekordnom roku (od želje do realizacije za 35 dana). Osim projektovanja, proizvodnje i montaže, vršimo i demontažu kao i premeštanje kompletnog objekta na drugu lokaciju u roku od 7 dana. Pored inovativnih rešenja tehničke prirode, pobrinuli smo se da ne morate da brinete o dozvolama, održavanju i osiguravanju objekta, izradi enterijera, kao i mnogim drugim standardnim poteškoćama. Takođe, naši klijenti mogu da očekuju visok kvalitet materijala, kao i brzu i efikasnu izgradnju. Uz našu izuzetnu uslugu i kvalitetne proizvode, u mogućnosti smo da Vam pružimo ne samo kvalitetan i inovativan, već i zdrav i održiv stil života.",
    "Geodezijske kupole su inovativni i moderni oblici stambenog prostora koji nude brojne prednosti u odnosu na klasične građevine. Odlikuju se dugotrajnošću, izdržljivošću i otpornošću na prirodne nepogode poput zemljotresa, uragana i snažnih vetrova. Zahvaljujući svojoj formi, u stanju su da podnesu i velike količine snega. One su odličan spoj inovativne tehnologije, funkcionalnosti i jedinstvenog dizajna koji će u potpunosti promeniti vaš način života. Njihova jednostavnost i minimalizam ih čine prilagodljivim različitim veličinama, oblicima, stilovima i okolinama. Estetska upečatljivost kao i njihov neobičan oblik, čine ih privlačnim, jedinstvenim i modernim građevinama. Kupole omogućavaju maksimalnu iskorišćenost prostora, dok istovremeno stvaraju prirodnu ventilaciju i osvetljenje, uz energetsku efikasnost i ekološku prihvatljivost."
  ];

  let aboutRow = document.querySelector("#aboutUs-text");

  if(aboutRow){
    let htmlAbout = "";
    for (let i = 0; i < aboutTitles.length; i++) {
      htmlAbout += `
        <div class="col-12 col-md-5 text-justify ln-h">
          <h3 class="my-4">${aboutTitles[i]}</h3>
          <p>${aboutTexts[i]}</p>
        </div>
      `;
    }

    aboutRow.innerHTML = htmlAbout;
  }

  // Ispis benefita u about stranici

  let benefitTitles = [
    "Energetska efikasnost",
    "Ekonomičnost",
    "Održivost",
    "Estetika",
    "Modularnost",
    "Praktičnost",
    "ALL season",
    "Brza i jednostavna gradnja",
    "Unikatnost",
    "Uzgoj biljaka"
  ];

  let benefitTexts = [
    "Zahvaljujući svojoj sferičnoj strukturi, kupole imaju dobru izolaciju koja zadržava toplotu unutar prostora. Takođe, prirodna ventilacija i mogućnost upotrebe solarnih sistema čine ih energetski efikasnijim izborom.",
    "Kupole se mogu konstruisati sa manje materijala u odnosu na tradicionalne građevinske konstrukcije slične veličine.",
    "Kupole se mogu napraviti od recikliranih materijala i energetski su efikasnije od drugih građevinskih konstrukcija zbog svoje dobre izolacije. Kupola je ekološki prihvatljiv izbor zbog manjeg uticaja na životnu sredinu i uštede energije.",
    "Kupole mogu biti izuzetno atraktivnog izgleda i mogu biti prilagođene različitim potrebama i ukusima. Fleksibilnosti u korišćenju prostora I bolje prilagođavanje prirodnim lepotama.",
    "Kupole se mogu konstruisati u različitim veličinama i oblicima, a mogu se i povezivati u modularne strukture. Mogu se  takođe demontirati i ponovo koristiti na drugim lokacijama.",
    "Kupole se mogu koristiti za različite namene, uključujući stambene, komercijalne, sportske, kulturne, pa čak i naučne svrhe.",
    "Naši proizvodi mogu se koristiti tokom cele godine, bez obzira na vremenske uslove. Zahvaljujući svojoj čvrstoj i izdržljivoj strukturi, kupola pruža siguran i udoban prostor za život ili rad čak i u ekstremnim uslovima.",
    "Mogu se brzo i jednostavno izgraditi u poređenju sa tradicionalnim građevinama. Zbog svoje jednostavne geometrije, kupole se mogu brzo postaviti, a time se smanjuju se trošak gradnje, količina građevinskog otpada i buke na gradilištu.",
    "Tim arhitekata I dizajnera potpuno optimizuje objekat Vašim željama i potrebama.",
    "Kupole se mogu koristiti za uzgoj biljaka, što može biti posebno korisno u hladnijim ili manje sunčanim klimatskim uslovima. One mogu obezbediti optimalne uslove za rast biljaka, uključujući dovoljno sunčeve svetlosti, toplote i vlage."
  ];

  let benefitGroups = [
    "top","top","top","top","top",
    "bottom","bottom","bottom","bottom","bottom"
  ];

  let $benefiti = $("#benefiti");

  $benefiti.append('<h2 id="benefiti-link">Benefiti Kupolisa</h2>');

  let $topWrapper = $('<div class="banners banners-benefit"></div>');
  let $bottomWrapper = $('<div class="banners banners-benefit"></div>');

  $.each(benefitTitles, function(i, title){
    let $banner = $('<div class="banner banner-benefit"></div>');
    if(benefitGroups[i] === "bottom"){
      $banner.addClass("banner-bottom");
    }

    let $h3 = $("<h3>").text(title);
    let $p = $("<p>").text(benefitTexts[i]);

    $banner.append($h3, $p);

    if(benefitGroups[i] === "top"){
      $topWrapper.append($banner);
    } else {
      $bottomWrapper.append($banner);
    }
  });

  $benefiti.append($topWrapper, $bottomWrapper);


  // Ispis brojeva na models stranici

  let statsNumbers = [
    "40%",
    "35d",
    "7d",
    "100%"
  ];

  let statsTexts = [
    "Energetski efikasnije od objekata iste površine",
    "Maksimalno vreme isporuke i montaže objekta na željenoj lokaciji je 35 dana",
    "Maksimalno vreme demontaže objekta i montaže na drugoj lokaciji",
    "Jedinstven dizajn po vašoj želji, kreiran od strane našeg tima arhitekata i dizajnera"
  ];

  let statNumbers = document.querySelector("#statNumbers");

  let htmlNumbers = "";

  if(statNumbers){
    for (let i = 0; i < statsNumbers.length; i++) {
      if (i % 2 === 0) {
        htmlNumbers += `<div class="col-12 sm-col-6 box-responsive">`;
      }

      htmlNumbers += `
        <div class="col-6 sm-box">
          <h2>${statsNumbers[i]}</h2>
          <p>${statsTexts[i]}</p>
        </div>
      `;

      if (i % 2 === 1) {
        htmlNumbers += `</div>`;
      }
    }

    statNumbers.innerHTML = htmlNumbers;
  }

  // Ispis modela na models stranici

  let modelImgs = [
    "../assets/img/compact1.jpeg",
    "../assets/img/floating1.jpeg",
    "../assets/img/resort.jpg"
  ];

  let modelAlts = [
    "interior",
    "house exterior",
    "3d modeling"
  ];

  let modelTitles = [
    "Kupolis Terra",
    "Kupolis Floating",
    "Kupolis Resorts"
  ];

  let modelTexts = [
    "Kupolis Terra model je klasičan predstavnik geodezijskih kupola. Mogu se pronaći čak 4 prethodno dizajnirana modela, ali se takođe mogu dizajnirati potpuno novi modeli, shodno potrebama i željama klijenta.",
    "Kupolis Floating model se izrađuje na bazi prethodno odabranog rešenja iz Kupolis Terra kolekcije. Dolazi u varijanti sa ili bez motornog pogona, kao fiksni li kao pokretni splav.",
    "Kupolis Resorts predstavlja posebnu vrstu usluge koju nudimo, a zasniva se na udruživanju prethodno navedenih Kupolis modela u potpuno funkcionalno ekološko naselje izgrađeno od naših objekata."
  ];

  let modelsId = document.querySelector("#modelsId");

  if(modelsId){
    let htmlModels = `
    <a name="srv"><h2 class="my-5">Kupolis u ponudi ima sledeće modele</h2></a>
  `;

  for (let i in modelTitles) {
    htmlModels += `
      <div class="row text-left">
        <div class="col-12">
          <div class="card mb-5 shadow p-3 mb-5 bg-white rounded-0">
            <div class="row no-gutters">
              <div class="col-lg-4">
                <a name="ext"><img src="${modelImgs[i]}" class="card-img rounded-0" alt="${modelAlts[i]}"></a>
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <a name="ext"><h5 class="card-title">${modelTitles[i]}</h5></a>
                  <p class="card-text">${modelTexts[i]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  modelsId.innerHTML = htmlModels;
  }

  // Ispis linkova u footeru, linkovi i tekst su u nizu objekata
  
  let isIndex = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

  const footerLinks = isIndex ? [
        { url: "pages/about.html", text: "O Nama" },
        { url: "pages/models.html", text: "Modeli" },
        { url: "pages/contact.html", text: "Kontakt" },
        { url: "pages/author.html", text: "Autor" },
        { url: "dokumentacija.pdf", text: "Dokumentacija" }
    ] : [
        { url: "about.html", text: "O Nama" },
        { url: "models.html", text: "Modeli" },
        { url: "contact.html", text: "Kontakt" },
        { url: "author.html", text: "Autor" },
        { url: "../dokumentacija.pdf", text: "Dokumentacija" }
    ];

    $("#footerLinks").append(`<h5>Linkovi</h5>`);

    for (let link of footerLinks) {
      $("#footerLinks").append(`
          <p>
              <i class="fas fa-chevron-right icon-hom"></i>
              <a href="${link.url}">${link.text}</a>
          </p>
      `);
    }

  // Ispis kontakta u footeru

    const footerContacts =["Zdravka Čelara 16", "kupolis@kupolis.rs", "+381 60 1234-567"]

    $("#footerContact").append(`<h5>Kontakt</h5>`)

    for (let footerContact of footerContacts) {
      $("#footerContact").append(`
          <p>
              <i class="fas fa-chevron-right icon-hom"></i>
              ${footerContact}
          </p>
      `);
    }

  // Kreiranje padajuce liste

  let messageTypes = [
  "Izaberite", 
  "Generalno pitanje", 
  "Pitanje o sigurnosti", 
  "Pitanje o kupovini", 
  "Drugo"
  ];

  let selectContainer = $("#questionType");

  let selectHtml = `<select class="form-control border-top-0 border-left-0 border-right-0 rounded-0" id="messageType" name="messageType">
  `;

  for (let type of messageTypes) {
    selectHtml += `<option value="${type}">${type}</option>`;
  }

  selectHtml += `</select>`;

  selectContainer.html(selectHtml);

  // Regex i provera podataka forme

  $("#buttonSend").on("click", function (e) {
    e.preventDefault();

    let regexName = /^[A-ZČĆŽŠĐ][a-zčćžšđ]+$/;
    let regexSurname = /^[A-ZČĆŠĐŽ][a-zčćšđž]+(-[A-ZČĆŠĐŽ][a-zčćšđž]+)?$/;
    let regexEmail = /^[a-zA-Z0-9.]{1,32}@[a-zA-Z]+(-[a-zA-Z]+)*(\.[a-zA-Z]+(-[a-zA-Z]+)*)+$/;
    let titleRegex = /^.{5,50}$/;
    let messageRegex = /^.{5,500}$/;

    let errors = [];

    var ime = $("#name");
    ime.next(".error-msg").remove();
    if (!regexName.test(ime.val())) {
      ime.addClass("error-border");
      ime.after('<div class="error-msg">Ime ne sme sadržati brojeve, razmake niti specijalne karaktere. Mora početi velikim slovom.</div>');
      errors.push("Name");
    } else {
      ime.removeClass("error-border");
    }

    var prezime = $("#surname");
    prezime.next(".error-msg").remove();
    if (!regexSurname.test(prezime.val())) {
      prezime.addClass("error-border");
      prezime.after('<div class="error-msg">Prezime ne sme sadržati brojeve, razmake niti specijalne karaktere. Mora početi velikim slovom.</div>');
      errors.push("Surname");
    } else {
      prezime.removeClass("error-border");
    }

    var email = $("#email");
    email.next(".error-msg").remove();
    if (!regexEmail.test(email.val())) {
      email.addClass("error-border");
      email.after('<div class="error-msg">Mail treba biti u formatu: proba@proba.com</div>');
      errors.push("Email");
    } else {
      email.removeClass("error-border");
    }

    var title = $("#title");
    title.next(".error-msg").remove();
    if (!titleRegex.test(title.val())) {
      title.addClass("error-border");
      title.after('<div class="error-msg">Naslov mora imati između 5 i 50 karaktera.</div>');
      errors.push("Title");
    } else {
      title.removeClass("error-border");
    }

    let selectedType = $("#messageType").val();
    $("#messageType").next(".error-msg").remove();
    if (selectedType === "Izaberite") {
        $("#messageType").after('<div class="error-msg" style="color:red;">Morate odabrati vrstu poruke</div>');
        errors.push("Message type");
    }

    var message = $("#message");
    message.next(".error-msg").remove();
    if (!messageRegex.test(message.val())) {
      message.addClass("error-border");
      message.after('<div class="error-msg">Poruka mora imati između 5 i 500 karaktera.</div>');
      errors.push("Message");
    } else {
      message.removeClass("error-border");
    }

    var terms = $("#terms");
    var termsLabel = terms.next("label");
    termsLabel.next(".error-msg").remove();
    if (!terms.is(":checked")) {
      termsLabel.after('<div class="error-msg" style="color:red;">Morate prihvatiti uslove korišćenja</div>');
      errors.push("Terms");
    }

    if (errors.length === 0) {
      $("#success-msg").remove();
      $(this).after('<div id="success-msg" class="success-msg">Podaci su uspešno poslati!</div>');
    }  else {
      $("#success-msg").remove(); 
    }

  });
});