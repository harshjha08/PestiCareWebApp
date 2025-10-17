if (window.innerWidth < 1024) {
  window.location.href = "mobile-warning.html";
}
// this part contains login sighup javascripts code 
// js for login signup
function showLogin(){
    document.querySelector(".innerContainer2").classList.add("active");
        document.querySelector(".innerContainer1").classList.remove("active");
        // document.querySelector(".section1-hero").classList.remove("active");

}
function showRegister(){
     document.querySelector(".innerContainer1").classList.add("active");
        document.querySelector(".innerContainer2").classList.remove("active");
}
function successLogin(){
    var username = 
    document.getElementById("username").value;
    alert("Hi "  + username + " You are succesfully loged In ");
}
function createAc(){
    var name =
    document.getElementById("fullName").value;
    alert("Hi " + name + " You are succesfully Registerd ");
    var data = 
    document.getElementById("Cpass").value;
    alert("Here is your Password " + data + " save this password for you future refrence" );
    
}
function showLoginSignup(){
    document.getElementById("loginform").style.display = 'flex';
}
function closeloginForm(){
    document.getElementById("loginform").style.display = 'none';
}

// Toggle chatbot open/close
function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");
  const chatbox = document.getElementById("chatbox");

  if (chatbot.style.display === "flex") {
    chatbot.style.display = "none";
  } else {
    chatbot.style.display = "flex";
    chatbox.innerHTML = "";
    botMessageWithOptions("Namaste! Kissan👋 I'm Zyra your eco friendly chatbot. How may I help you?", [
      "About Pesticides",
      "Uses And Benefits",
      "Crop Info",
      "Safety Tips",
      "Weather and field Guide",
      "General FAQs/Extra Tips",
      "Contact",
      "About Zyra",
    ]);
  }
}

// Scroll helper
function scrollBottom() {
  const chatbox = document.getElementById("chatbox");
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Create normal message
function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerHTML = text;
  document.getElementById("chatbox").appendChild(msg);
  scrollBottom();
}

// Bot message with option buttons
function botMessageWithOptions(text, options) {
  const msg = document.createElement("div");
  msg.classList.add("message", "bot");
  msg.innerHTML = text + "<br>";

  options.forEach(option => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.onclick = () => handleOption(option);
    msg.appendChild(btn);
  });

  document.getElementById("chatbox").appendChild(msg);
  scrollBottom();
}

// Normal bot message
function botMessage(text) {
  addMessage(text, "bot");
}

