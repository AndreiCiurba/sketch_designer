window.w = 800;
window.h = 800;
window.levels = 10;
let add, update, del, arrange;
let name, country, percent, radio, createLine;
let nameUpdate, countryUpdate, percentUpdate, radioUpdate;
let nameLabel, countryLabel, percentLabel, radioLabel;
let nameLabelUpdate, countryLabelUpdate, percentLabelUpdate, radioLabelUpdate;
let nameParent;

window.size = 50;

let shapesPerLevel = [];
let empty_array = [];

let shapes = []
let lines = []


function setup() {
  createCanvas(w, h);
  append(shapes, new Shape(w/5, h/5, "fa-solid fa-user-tie", "sadsa"));
  append(shapes, new Shape(w/7, h/3, "fa-solid fa-user-tie", "sadsa"));
  append(shapes, new Shape(w/1.2, h/2, "fa-solid fa-user-tie", "sadsa"));
  createUtils();
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


  // for (let i = 0;i < lines.length; i++){
  //   line(lines)
  // }
  for (linee of lines) {
    linee.show();

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


  del = createButton('delete');
  del.position(w, 350);
  del.class('button-21')
  del.mousePressed(function(){


    for (let i = 0;i < shapes.length; i++){
      if (shapes[i].selected){
        shapes[i].div.class('none')
        shapes.splice(i,1);
      }
    }

    for (let i = 0;i < lines.length; i++){
      if (lines[i].top.selected || lines[i].bot.selected) {
        lines.splice(i, 1);
      }
    }


  });
  arrange = createButton('arrange');
  arrange.position(w, 400);
  arrange.class('button-21')
  arrange.mousePressed(function(){
    for (let i = 0;i < levels; i++){
      empty_array = []
      append(shapesPerLevel, empty_array)
    }
    let crtLevel;
    for (let i = 0;i < shapes.length; i++){
      crtLevel = shapes[i].getLevel(levels, h);
      append(shapesPerLevel[crtLevel], shapes[i]);
    }
    let x_val, y_val;
    for (let k = 0;k < levels; k++){
        let len = shapesPerLevel[k].length;
        let crtArray = shapesPerLevel[k]
        //sort array
        for(var jj = 0; jj < len; jj++){
         for(var j = 0; j < ( len - jj -1 ); j++){
           if(crtArray[j].x > crtArray[j+1].x){
             var temp = crtArray[j]
             crtArray[j] = crtArray[j + 1]
             crtArray[j+1] = temp
           }
         }
       }
        for (let i = 0;i < len; i++){
            x_val = (i+ 1) * w/(len+1) - w/16;
            y_val = (k + 1)*h/levels - 3*h/(4*levels);
            crtArray[i].move(x_val, y_val);
        }
    }
    shapesPerLevel = []
  });



    update = createButton('update');
    update.class('button-21')
    update.position(w, 210);

    nameLabelUpdate = createDiv("Name: ");
    nameLabelUpdate.position (w + 100, 210);
    nameUpdate = createInput();
    nameUpdate.position(w + 200, 210)

    countryLabelUpdate = createDiv("Country: ");
    countryLabelUpdate.position (w + 100, 230);
    countryUpdate = createSelect();
    for (lole of countryList) {
      countryUpdate.option(lole)
    }
    countryUpdate.position(w + 200, 230)


    radioLabelUpdate = createDiv("Type: ");
    radioLabelUpdate.position(w + 100, 250);
    radioUpdate = createRadio();
    for (user of userTypes) {
      radioUpdate.option(user)
    }
    radioUpdate.position(w + 200, 250);
    update.mousePressed(function(){
      let radioOption;
      switch (radioUpdate.value()) {
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
      let count = 0;
      let updateVal = shapes.length;
      for (let i = 0;i < shapes.length; i++){
        if (shapes[i].selected) {
          count = count + 1;
          updateVal = i;
        }
      }
      if (count !== 1) {
        if (count === 0){
          alert("Please select an item");
        }
        else{
          alert("Please select only one item");
        }
      }
    });


    createLine = createButton('add line');
    createLine.position(w, 550);
    createLine.class('button-21')
    lineDiv = createDiv("Text: ");
    lineDiv.position (w + 100, 560);
    lineText = createInput();
    lineText.position(w + 200,560)
    createLine.mousePressed(function(){
      let count = 0;
      let updateVal = shapes.length;
      let selectedTop, selectedBot;
      for (let i = 0;i < shapes.length; i++){
        if (shapes[i].selected) {
          updateVal = i;
          if (count === 0) {
            selectedTop = shapes[i];
          } else {
            selectedBot = shapes[i];
          }
          count = count + 1;
        }
      }
      if (count !== 2) {
          alert("Please select 2 shapes");
      } else {
          for (linee of lines) {
            //checkTop
            for (parent of linee.top) {
              if (compareShapes(selectedTop, parent)){
                append(linee.bot, selectedBot)
                return;
              }
            }
            //checkBot
            for (child of linee.bot) {
              if (compareShapes(selectedBot, child)){
                append(linee.top, selectedTop)
                return;
              }
            }
          }
		  let createdLine;
		  try {
		  	createdLine = new Line([selectedTop], [selectedBot], lineText.value());
		  } catch (e) {
			return;
		  }
          append(lines, createdLine);
      }
    });

}

function compareShapes(shape1, shape2) {
  return JSON.stringify(shape1) === JSON.stringify(shape2)
}


const userTypes = [
	"Individual",
	"Family",
	"Institution",
  "Country"]


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
