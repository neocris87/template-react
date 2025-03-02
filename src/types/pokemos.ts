export interface PokemonsAll {
    count:    number;
    next:     string;
    previous: null;
    results:  Pokemons[];
}

export interface Pokemons {
    name: string;
    url:  string;
}

export interface Pokemon {
    id:                       number;
    name:                     string;
    species:                  Species;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
    height:                   number;
    abilities:                Ability[];
    sprites:                  Sprites;
}

export interface PokemonHability {
    color: Color;
}

 interface Ability {
    ability:   Species;
    is_hidden: boolean;
    slot:      number;
}

 interface Species {
    name: string;
    url:  string;
}

 interface Stat {
    base_stat: number;
    effort:    number;
    stat:      Species;
}

 interface Type {
    slot: number;
    type: Species;
}

 interface Sprites {
    back_default:       string;
    back_female:        null;
    back_shiny:         string;
    back_shiny_female:  null;
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
    animated?:          Sprites;
    other?:             Other;
}

interface Color {
    name: string;
    url:  string;
}

interface Other {
    dream_world:   DreamWorld;
    showdown:   Sprites;
}

interface DreamWorld {
    front_default: string;
    front_female:  null;
}