// Handle when user clicks an option
function handleOption(option) {
  addMessage(option, "user");

  switch (option) {
    case "About Pesticides":
      botMessageWithOptions("Choose: ", ["Q1- What are pesticides?", "Q2-Why are Pesticides used ?","Q3-Are pesticides always harmful?", "Q4- What are the main types of pesticides?"]);
      break;
      case "Q1- What are pesticides?":
        botMessage("Pesticides are chemical or biological substances used to kill or controll harmful organisms like insects, weed ,and fungi that damage crops.");
        break;
        case "Q2-Why are Pesticides used ?":
          botMessage("Pesticides help farmers protect crops, reduce losses, and increase yield-- but they must be used safely and in proper doses.");
          break;
          case "Q3-Are pesticides always harmful?":
            botMessage("no, when used properly and in limited quantities, pesticides protect crops effectively. overuse can harm soil,water, and human health");
            break;
            case "Q4- What are the main types of pesticides?":
              botMessage("Insecticides-kill Insects, Fungicides-prevent fungal diseases, herbicides- kill weeds,Bactericides- killl bacteria, Bio-pesticieds- Eco friendly, natural options");
              break;

      break;

    case "Uses And Benefits":
      botMessageWithOptions("Choose: ", ["How do pesticides help Farmars?","What are the benefits of using eco-friendly pesticides?", "Can pesticides help reduce post- harvest losses?"]);
      break;
      case "How do pesticides help Farmars?":
        botMessage("They prevent crop damage, improve quality and help achieve a higher yields");
      break;
      case "What are the benefits of using eco-friendly pesticides?":
        botMessage("They are safe for invironment harmless to beneficial insects,and improve soil health.");
      break;
      case "Can pesticides help reduce post- harvest losses?":
        botMessage("Yes, by protecting crops from pests even after harvest,pesticides reduce losses in storage and transport.");
      break;


    case "Crop Info":
      botMessageWithOptions("Choose :", ["Recommended pesticides for wheat rust?", "For rice stem borer control?", "For cotton bolloworm","For vegetable aphids and whiteflies?", "Which pesticide is safe for organic farming?"]);
      break;
case "Recommended pesticides for wheat rust?":
  botMessage("Mancozeb or Propiconazole(Use 1.5-2ml per liter of water)");
  break;
  case "For rice stem borer control?":
  botMessage("Carbofuran granules or chlorpyrifos spray(Use 1ml per liter)");
  break;
  case "For cotton bolloworm":
  botMessage("Cypermethrin or emamectin benzoate(Use 1.5-2ml per liter )");
  break;
  case "For vegetable aphids and whiteflies?":
  botMessage("Neem Oil(Organic) or Imidacloprid(Use 0.5 ml per liter )");
  break;
  case "Which pesticide is safe for organic farming?":
  botMessage("Neem Oil, Garlic extract, Trichoderma, and Bacillus thuringiensis(Bt)");
  break;

    case "Safety Tips":
      botMessageWithOptions("choose:" , ["What precautions should farmers take while spraying pesticides?", "Should Pesticides be mixed rabdomly?", "What to do if pesticides touches skin?","Can pesticides be used during heavy Wind or rain?"]);
      break;
    case "What precautions should farmers take while spraying pesticides?":
      botMessage("1-wear gloves, mask, and goggles,2- Avoid eating or smoking while spraying, 3-Wash hands after use, 4-store pesticeds safely away from children");
      break;
      case "Should Pesticides be mixed rabdomly?":
      botMessage("No, Always follow label instructions and avoid mixing unless recommended.");
      break;
      case "What to do if pesticides touches skin?":
      botMessage("Wash Immediately with soap and water.Seek medical help if irritation continues.");
      break;
      case "Can pesticides be used during heavy Wind or rain?":
      botMessage("No, Spraying during rain or strong winds reduces effectiveness and increases polution risk.");
      break;

       case "Weather and field Guide":
      botMessageWithOptions("choose:" , ["Why is weather important for pesticide spraying?","Suggest Acording PH", "How can farmers check real time weather?", "Why use map guidance on PestCare?"]);
      break;
    case "Why is weather important for pesticide spraying?":
      botMessage("Temperature, Humidity,and wind affect pesticide performance. Ideal spraying time is early morning or evening in calm weather");
      break;
      case "How can farmers check real time weather?":
      botMessage("Through the weather Section of PestCare or Any reliable weather API integrated in the site.");
      break;
      case "Why use map guidance on PestCare?":
      botMessage("Using this feture farmer will be able to understand geographical history of land and Our AI will svan the surface and it will suggest Crops and pesticide acordingly.");
      break;
      case "Suggest Crops Acording to Soil PH":
      botMessageWithOptions("Enter PH Value of you field or Soil to know details:",["Less than 6","Between 6 to 7.5", "greater than 7.5"]);
      break;
      case "Less than 6":
        botMessage("Soil Is Acidic in Nature you are advised to grow crops like Potato, Pineaplle, Tea Etc.");
        break;
        case "Between 6 to 7.5":
        botMessage("Soil Is Neutral in Nature you are advised to grow crops like Wheat, Rice, Sugarcane.");
        break;
        case "greater than 7.5":
        botMessage("Soil Is Alkaline in Nature you are advised to grow crops Cotton, Barley, Spinach Etc.");
        break;
      


        case "General FAQs/Extra Tips":
      botMessageWithOptions("choose:" , ["Can Pesticides be replaced by natural methods?", "How should empty pesticide bottles be disposed of?", "What is the shelf life of pesticides?", "Can pesticides affect soil fertility?"]);
      break;
    case "Can Pesticides be replaced by natural methods?":
      botMessage("Yes, Integrated pest management (IPM) combines crop rotation, neem-based sprays, and biological controls for eco safety.");
      break;
      case "How should empty pesticide bottles be disposed of?":
      botMessage("Never reuse or throw in open land.Rinse 3 times, puncture, and dispose of at approved collection centers.");
      break;
      case "What is the shelf life of pesticides?":
      botMessage("Usually 1-2 years from manufacturing date.Always check the label before use. ");
      break;
      case "Can pesticides affect soil fertility?":
      botMessage("Overuse can reduce soil microbes and fertility. Use only the required amount and switch to bio-pesticides when possible.");
      break;
      
   

     case "Contact":
       botMessage("You can contact us 24/7 -📞 +91 9876543210<br>📧 info@example.com or our office- 143, karol bagh Sharda market, Gali no.54, New Delhi");
       break;
     case "About Zyra":
       botMessage(" I'm Zyra AI based Chatbot Model the meaning of my Name Is Blooming,Fresh,Unique and catchy, here for assist you to grow healthy crops. I am developed By Harsh Jha. You can Contact him via -- Instagram:_harshjha_08 Or E-mail at : hjha1289@gmail.com.");
       break;
       botMessage("You can contact us 24/7 -📞 +91 9876543210<br>📧 info@example.com or our office- 143, karol bagh Sharda market, Gali no.54, New Delhi");
       break;

    default:
      botMessage("Sorry 😅 I didn’t get that. Try choosing another option!");
  }
}

