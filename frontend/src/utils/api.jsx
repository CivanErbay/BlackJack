
export const fetchCards = async() => {
    const response = await fetch("/api/game/")
    return await response.json();
}