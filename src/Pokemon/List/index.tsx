import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaHandPointRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface Pokemon {
  name: string;
  url: string;
}

const PokeList = styled.main `
    background: rgb(204, 204, 204);
    padding: 1rem;

    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.20 );
    backdrop-filter: blur( 4px );
    border-radius: 10px;

    overflow-y: auto;
    max-height: 600px;
    max-width: 500px;
    width: 100%;

    ul {
        text-align: center;
        li{
            font-size: 40px;
            list-style: none;
            a{
                text-decoration: none;
                color: #0d0d0d;
                text-transform: capitalize;

                padding: 10px;
                margin-right: 15px;
                line-height: 70px;


                transition: color 0.2s;

                svg{
                    visibility: hidden;   
                    text-shadow: 1px 1px 13px rgba(250, 250, 250, 1);
                }

                &:hover{
                    color: #EEEE9B;
                    svg {
                        visibility: visible;
                    }
                }
            }
        }
    }
`

export function List() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        
        (async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        const { results } = response.data
        
        setPokemons(results)
        })()

    }, [])

    return (
        <PokeList>
            <ul>
                {
                    pokemons.map(pokemon => (
                        <li key={pokemon.url}><Link to={`/${pokemon.name}`}><FaHandPointRight size="32" color="#EEEE9B"/> {pokemon.name}</Link></li>
                    ))
                }
            </ul>
        </PokeList>
    )
}