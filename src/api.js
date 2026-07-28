async function getCats(query){
    try {
        const request = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${query}&api_key=${import.meta.env.VITE_API_KEY}`)
        const result = await request.json();
        return result
    } catch (error) {
        console.log(error)
    }
}

async function getCatsByID(id){
    try {
        const request = await fetch(`https://api.thecatapi.com/v1/images/${id}`)
        const result = await request.json();
        return result
    } catch (error) {
        console.log(error)
    }
}

export default { getCatsByID, getCats }