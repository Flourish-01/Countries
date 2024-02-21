document.addEventListener('DOMContentLoaded', function () {
  // Get the button and dropdown menu
  var button = document.querySelector ('.btn-secondary');
  var dropdownItems = document.querySelectorAll('.dropdown-item');

  // Add click event listener to each dropdown item
  dropdownItems.forEach(function (item) {
      item.addEventListener('click', function () {
          // Update the button text with the selected country
          button.textContent = item.textContent;
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
var countryInput = document.getElementById("countryInput");

countryInput.addEventListener("input", function () {
var inputVal = countryInput.value.toLowerCase();
var dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");

dropdownItems.forEach(function (item) {
  var itemText = item.textContent.toLowerCase();
  var isMatch = itemText.startsWith(inputVal); // Change this line
  item.style.display = isMatch ? "block" : "none";
});

});


document.addEventListener('click', function (event) {
if (!countryInput.contains(event.target)) {
document.querySelector('.dropdown-menu').classList.remove('show');
}
});
});

class country {
    constructor(name, flag, note, capital ){
        this.name = name
        this.flag = flag
        this.note = note
        this.capital = capital
    }
    returnContent(){
        contain.innerHTML = `
        <header class=" mx-auto">
        <h1 class="">${obj.flag}</h1>
            <h3 class="text-left" style="font-size:21px;">
               Country Name : ${obj.name}
            </h3>
            <h3 class="text-left" style="font-size:21px;">
            Capital : ${obj.capital}
         </h3>
        </header>
        <div class="body">
          <h1 style="display:inline; font-size:18px" class="mt-2">Brief description:</h1>  ${obj.note}
        </div> `
    }
}
let obj = ""


const show1 = ()=>{
        obj = ""
        let nigeriaNote = "Nigeria, located in West Africa, is Africa's most populous country. Known for its diverse cultures, rich natural resources, and vibrant cities, it faces challenges like corruption and economic inequality."
        let capital = "Abuja"
        let nigeriaFlag = `<img width="300" src="https://imgs.search.brave.com/duZaK5ecu7xCMHC9HQeDnE6P9Zj2z4VFmOKGNE2g1Y0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzgyLzU4LzM5/LzM2MF9GXzgyNTgz/OTA0X1M1YTFoMUUw/djdDc2JMdHhGOWE3/UlZDVERCTnFCdlVV/LmpwZw"></img>`
    ;

        let nigeria = new country("Nigeria", nigeriaFlag, nigeriaNote, capital)
        obj = nigeria
        nigeria.returnContent()
    }
    const show2 = ()=>{
      obj = ""
      let capital = "Bern"
      let SwitzerlandNote = "Switzerland, nestled in the heart of Europe, is renowned for its pristine alpine landscapes, precision engineering, and cultural richness. A neutral haven, it captivates with picturesque mountains, lakes, and charming villages."
      let SwitzerlandFlag = `<img width="300" src="https://imgs.search.brave.com/IDVbSZQrQt7YiGbZcsuaui0Ev2MTndWyn3mR2hM7_SI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzE4LzA2LzE3/LzM2MF9GXzUxODA2/MTc5Ml9XUkFSTTRj/dGx5V0s4Qk5vSjJP/Y0Rub1VvbXJ5Z1Uw/RS5qcGc"></img>`
      let Switzerland = new country("Switzerland", SwitzerlandFlag, SwitzerlandNote, capital)
      obj = Switzerland
      Switzerland.returnContent()
  }
  const show3 = ()=>{
        obj =""
        let capital = "Ottawa"
        let CanadaNote = "Canada, the second-largest country globally, is renowned for its stunning natural landscapes, including vast forests, pristine lakes, and the Rocky Mountains. It boasts a diverse culture and friendly citizens."
        let CanadaFlag = `<img width="300" src="https://imgs.search.brave.com/QJEqtmYvuXJIL1pDjfWko9ooS8Io6J-0e44aHhD1My4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE5Lzgz/LzM2MF9GXzYyMTk4/MzkwX2RoV01xNGJT/ZEcwQzB6YWFYTDIy/c01nS3lKMGZhbHMz/LmpwZw"></img>`
        let Canada = new country("Canada", CanadaFlag, CanadaNote,capital)
        obj = Canada
        Canada.returnContent()
    }    
    const show4 = ()=>{
        obj = ""
        let capital = "Tokyo"
        let JapanNote = "Japan, an island nation in East Asia, seamlessly blends ancient traditions with modern innovation. Renowned for cherry blossoms, historic temples, sushi, and technological advancements, it captivates with its unique cultural fusion."
        let JapanFlag = `<img width="300" src="https://imgs.search.brave.com/keFKQdpogcJcROnmGBxzSMHY9oa7olh3O2goSUrs5QU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE5LzU0/LzM2MF9GXzYyMTk1/NDE2X3dmek00QmF6/NzBPakVVNTRFaHND/cHZ1UVdsSWh1a1Bn/LmpwZw"></img>`
        let Japan = new country("Japan", JapanFlag, JapanNote,capital)
        obj = Japan
        Japan.returnContent()
    }
    const show5 = ()=>{
      obj = ""
      let capital = "Cape Town"
      let South_AfricaNote = "South Africa, located at the southern tip of Africa, is renowned for its diverse landscapes, wildlife, and vibrant cultures. From iconic safaris to historical landmarks, it offers a captivating blend of experiences."
      let South_AfricaFlag = `<img width="300" src="https://imgs.search.brave.com/cIrV_1fL7__P4wxtdAo1rnwQA8YyY-kF_dq-qBLdN0U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NjEyMjk2L3Bob3Rv/L3NvdXRoLWFmcmlj/YS1mbGFnLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1ZTlVO/S3NzdGp2Zmw4UjFB/dm93aEF5SG5Dc3k4/VWQ3WHVfa2RBZFRl/R2NVPQ"></img>`
      let South_Africa = new country("South_Africa", South_AfricaFlag, South_AfricaNote,capital)
      obj = South_Africa
      South_Africa.returnContent()
  }
  const show6 = ()=>{
    obj = ""
    let capital = "Antananarivo"
    let MadagascarNote = "Madagascar, an island nation in the Indian Ocean, boasts unique biodiversity with its diverse wildlife and ecosystems. Known for lemurs and lush rainforests, it offers an extraordinary natural experience."
    let MadagascarFlag = `<img width="300" src="https://imgs.search.brave.com/6H5-WMPSFEJafFeqT_-Pp_PYTrO41qjeCnST3vafxD4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDcy/MDAwMTE3L3Bob3Rv/L2ZsYWctb2YtbWFk/YWdhc2Nhci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bnlL/MW5NQ1pscnBrMFZh/X2h2SW5zb1lSdFJO/N2xTOXItbEFDT3hW/Smkxaz0"></img>`
    let Madagascar = new country("Madagascar", MadagascarFlag, MadagascarNote,capital)
    obj = Madagascar
    Madagascar.returnContent()
}
const show7 = ()=>{
  obj = ""
  let capital = "Antananarivo"
  let ItalyNote = "Italy, known for its rich history, art, and cuisine, is a Mediterranean gem. Home to iconic landmarks like the Colosseum and Venice, it blends cultural splendor with breathtaking landscapes."
  let ItalyFlag = `<img width="300" src="https://imgs.search.brave.com/lcfEmUG4Bje5PPJv5lYW2HMe_Fise777jJMPyscNhuM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE4LzY0/LzM2MF9GXzYyMTg2/NDc3X3RQY0Nrb1E1/WXUzQVRsdW1xeHgw/ODZtTG9BandOSHM2/LmpwZw"></img>`
  let Italy = new country("Italy", ItalyFlag, ItalyNote,capital)
  obj = Italy
  Italy.returnContent()
}
const show8 = ()=>{
  obj = ""
  let capital = "Athens"
  let GreeceNote = "Greece, cradle of Western civilization, boasts ancient ruins, idyllic islands, and a Mediterranean charm. Known for its historical significance, stunning landscapes, and vibrant culture, Greece is a timeless destination."
  let GreeceFlag = `<img width="300" src="https://imgs.search.brave.com/5XTFkNug7TrfApp9ph4UyI9N21Qbw__4rI4PJCdY0Os/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/bGFnLWdyZWVjZV8x/NDAxLTEyMS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw"></img>`
  let Greece = new country("Greece", GreeceFlag, GreeceNote, capital)
  obj = Greece
  Greece.returnContent()
}
const show9 = ()=>{
  obj = ""
  let capital = "Addis Ababa"
  let EthiopiaNote = "Ethiopia, located in the Horn of Africa, is a country with a rich history and diverse landscapes. Known for its ancient civilizations, unique cultural heritage, and stunning highland scenery."
  let EthiopiaFlag = `<img width="300" src="https://imgs.search.brave.com/cyv2ktzOHZ2EbqLf1w9_CjMYI7Bq6gq3ZqMsz1cORp4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/bGFnLWV0aGlvcGlh/XzE0MDEtMTExLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn"></img>`
  let Ethiopia = new country("Ethiopia", EthiopiaFlag, EthiopiaNote,capital)
  obj = Ethiopia
  Ethiopia.returnContent()
}
const show10 = ()=>{
  obj = ""
  let capital = "Madrid "
  let SpainNote = "Spain, located in southwestern Europe, is known for its vibrant culture, historic landmarks like the Sagrada Familia and Alhambra, diverse landscapes, delicious cuisine, and lively festivals like La Tomatina."
  let SpainFlag = `<img width="300" src="https://imgs.search.brave.com/amOv2UwdeicnQlnCx7czBrjqcBJRq3HwMP5KLABcdF0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA4/NTE2NDc3L3Bob3Rv/L3NwYW5pc2gtZmxh/Zy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9dy1MaGg4NVFu/Y2x0RUptWi1iMkdu/c3BCdHBTNEZoRmd1/NWxZckdJZ0pEQT0"></img>`
  let Spain = new country("Spain", SpainFlag, SpainNote, capital)
  obj = Spain
  Spain.returnContent()
}
const show11 = ()=>{
  obj = ""
  let capital = "Buenos Aires"
  let ArgentinaNote = "Argentina, located in South America, is known for its diverse landscapes, including the Andes mountains and the Pampas. Rich in culture, it's famous for tango, vibrant cities, and delicious cuisine."
  let ArgentinaFlag = `<img width="300" src="https://imgs.search.brave.com/ZBMLGlYzp2ZsStE_P14Wv-uiIOwESWwr-IyC4AetnM0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE5LzUz/LzM2MF9GXzYyMTk1/MzkxXzdtT0J4NWhW/a1BSZThSYndESFQ1/VmRteFZEeGd0TGRy/LmpwZw"></img>`
  let Argentina = new country("Argentina", ArgentinaFlag, ArgentinaNote, capital)
  obj = Argentina
  Argentina.returnContent()
}
const show12 = ()=>{
  obj = ""
  let capital = "Algiers"
  let AlgeriaNote = "Algeria, located in North Africa, is known for its vast Sahara Desert landscapes, historic cities like Algiers, and a diverse cultural heritage influenced by Berber, Arab, and French civilizations."
  let AlgeriaFlag = `<img width="300" src="https://imgs.search.brave.com/IDVbSZQrQt7YiGbZcsuaui0Ev2MTndWyn3mR2hM7_SI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzE4LzA2LzE3/LzM2MF9GXzUxODA2/MTc5Ml9XUkFSTTRj/dGx5V0s4Qk5vSjJP/Y0Rub1VvbXJ5Z1Uw/RS5qcGc"></img>`
  let Algeria = new country("Algeria", AlgeriaFlag, AlgeriaNote,capital)
  obj = Algeria
  Algeria.returnContent()
}
const show13 = ()=>{
  obj = ""
  let capital = "Kigali"
  let RwandaNote = "Rwanda, a landlocked East African country, is known for its lush landscapes, vibrant culture, and remarkable recovery from the 1994 genocide. It's celebrated for cleanliness, stability, and gorilla trekking."
  let RwandaFlag = `<img width="300" src="https://imgs.search.brave.com/UieisPrnAybomSxX38_dclLELMNmvdBnA46553W1KdY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/OTU5NjQwMi9waG90/by9yd2FuZGEtZmxh/Zy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9c0E0UGtuYVNm/d0N6OWg1bGFaSHBr/T1NTUmh1R2k2aE1U/bWFBTkx3am9nWT0"></img>`
  let Rwanda = new country("Rwanda", RwandaFlag, RwandaNote,capital)
  obj = Rwanda
  Rwanda.returnContent()
}
const show14 = ()=>{
  obj = ""
  let capital = "Dublin"
  let IrelandNote = "Ireland, an island nation in Northwestern Europe, is renowned for its lush landscapes, rich history, and vibrant culture. Known for friendly locals, it boasts ancient castles, lively cities, and captivating folklore."
  let IrelandFlag = `<img width="300" hight="250" src="https://imgs.search.brave.com/8_Sla7XWm68xrNLG-Hxj_caRTTKPbdQLPewIfO-fXrU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzQ2LzcwLzI3/LzM2MF9GXzQ2NzAy/NzQ0X0lNYVliSm53/ZFV6VG9pMWxYR1g1/QXFIYUR4Y2Q4cnpI/LmpwZw"></img>`
  let Ireland = new country("Ireland", IrelandFlag, IrelandNote,capital)
  obj = Ireland
  Ireland.returnContent()
}
const show15 = ()=>{
  obj = ""
  let capital = ""
  let AustriaNote = "Austria, a picturesque country in Central Europe, is renowned for its stunning Alpine landscapes, classical music heritage, and historic architecture. Vienna, its capital, epitomizes elegance with imperial palaces and cultural richness."
  let AustriaFlag = `<img width="300" hight="250" src="https://imgs.search.brave.com/DlQZS2JdWfLwmG9l72gOmLb3HBoM7U-FSXOsO3aNiS0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZWFsaXN0aWMtYXVz/dHJpYS1mbGFnLWJh/Y2tncm91bmRfMTI1/NTQwLTI3NTguanBn/P3NpemU9NjI2JmV4/dD1qcGc"></img>`
  let Austria = new country("Austria", AustriaFlag, AustriaNote,capital)
  obj = Austria
  Austria.returnContent()
}
const show16 = ()=>{
  obj = ""
  let capital = "Wellington"
  let New_ZealandNote = "New Zealand, an island nation in the southwestern Pacific, is renowned for its stunning landscapes, from mountains and fjords to beaches. It embraces Maori culture, offers outdoor adventures, and has vibrant cities."
  let New_ZealandFlag = `<img width="300" src="https://imgs.search.brave.com/QUSls1umOf2UUyEqEKcYmlIuk2ib4BNCmHckVmIcwlM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzA1LzM2Lzgw/LzM2MF9GXzMwNTM2/ODAwM18zZHFKaGU5/U2tuMHdicGo2ZmRu/RFFyZWlrVlFMaGxH/Yi5qcGc"></img>`
  let New_Zealand = new country("New_Zealand", New_ZealandFlag, New_ZealandNote,capital)
  obj = New_Zealand
  New_Zealand.returnContent()
}
const show17 = ()=>{
  obj = ""
  let capital = "Jerusalem"
  let IsrealNote = "Israel, situated in the Middle East, is a historic land with religious significance. Known for its diverse culture, vibrant cities like Jerusalem and Tel Aviv, it blends ancient history with modern innovation."
  let IsrealFlag = `<img width="300" hight="250" src="https://imgs.search.brave.com/eP9wPKCOt0tvvURSk4hsQPv4aymZXP-qEMViHjob3VM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZWFsaXN0aWMtaXNy/YWVsLWZsYWctYmFj/a2dyb3VuZF8xMjU1/NDAtNTA3NC5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw"></img>`
  let Isreal = new country("Isreal", IsrealFlag, IsrealNote,capital)
  obj = Isreal
  Isreal.returnContent()
}
const show18 = ()=>{
  obj = ""
  let capital = "Paris"
  let FranceNote = "France, famed for its art, cuisine, and romantic ambiance, is a Western European country with diverse landscapes. Iconic landmarks include the Eiffel Tower, Louvre Museum, and historic cities like Paris."
  let FranceFlag = `<img width="300" hight="250" src="https://imgs.search.brave.com/9yoq8dfqvt7uHuExhi8EsN9TOSyZECPzO9X47WDyxqc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDkx/NjA3MjE1L3Bob3Rv/L2ZsYWctb2YtZnJh/bmNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1EeWlJMnN1/a1hQZlh4RjN6RkNi/M0dYRFBkVmRCQW40/S1M4dHJUT0pXMXQw/PQ"></img>`
  let France = new country("France", FranceFlag, FranceNote,capital)
  obj = France
  France.returnContent()
}
const show19 = ()=>{
  obj = ""
  let capital = "Brasília"
  let BrazilNote = "Brazil, the largest South American country, boasts diverse ecosystems like the Amazon rainforest. Renowned for vibrant culture, Carnival celebrations, and iconic landmarks like Christ the Redeemer, Brazil is a captivating destination."
  let BrazilFlag = `<img width="300" hight="250" src="https://imgs.search.brave.com/2tzTGW37vuuBMHUcKaW_HbpyaYpZb4pa_grclI1NSnM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE5Lzg0/LzM2MF9GXzYyMTk4/NDk5X1hrNk1YaGRM/Y2NsRUZuQUpWdXpO/UHM0UTQ4NEJVVVFz/LmpwZw"></img>`
  let Brazil = new country("Brazil", BrazilFlag, BrazilNote,capital)
  obj = Brazil
  Brazil.returnContent()
}
const show20 = ()=>{
  obj = ""
  let capital = "Bamako "
  let MaliNote = "Mali, located in West Africa, is known for its diverse landscapes, historic Timbuktu, and the Niger River. Rich in cultural heritage, it faces challenges like political instability and desertification."
  let MaliFlag = `<img width="300"  src="https://imgs.search.brave.com/Dtb9mBVeyNj-ICSWOkmRIlnGMWJmhUMSeNjAmP_Wvpw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/bGFnLW1hbGlfMTQw/MS0xNjYuanBnP3Np/emU9NjI2JmV4dD1q/cGc"></img>`
  let Mali = new country("Mali", MaliFlag, MaliNote,capital)
  obj = Mali
  Mali.returnContent()
}
const show21 = ()=>{
  obj = ""
  let capital = "San José "
  let Costa_RicaNote = "Costa Rica, a Central American gem, is renowned for its lush rainforests, diverse wildlife, and pristine beaches. A pioneer in eco-tourism, it offers vibrant biodiversity and captivating natural wonders."
  let Costa_RicaFlag = `<img width="300" hight="250" src="https://imgs.search.brave.com/TSCQzgBcqIV0Q6cnul-nAtKomFJIBvnHE6DnopdmFHQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzI5LzExLzIx/LzM2MF9GXzEyOTEx/MjE1N19jUDU4M0tm/VXdvcndaN1FEY2RZ/TVFCWUV0SXRYNFFh/Vy5qcGc"></img>`
  let Costa_Rica = new country("Costa_Rica", Costa_RicaFlag, Costa_RicaNote,capital)
  obj = Costa_Rica
  Costa_Rica.returnContent()
}