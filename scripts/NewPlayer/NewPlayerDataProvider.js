let players = []

export const usePlayers = () => teams.slice()

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const teamPlayerStateChangedEvent = new CustomEvent("new__player")

    eventHub.dispatchEvent(teamPlayerStateChangedEvent)
}

export const getPlayers = () => {
   return fetch("http://localhost:8088/players")
   .then(response => response.json())
   .then( playerArray => {
        players = playerArray
       })
}

export const savePlayers = team => {
    return fetch('http://localhost:8088/players', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(team)
    })
    .then(getPlayers) 
    .then(dispatchStateChangeEvent) 
}