// Handle user input message
function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";
  handleKeywordResponse(text.toLowerCase());
}

// Send message on Enter key
function handleKey(event) {
  if (event.key === "Enter") sendMessage();
}

// Keyword-based response logic
function handleKeywordResponse(msg) {
  if (msg.includes("pesticide") || msg.includes("Crops")) {
    botMessage(" Pesticides are chemicals used to protect crops from insects weeds fungy and other pests that can damage agriculture");
  }else if (msg.includes("harsh jha") || msg.includes("harsh") || msg.includes("who developed you")) {
    botMessage(" Name:Harsh Jha from India, passionate about tech world working on different web development projects, Skilled in C, C++, Java, Javascript, etc. Social Media: 1- Instagrame 2- LinkedIn 3-Facebook 4-Github");
  }
   else if (msg.includes("who") || (msg.includes("who are you") || msg.includes("who made you")|| msg.includes("who developed You") || msg.includes("zyra")  || msg.includes("who is zyra") || msg.includes("what you do"))) {
    botMessage(" I'm Zyra, Blooming,fresh,unique and catchy AI based Chatbot Model , here for assist you to grow healthy crops. I am developed By Harsh Jha. You can Contact him via -- Instagram:_harshjha_08 Or E-mail at : hjha1289@gmail.com.I am ai based model to prevent use of pesticide how to use ,how much to use everything you can ask from me");
  } else if (msg.includes("Safety") || msg.includes(" use pesticide")) {
    botMessage("Please read all the safety tips which will be provided at back of the bottle label or ");
  } else if (msg.includes("contact") || msg.includes("email")) {
    botMessage("You can contact us 24/7 -📞 +91 9876000210📧 dummy@gmail.com or our office- 143, karol bagh Sharda market, Gali no.54, New Delhi ");
  }else if (msg.includes("hi") || msg.includes("Hello") || msg.includes("Hey") || msg.includes("namaste")) {
    botMessageWithOptions("Hello ! User, Greetings I hope you are doing well. how may i assist you Today.",[
      "About Pesticides",
      "Uses And Benefits",
      "Crop Info",
      "Safety Tips",
      "Weather and field Guide",
      "General FAQs/Extra Tips",
      "Contact",
      "About Zyra",
    ]);
    
  } else if (msg.includes("soil") || msg.includes(" overuse")) {
    botMessage(" Overuse can reduce soil microbes and fertility. Use only the required amount and switch to bio-pesticides when possible. ");
  }else if (msg.includes("weather") || msg.includes("Field")) {
    botMessage("Temperature, Humidity,and wind affect pesticide performance. Ideal spraying time is early morning or evening in calm weather ");
  }  else if (msg.includes("insects") || msg.includes("insecticides")) {
    botMessage("Used to control insects like mosquitoes, flies, and beetles that damage crops or spread disease.");
  }else if (msg.includes("herbicide") || msg.includes("unwanted plants")) {
    botMessage("Used to kill unwanted plants or weeds that compete with crops for sunlight, water, and nutrients.");
  }else if (msg.includes("fungicide") || msg.includes("fungus") || msg.includes("infection")) {
    botMessage("Used to prevent or eliminate fungal infections that cause crop diseases and spoil harvests.");
  }else if (msg.includes("rats") || msg.includes("rodenticides") || msg.includes("rodents")) {
    botMessage("Used to kill or repel rats, mice, and other rodents that damage stored grains and crops.");
  }else if (msg.includes("bacteria") || msg.includes("bactericides") || msg.includes("crop yield")) {
    botMessage("Used to kill or repel rats, mice, and other rodents that damage stored grains and crops.");
  }
   else {
    botMessage("Sorry, I didn’t understand that 😅. Try typing keywords related to Pesticides like'safety tips' or 'Use of pesticides' Choose from given Options.");
  }
}

