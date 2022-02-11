let w = 800;
let h = 800;
let levels = 5
let add, update, del, arrange;
let name, country, percent, radio;
let nameLabel, countryLabel, percentLabel, radioLabel;
let nameParent;
let shapesPerLevel = [];
let empty_array = [];

let shapes = []
let lines = []


function setup() {
  createCanvas(w, h);
  createUtils();
  // append(shapes,new Shape(3*w/4, 3*h/4, "fa-solid fa-user" , "Lorena", "Romania"))
  // append(shapes,new Shape(w/4, h/4, "fa-solid fa-users" , "Andrei", "Romania"))
}

function draw() {
  background(220);
  for (let i = 0;i < levels; i++){
    line(0, (i + 1)*h/levels, w, (i + 1)*h/levels)
  }
  for (let i = 0;i < shapes.length; i++){
    shapes[i].update();
    shapes[i].show();
  }
}

function mousePressed() {
  for (let i = 0;i < shapes.length; i++){
    shapes[i].pressed();;
  }
}

function mouseReleased() {

  for (let i = 0;i < shapes.length; i++){
    shapes[i].released();;
  }
}

function createUtils() {
  // nameParent = createDiv();
  // nameParent.id('nameUtil')
  add = createButton('add');
  add.class('button-21')
  add.position(w, 10);
  nameLabel = createDiv("Name: ");
  nameLabel.position (w + 100, 10);
  name = createInput();
  name.position(w + 200, 10)
  // name.parent(nameParent)
  // nameLabel.parent(nameParent)
  // add.parent(nameParent)

  countryLabel = createDiv("Country: ");
  countryLabel.position (w + 100, 30);
  country = createSelect();
  for (cntry of countryList) {
    country.option(cntry)
  }
  country.position(w + 200, 30)


  radioLabel = createDiv("Type: ");
  radioLabel.position(w + 100, 50);
  radio = createRadio();
  for (user of userTypes) {
    radio.option(user)
  }
  radio.position(w + 200, 50)
  add.mousePressed(function(){
    let radioOption;
    switch (radio.value()) {
      case "Individual":
        radioOption = "fa-solid fa-user-tie"
        break;
      case "Family":
        radioOption = "fa-solid fa-users"
        break;
      case "Institution":
        radioOption = "fa-solid fa-building-columns"
        break;
      default:
        radioOption = "fa-solid fa-building-columns"
}
    append(shapes,
      new Shape(w/5, h/5,radioOption , name.value(), country.value()))
  });



  update = createButton('update');
  update.class('button-21')
  update.position(w, 300);
  update.mousePressed(function(){

  });

  del = createButton('delete');
  del.position(w, 350);
  del.class('button-21')
  del.mousePressed(function(){
    shapes[shapes.length - 1].hide();
    shapes.slice(0, shapes.length - 1);
  });
  arrange = createButton('arrange');
  arrange.position(w, 400);
  arrange.class('button-21')
  arrange.mousePressed(function(){
    for (let i = 0;i < levels; i++){
      empty_array = []
      append(shapesPerLevel[i], empty_array)
    }

    console.log(shapesPerLevel)
    for (let i = 0;i < shapes.length; i++){
      console.log(shapes[i].getLevel(levels, h))
    }
  });
}

const userTypes = [
	"Individual",
	"Family",
	"Institution"]


const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];
