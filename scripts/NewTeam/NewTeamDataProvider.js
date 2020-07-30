let teams = []

export const useTeams = () => teams.slice()

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const teamStateChangedEvent = new CustomEvent("new__team")

    eventHub.dispatchEvent(teamStateChangedEvent)
}

export const getTeams = () => {
   return fetch("http://localhost:8088/teams")
   .then(response => response.json())
   .then( teamArray => {
        teams = teamArray
       })
}

export const saveTeam = team => {
    return fetch('http://localhost:8088/teams', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(team)
    })
    .then(getTeams) 
    .then(dispatchStateChangeEvent) 
}