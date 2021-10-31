import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

interface ParamTypes {
    name: string;
}

interface Pokemon {
    id: number;
    name: string;
    weight: number;
    types: [
        type: {
            name: string;
            url: string;
        }
    ]
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    };
}

const PokemonInfo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #ccc;
    padding: 20px;

    img{
        min-width: 350px;
        width: 100%;
    }
`

export function View() {
    const [pokemon, setPokemon] = useState<Pokemon>()
    const { name } = useParams<ParamTypes>()

    useEffect(() => {
        ( async () => {
            const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const thisPokemon = await response.data        
            setPokemon(thisPokemon)
        })()
    },[name])
    
    return (
        <PokemonInfo>
            <img src={pokemon?.sprites.other.dream_world.front_default} alt={pokemon?.name} />
            <span>{pokemon?.name}</span>
        </PokemonInfo>
    )
}