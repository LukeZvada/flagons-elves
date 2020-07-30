import {saveTeam} from "./NewTeamDataProvider.js"

const contentTarget = document.querySelector(".new__team")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTeam") {

        const teamTitle = document.querySelector("#team--name")
        // Make a new object representation of a note. //
        const newTeam = {
            // Key/value pairs here
            teamName: teamTitle.value,
            timestamp: Date.now()
        }

        // Change API state and application state
        saveTeam(newTeam)
        
    }
})



const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id ="team--name" placeholder="Enter New Team Name" /> 
        
        <button id="saveTeam">Create Team</button>
    `
}

export const TeamForm = () => {
    render()
}