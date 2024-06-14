import { useEffect, useState } from "react"

const useFetchPoke = (link = '') => {

    const [pokemon, setPokemon ] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchPokemons = async () => {
            try{
                setLoading(true)
                const response = await fetch(link) 
                if(response.status != 200){
                    throw new Error("Error en la peticion")
                }
                const data = await response.json()
                setPokemon(data)
                
            }catch(error){
                setError(error as any)
            }finally{
                setLoading(false)
            }
            
        }
        fetchPokemons()
    },[])
    return { pokemon, loading, error };
}
export default useFetchPoke