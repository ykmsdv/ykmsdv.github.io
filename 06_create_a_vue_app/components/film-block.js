/* global Vue */

const FilmBlock = Vue.defineComponent({
    name: 'FilmBlock',
    props: ['title', 'director', 'release_date', 'description'],
    template: `
        <div>
            <span class="title">{{ $props.title }}</span><br>
            <span class="director">{{ $props.director }}</span>
            <span class="year">{{ $props.release_date }}</span>
            <p class="description">{{ $props.description }}</p>
        </div>
    `
})

export default FilmBlock;