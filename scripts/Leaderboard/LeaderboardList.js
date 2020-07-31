import { getTeams, useTeams } from "../NewTeam/NewTeamDataProvider.js";

const contentTarget = document.querySelector(".teamName")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("new__team",()  =>{
    LeaderboardList()
})




export const LeaderboardList = () => {
    let allTeams = []
    getTeams()
    .then(() => { 
         allTeams = useTeams()
         let allTeamsHTMLrep = []
         allTeams.map(
            teamObject => {
                allTeamsHTMLrep += `<div class= "team${teamObject.id} teamStyle" value="${ teamObject.id }">${teamObject.teamName}</div>`
            })
         contentTarget.innerHTML = `
    ${allTeamsHTMLrep}
`
         }
         
)}