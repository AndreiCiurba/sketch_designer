let img;
let urlOfImageFile;
function addElement() {

  input = createFileInput(handleFile);
  input.id("fileInput")
  input.position(w + 200, 80);


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
        radioOption = "<i class=\"fa-solid fa-user-tie\"></i>"
        break;
      case "Family":
        radioOption = "<i class=\"fa-solid fa-users\"></i>"
        break;
      case "Institution":
        radioOption = "<i class=\"fa-solid fa-building-columns\"></i>"
        break;

      case "Country Flag":

        if (urlOfImageFile) {
          let imgUrl = "<img src=\"" + urlOfImageFile + "\" alt=\"CountryFlag\
          width=\"40\" height=\"30\">"
          append(shapes,
            new Shape(w/5, h/5, imgUrl, name.value(), country.value()))
        }
        return;
      case "Building":
        radioOption = "<i class=\"fa-solid fa-city\"></i>"
        break;
      default:
        radioOption = "<i class=\"fa-solid fa-building-columns\"></i>"
      }
    append(shapes,
      new Shape(w/5, h/5,radioOption , name.value(), country.value()))
  });
}

function handleFile(file) {
  if (file.type === 'image') {
    const selectedFile = document.getElementById('fileInput');
    const myImageFile = selectedFile.files[0];

    urlOfImageFile = URL.createObjectURL(myImageFile);
    console.log(urlOfImageFile)
    img = loadImage(urlOfImageFile,
      () => {image(img, 0, 0)});
    // img = createImg(file.data, '');
    console.log(img)
  } else {
    img = null;
  }
}
