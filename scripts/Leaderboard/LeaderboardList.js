import { getTeams, useTeams } from "../NewTeam/NewTeamDataProvider.js";
import {  usePlayers, getPlayers } from "../NewPlayer/NewPlayerDataProvider.js";

const contentTarget = document.querySelector(".teamName")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("new__team",()  =>{
    LeaderboardList()
})




export const LeaderboardList = () => {
    let allTeams = []
    getTeams()
    .then(getPlayers)
    .then(() => { 
         allTeams = useTeams()
         const allPlayers = usePlayers()
         let allTeamsHTMLrep = []
         allTeams.map(
            teamObject => {
                teamObject.totalPlayers = 0
                        for (const player of allPlayers) {
                            if(player.teamId === teamObject.id) { 
                                teamObject.totalPlayers += 1
                            }
                        }
                allTeamsHTMLrep += `<div class= "team${teamObject.id} teamStyle" value="${ teamObject.id }">${teamObject.teamName} ${teamObject.totalPlayers}</div>`
            })
         contentTarget.innerHTML = `
    ${allTeamsHTMLrep}
`
         }
         
)}








// const eventHub = document.querySelector(".container")

// eventHub.addEventListener("new__player", ()=>{
//     const allTeams = useTeams()
//     const allPlayers = usePlayers()

//     for (const team of allTeams) { 
//         team.totalPlayers = 0
//         for (const player of allPlayers) {
//             if(player.teamId === team.id) { 
//                 team.totalPlayers += 1
//             }
//         }
//         console.log(team)
//     }
// })