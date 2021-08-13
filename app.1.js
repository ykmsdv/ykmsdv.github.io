const url = 'https://ghibliapi.herokuapp.com/films';

const data = fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        renderData(json);
    });
    
function renderData(json) {
    let nFilms = 5;
    
    function sliceData() {
        const defaultFilms = json.slice(nFilms-5, nFilms);
        drawFilms(defaultFilms);
    };
    
    
    function drawFilms(subsetFilms) {
        let movieList = '';
        for(let i=0; i<subsetFilms.length; i++) {
            movieList += '<li>';
            movieList += '<span class="title"> Title: ' + subsetFilms[i].title + '</span>';
            movieList += '<br><span class="director"> Director: ' + subsetFilms[i].director + '</span>';
            movieList += '<br><span class="year"> Year: ' + subsetFilms[i].release_date + '</span>';
            movieList += '<p class="description">' + subsetFilms[i].description + '</p>';
            movieList += '</li>';
        }
        let DOMList = document.getElementById('movieList');
        DOMList.innerHTML = movieList;
    };
    
    sliceData();
    
    
    let nextButton = document.getElementById("next");
    nextButton.addEventListener("click", function() {
        if(nFilms<json.length) {
            prevButton.disabled = false;
            nFilms += 5;
            nextButton.disabled = false;
            sliceData();
        }
        if(nFilms>json.length) {
            nextButton.disabled = true;
        }
        console.log(nFilms);
    });
    
    let prevButton = document.getElementById("prev");
    prevButton.disabled = true;
    prevButton.addEventListener("click", function() {
        nextButton.disabled = false;
        
        if(nFilms>5) {
            nFilms -= 5;
            prevButton.disabled = false;
            sliceData();
        }
        if(nFilms===5) {
            prevButton.disabled = true;
        }
        console.log(nFilms);
    });

};

