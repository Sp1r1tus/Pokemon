export interface IAuth {
    auth: boolean;
    pw: string;
}

export interface IPokemonMoves {
    move: {
        name: string;
        url: string;
    }
}

export interface IPokemonStats {
    stat: {
        name: string;
        url: string;
    },
    base_stat: number;
    effort: number;
}

export interface IPokemonAbilities {
    ability: {
        name: string;
        url: string;
    },
    is_hidden: boolean;
    slot: number;
}

export interface IPokemonTypes {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export interface IPokemon {
    name: string;
    url: string;
}

export interface IPokemonPicture {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
}