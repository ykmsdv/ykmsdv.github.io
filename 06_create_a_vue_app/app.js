import FilmBlock from './components/film-block.js';

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