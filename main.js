var app = new Vue({
    // hook to the html element
    // with this we control everything inside that element
    el: '#app',
    // datos a los que va a tener acceso el template
    // data debe ser una función que te devuelva un objeto
    data: {
        COLORS: {
            "grass": "#78C850",
            "poison": "#A040A0",
            "fire": "#F08030",
            "flying": "#A890F0",
            "water": "#6890F0",
            "bug": "#A8B820",
            "normal": "#A8A878",
            "electric": "#F8D030"
        },
        pokemons: [],
        searchText: '',
    },
    // lifecycle hook
    created() {
        fetch('https://api.jsonbin.io/b/5ab37f77989617146bd6eb29')
            .then(res => res.json())
            .then(pokemons => {
                // this se refiere a la instancia de vue, así que ya podemos acceder a lo que haya dentro de ella
                this.pokemons = pokemons;
            })
    },
    methods: {
        removePokemon(pokemonToRemove) {
            this.pokemons = this.pokemons
                .filter(p => p.id !== pokemonToRemove.id)
        }
    },
    computed: {
        filteredPokemons() {
            return this.pokemons
                .filter(pokemon =>
                    pokemon.name.toLowerCase().includes(this.searchText.toLowerCase()
                    ));
        }
    }
})

