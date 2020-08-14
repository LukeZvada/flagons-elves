import { useTeams } from "../NewTeam/NewTeamDataProvider.js"
import { usePlayers } from "../NewPlayer/NewPlayerDataProvider.js"
import { LeaderboardList } from "./LeaderboardList.js"

const contentTarget = document.querySelector(".teamName")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("new__player", ()=>{
    const allTeams = useTeams()
    const allPlayers = usePlayers()

    for (const team of allTeams) { 
        team.totalPlayers = 0
        for (const player of allPlayers) {
            if(player.teamId === team.id) { 
                team.totalPlayers += 1
            }
        }
        LeaderboardList()
    }
})
