import api from "./apiConfig";

export const getCharacters = async () => {
    try{
        const response = await api.get(`/characters`)
        return response.data
    } catch (error) {
        console.error(`Failed to get characters - error: ${error}`)
        throw error
    }
}
