/* global Vue */
/* global fetch */

// TASKS
// create an app instance that iterates over the films API
// create a component that renders a <div> for each film
// style the components
// create a search bar that filters out the films using a <form> element

    
import FilmBlock from './components/film-block.js';

// fetch the data from the films API
const url = 'https://ghibliapi.herokuapp.com/films';


const app = Vue.createApp({
    components: {
        FilmBlock
    },
    data: function () {
        return {
            filmStyle: {
                borderBottom: '1px solid #999',
                marginTop: '10px'
            },
            searchQuery: '',
            films: []
        };
    },
    mounted() {
        fetch(url)
        .then(res => res.json()) // res = response
        .then(json => {
            this.films = json;
        });
    },
    computed: {
        filteredFilms () {
            if(this.searchQuery){
                return this.films.filter((film) => {
                    return (film.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || film.description.toLowerCase().includes(this.searchQuery.toLowerCase()));
                });
            } else{
                return this.films;
            }
        }
    }
});

app.mount('#app');

// struggled with the searchbox - didn't include toLowerCase(), so my code was not working when parsing the titles
