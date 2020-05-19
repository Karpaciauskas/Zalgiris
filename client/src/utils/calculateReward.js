import roundNumber from "./roundNumber"
import getRandomInt from "./getRandomInt"

function calculateReward(damage,attack_cost)
{
    let calc=damage/2+attack_cost-attack_cost*0.4
    if(damage<=5)
    {
        calc=calc+getRandomInt(15,10)
    }
    else if(damage<=10)
    {
        calc=calc+getRandomInt(10,5)
    }
    else if(damage<=15)
    {
        calc=calc+getRandomInt(7,1)
    }
    let coins=roundNumber(calc)
    return {
        coins
    }
}
export default calculateReward;