// section 2 
  const cards = document.querySelectorAll(".pesticide-card");
  window.addEventListener("scroll", () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add("show-card");
      }
    });
  });

  // section3 crop related
  const cropCards = document.querySelectorAll(".cropguide-card");
  window.addEventListener("scroll", () => {
    cropCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add("show-cropcard");
      }
    });
  });

  //section 3
const safetyButtons = document.querySelectorAll(".safety-btn");

safetyButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    if(content.style.maxHeight){
      content.style.maxHeight = null; // collapse
    } else {
      // close others
      document.querySelectorAll(".safety-content").forEach(c => c.style.maxHeight = null);
      content.style.maxHeight = content.scrollHeight + "px"; // expand
    }
  });
});
//section 4 about page
const aboutCards = document.querySelectorAll(".about-card");
window.addEventListener("scroll", () => {
  aboutCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      card.classList.add("show-about-card");
    }
  });
});
// section 5 contact page
 var contacUserName = document.getElementById("contact-name").value;
 const contactForm = document.querySelector(".contact-form");
//  contacUserName = document.getElementById
contactForm.addEventListener("submit", function(e){
  e.preventDefault(); // prevent actual submit
  alert("hi" + contacUserName + "Thanks for contacting! We'll get back to you soon.");
  contactForm.reset();
});
// crop details close functions
function closeModalWheat(){
document.getElementById("wheatModal").style.display = 'none';
}
function closeModalMaize(){
document.getElementById("maizeModal").style.display = 'none';
}
function closeModalTomato(){
document.getElementById("tomatoModal").style.display = 'none';
}
function closeModalBroccoli(){
document.getElementById("broccoliModal").style.display = 'none';
}
function closeModalMango(){
document.getElementById("mangoModal").style.display = 'none';
}
// crop details open functions
function openModalWheat(){
document.getElementById("wheatModal").style.display = 'flex';
}
function openModalMaize(){
document.getElementById("maizeModal").style.display = 'flex';
}
function openModalTomato(){
document.getElementById("tomatoModal").style.display = 'flex';
}
function openModalBroccoli(){
document.getElementById("broccoliModal").style.display = 'flex';
}
function openModalMango(){
document.getElementById("mangoModal").style.display = 'flex';
}

// for weather
function openWeather(){
  document.getElementById("weather-box").style.display = 'flex';
}
function closeWeather(){
  document.getElementById("weather-box").style.display = 'none';
}

// //pest map
//  function pestMapOpen(){
//   document.getElementById("pesticare-map").style.display = 'flex';
//  }
//  function closeMap(){
// document.getElementById("pesticare-map").style.display = 'none';
//  }

let pestMap; // global map variable
let mapInitialized = false;

function pestMapOpen() {
  const popup = document.getElementById('pesticare-map-popup');
  popup.classList.remove('hidden');

  // Initialize map only once after popup is visible
  setTimeout(() => {
    if (!mapInitialized) {
      pestMap = L.map('pesticare-map-container').setView([20.5937, 78.9629], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(pestMap);

      mapInitialized = true;
    } else {
      // If already initialized, trigger resize
      pestMap.invalidateSize();
    }
  }, 100); // 100ms delay ensures popup is visible
}

function pestMapClose() {
  const popup = document.getElementById('pesticare-map-popup');
  popup.classList.add('hidden');
}

// Open popup
function openWeather() {
  document.getElementById('pesticare-weather-popup').classList.remove('hidden');
}

// Close popup
function closeWeather() {
  document.getElementById('pesticare-weather-popup').classList.add('hidden');
}

// Fetch weather function (error-free version)
function fetchWeather() {
  const city = document.getElementById('pesticare-weather-input').value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const apiKey = "a477bee21687ef6b13102d737cf62ac7"; // <-- apna key yaha daale
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" 
              + encodeURIComponent(city) + "&units=metric&appid=" + apiKey;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      document.getElementById('pesticare-weather-location').innerText = data.name;
      document.getElementById('pesticare-weather-temp').innerText = data.main.temp;
      document.getElementById('pesticare-weather-cond').innerText = data.weather[0].description;
      document.getElementById('pesticare-weather-humidity').innerText = data.main.humidity;
    })
    .catch(err => {
      alert("Error: " + err.message);
    });
}



