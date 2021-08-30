// NAVBAR
let iconbtn = document.getElementsByClassName("icon");
function tooglenav() {
  let links = document.getElementById("links");

// to prevent reload event property of a link
  event.preventDefault();

  if (links.style.display == "block") {
    links.style.display = "none";
    // console.log("nav hidden");
  } else {
    links.style.display = "block";
    // console.log("nav shown");
  }
}
//buttons an boxes functionings
let textbox = document.getElementById("textarea");

let KmtomileBtn = document.getElementById("KilometerMilesBtn");
let outputscreen = document.getElementById("showouputscreen");
// console.log(outputscreen);

let MetertoCmBtn = document.getElementById("MetertoCmBtn");
MetertoCmBtn.addEventListener("click", function () {
  let meter = document.getElementById("textarea").value;
  let centimeter = meter * 100;
  outputscreen.value = meter + "Meter is: " + centimeter + " Cm";
});

let CmtoMeterBtn = document.getElementById("CmtoMeterBtn");
CmtoMeterBtn.addEventListener("click", function () {
  let centimeter = document.getElementById("textarea").value;
  let meter = centimeter / 100;
  outputscreen.value = centimeter + "Cm is: " + meter + " Meter";
});

let CmtoInchBtn = document.getElementById("CmtoInchBtn");
CmtoInchBtn.addEventListener("click", function () {
  let centimeter = document.getElementById("textarea").value;
  let inch = centimeter / 2.54;
  outputscreen.value = centimeter + "Cm is: " + inch + " Inch";
});

let InchtoCmBtn = document.getElementById("InchtoCmBtn");
InchtoCmBtn.addEventListener("click", function () {
  let Inches = document.getElementById("textarea").value;
  let centimeter = Inches * 2.54;
  outputscreen.value = Inches + "Inch is: " + centimeter + " Cm";
});

KmtomileBtn.addEventListener("click", function () {
  let milesval = 0.62137142;
  let km = document.getElementById("textarea").value;
  let miles = km * milesval;
  outputscreen.value = km + "km is: " + miles + " miles.";
  event.preventDefault();
});

let MetertoKmBtn = document.getElementById("MetertoKmBtn");
MetertoKmBtn.addEventListener("click", function () {
  let meter = document.getElementById("textarea").value;
  let kilometer = meter / 1000;
  outputscreen.value = meter + "m is: " + kilometer + " km";
  event.preventDefault();
});

let KmtoMeterBtn = document.getElementById("KmtoMeterBtn");
KmtoMeterBtn.addEventListener("click", function () {
  let KiloMeter = document.getElementById("textarea").value;
  let meter = KiloMeter * 1000;
  meter = Math.round(meter); //to round a figure decimal to integer.
  outputscreen.value = KiloMeter + "km is: " + meter + " Meter";
  event.preventDefault();
});

let MetertoMilesBtn = document.getElementById("MetertoMilesBtn");
MetertoMilesBtn.addEventListener("click", function () {
  let meter = document.getElementById("textarea").value;
  let miles = meter / 1609;
  outputscreen.value = meter + "Meter is: " + miles + " Miles";
});

let MetertoFeetBtn = document.getElementById("MetertoFootBtn");
MetertoFootBtn.addEventListener("click", function () {
  let meters = document.getElementById("textarea").value;
  let foots = meters * 3.281;
  outputscreen.value = meters + "Meters is: " + foots + " Foot";
});

let FoottoMeterBtn = document.getElementById("FoottoMeterBtn");
FoottoMeterBtn.addEventListener("click", function () {
  let Foots = document.getElementById("textarea").value;
  let meters = Foots / 3.281;
  outputscreen.value = Foots + "Foot is: " + meters + " Meters";
});

let FoottoInchesBtn = document.getElementById("FoottoInchesBtn");
FoottoInchesBtn.addEventListener("click", function () {
  let Foots = document.getElementById("textarea").value;
  let Inches = Foots * 12;
  outputscreen.value = Foots + "Foot is: " + Inches + " INCH";
});

let InchetoFootsBtn = document.getElementById("InchetoFootsBtn");
InchetoFootsBtn.addEventListener("click", function () {
  let Inches = document.getElementById("textarea").value;
  let Foots = Inches / 12;
  outputscreen.value = Inches + "INCH is: " + Foots + " FOOT";
});

let CelciustoFarenheitBtn = document.getElementById("CelciustoFarenheitBtn");
CelciustoFarenheitBtn.addEventListener("click", function (){
  let celcius = document.getElementById("textarea").value;
  let farenheit = celcius * 9/5 + 32;
  outputscreen.value = celcius + "°C is: "+ farenheit + " °F";
})


let FarenheittoCelciusBtn = document.getElementById("FarenheittoCelciusBtn");
FarenheittoCelciusBtn.addEventListener("click", function (){
  let farenheit = document.getElementById("textarea").value;
  let celcius = (farenheit - 32) * 5/9;
  outputscreen.value = farenheit+ "°F is: "+ celcius + " °C";
})


let CelciustoKelvinBtn = document.getElementById("CelciustoKelvinBtn");
CelciustoKelvinBtn.addEventListener("click", function (){
  let celcius = document.getElementById("textarea").value;
  let kelvin = parseInt(celcius) + 273.15;
  //IMP-NOTE: use parseInt, otherwise (+) operator will concat user enter value with 273.15 ,instead of adding.
  outputscreen.value = celcius+ "°C is: "+ kelvin + " °K";
})

let KelvintoCelciusBtn = document.getElementById("KelvintoCelciusBtn");
KelvintoCelciusBtn.addEventListener("click", function (){
  let kelvin = document.getElementById("textarea").value;
  let celcius = kelvin - 273.15;
  outputscreen.value = kelvin+ "°K is: "+ celcius + " °C";
})
