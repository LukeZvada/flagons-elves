import { useTeams } from "../NewTeam/NewTeamDataProvider.js";



const contentTarget = document.querySelector(".round")
const eventHub = document.querySelector(".container")


const render = () =>{

    contentTarget.innerHTML = `<button class="startButton">Start New Game</button>`


}

eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.className === "startButton"){
        const allTeams = useTeams()
        contentTarget.innerHTML = `
        ${teamList(allTeams)}
        ${teamList(allTeams)}
        ${teamList(allTeams)}
        `
    }
})

const teamList = (teams) =>{
      return  `
        <select class="dropdown" id="teamSelect">
                <option value="0">Please select a team</option>
                ${
                    teams.map(
                        teamObject => {
                            return `<option class="team" value="${ teamObject.id }">${teamObject.teamName}</option>`
                        }
                    ).join("") 
            }
            </select>
        `

}



export const StartGame = () =>{
    render()
}