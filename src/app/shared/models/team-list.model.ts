
export class TeamListModel {
    season: string
    opponent_team: string
    score: string
    points: string
    points_opponent: string
    date: number
    division: string
    conference: string
    home_team_score: string
    visitor_team_score: string
    home_team: 
        {
            name: string
            division: string
            conference: string 
        }
    visitor_team: 
        {
            name: string
            division: string
            conference: string 
        }
}