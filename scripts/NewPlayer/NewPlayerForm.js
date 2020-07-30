import { savePlayers } from "./NewPlayerDataProvider.js";

const contentTarget = document.querySelector(".new__player")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "savePlayer") {

        const playerFirstName = document.querySelector("#player--firstName")
        const playerLastName = document.querySelector("#player--lastName")
        const country = document.querySelector("#player--countryOfOrigin")
        // const teamId = document.querySelector()
        // Make a new object representation of a note. //
        const newPlayer = {
            // Key/value pairs here
            firstName: playerFirstName.value,
            lastName: playerLastName.value,
            countryOfOrigin: country.value
            // teamID: country.value

        }

        // Change API state and application state
        savePlayers(newPlayer)
    }
})



const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id ="player--firstName" placeholder="First Name" /> 
        <input type="text" id ="player--lastName" placeholder="Last Name" /> 
        <input type="text" id ="player--countryOfOrigin" placeholder="Country of Origin" /> 

        <button id="savePlayer">Create Player</button>
    `
}

export const PlayerForm = () => {
    render()
}