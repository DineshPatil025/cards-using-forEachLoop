// https://source.unsplash.com/random/?city

let cl = console.log;

const imagesContainer = document.getElementById("imagesContainer");


const images = [

    'https://source.unsplash.com/random/?Cryptocurrency',
    'https://source.unsplash.com/random/?nature',
    'https://source.unsplash.com/random/?bird',
    'https://source.unsplash.com/random/?fish',
    'https://source.unsplash.com/random/?dog',
    'https://source.unsplash.com/random/?flower',
    'https://source.unsplash.com/random/?html',
    'https://source.unsplash.com/random/?css',
    'https://source.unsplash.com/random/?java',
    'https://source.unsplash.com/random/?javascript',
    'https://source.unsplash.com/random/?flower',
    'https://source.unsplash.com/random/?car'


]

let imageCardResult = "";

images.forEach(function (img) {


    let categ = img.substring(img.indexOf('?') + 1);
    cl(img)

    imageCardResult +=
        `
        
            <div class="col-md-4">
                <div class="card mb-4">
                        <div class="card-header text-center text-capitalize">
                          <h3 class = "cat">${categ}</h3>
                        </div>
                        // <div class="card-body card-img">
                        <h3 class = "cat">${categ}</h3>
                        <h2 class = "title">Description</h2>
                            <img src="${img}" alt="Nature">
                        </div>
                </div>
            </div>
    
         `

})

imagesContainer.innerHTML = imageCardResult;