// find pesticide page
// Modal elements
function openPcModal(){
  document.getElementById("pc-modal-wrapper").style.display = 'flex';
}
function closePcModal(){
  document.getElementById("pc-modal-wrapper").style.display = 'none';
}

// ====== DATA ======
const pesticides = [
  { name: "Imidacloprid", use: "Aphids, whiteflies, termites", link: "https://www.amazon.in/s?k=Imidacloprid" },
  { name: "Chlorpyrifos", use: "Soil pests, termites, borers", link: "https://www.amazon.in/s?k=Chlorpyrifos" },
  { name: "Cypermethrin", use: "Mosquitoes, flies, moths", link: "https://www.amazon.in/s?k=Cypermethrin" },
  { name: "Mancozeb", use: "Fungal diseases", link: "https://www.amazon.in/s?k=Mancozeb" },
  { name: "Carbendazim", use: "Seed treatment, fungal control", link: "https://www.amazon.in/s?k=Carbendazim" },
  { name: "Glyphosate", use: "Weed killer (non-selective herbicide)", link: "https://www.amazon.in/s?k=Glyphosate" },
  { name: "Urea", use: "Nitrogen fertilizer", link: "https://www.amazon.in/s?k=Urea+fertilizer" },
  { name: "DAP", use: "Phosphorus fertilizer", link: "https://www.amazon.in/s?k=DAP+fertilizer" },
  { name: "Potash", use: "Increases yield and quality", link: "https://www.amazon.in/s?k=Potash+fertilizer" },
];

// ====== SEARCH FUNCTION ======
const searchInput = document.getElementById("pesticide-search");
const resultsContainer = document.getElementById("pesticide-results");

function showPesticides(list) {
  resultsContainer.innerHTML = "";
  if (list.length === 0) {
    resultsContainer.innerHTML = "<p>No results found 😕</p>";
    return;
  }

  list.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("pesticide-card");
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p><strong>Use:</strong> ${p.use}</p>
      <a href="${p.link}" target="_blank">🔗 Buy / Learn More</a>
    `;
    resultsContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = pesticides.filter(p => p.name.toLowerCase().includes(query));
  showPesticides(filtered);
});

// On load (show all)
showPesticides(pesticides);
//sidebar 
document.addEventListener("DOMContentLoaded", function (){
const sidebar = document.getElementById("side-bar-id");
const toggleBarBtn = document.getElementById("toggle-2-bar-btn");
// const sideBarContent = document.getElementById("")
toggleBarBtn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
});
});

// ph box
function openPhBox(){
  document.getElementById("phBoxModal").style.display ="flex";
}
function closePhBox(){
  document.getElementById("phBoxModal").style.display ="none";
}
function phBoxSyncInput(val){
  document.getElementById("phBoxInput").value = val;
}
function phBoxSyncSlider(val){
  document.getElementById("phBoxSlider").value = val;
}
function phBoxSuggest(){
  const ph = 
  parseFloat(document.getElementById("phBoxInput").value);
  const output =
  document.getElementById("phBoxResult");
  let suggestion = "";
  if(ph<5.5){
    suggestion = "soil is too acidic<br><b>Best Crops:</b>Potato, Pineapple,sweet potato<br><b>Tip:</b>Add Lime to reduce acidity."
  } else if (ph>=5.5 && ph<=7.0){
    suggestion = "Neutral to slightly acidic - perfect for most crops<br><b>Best Crops:</b>Rice, Wheat,tomato,Maize";
  }else if (ph>7.0 && ph<=8.5){
    suggestion = "Slightly Alkaline soil.<br><b>Best Crops:</b>Barley, cotton,sugar beet<br><b>Tip :</b> Add organic compost";
  }else{
    suggestion = "Highly Alakaline--Unsuitable for most crops <br><b>Tip:</b>Add sulphur or gypsum to balance ph";
  }
  output.innerHTML = suggestion;
}