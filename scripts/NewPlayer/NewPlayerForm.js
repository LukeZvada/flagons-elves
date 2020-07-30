import { savePlayers } from "./NewPlayerDataProvider.js";
import { getTeams, useTeams } from "../NewTeam/NewTeamDataProvider.js";

const contentTarget = document.querySelector(".new__player")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "savePlayer") {

        const playerFirstName = document.querySelector("#player--firstName")
        const playerLastName = document.querySelector("#player--lastName")
        const country = document.querySelector("#player--countryOfOrigin")

        const newPlayer = {
          
            firstName: playerFirstName.value,
            lastName: playerLastName.value,
            countryOfOrigin: country.value
            // teamID: country.value

        }

        
        savePlayers(newPlayer)
    }
})



const render = () => {
        let allTeams = []
        getTeams()
        .then(() => { 
             allTeams = useTeams()
        })
        
        

    contentTarget.innerHTML = `
        <input type="text" id ="player--firstName" placeholder="First Name" /> 
        <input type="text" id ="player--lastName" placeholder="Last Name" /> 
        <input type="text" id ="player--countryOfOrigin" placeholder="Country of Origin" /> 
        <select class="dropdown" id="teamSelect">
                <option value="0">Please select a team</option>
                ${
                    allTeams.map(
                        teamObject => {
                            return `<option value="${ teamObject.id }">${teamObject.teamName}</option>`
                        }
                    ).join("") 
            }
            </select>
        <button id="savePlayer">Create Player</button>
    `
}

export const PlayerForm = () => {
    render()
}