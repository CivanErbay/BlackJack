import React from "react"

export async function fetchCards() {
    const response = fetch("/api/game/")
    return await response.json();
}