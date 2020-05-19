import {connect} from "react-redux"
import UserComponent from "../components/UserComponent"
import { 
    fetchSlider, 
    fetchHistory, 
    fetchInput, 
    fetchAiStrategy, 
    fetchPoints,
    fetchField,
    fetchBuy,
    fetchEnding,
    fetchInputPoints
} from "../actions/actions";

const mapStateToProps = ({main}) => {
    return{
        range_value: main.range_value,
        attack_type: main.attack_type,
        ai_range_value: main.ai_range_value,
        ai_attack_type: main.ai_attack_type, 
        user_lifepoints: main.points.user,
        ai_lifepoints: main.points.ai,
        attack_user_amount: main.attack_user_amount,
        user_coins: main.user_coins,
        attack_cost: main.attack_cost,
        attack_damage:main.attack_damage,
        attack_defense:main.attack_defense
    }
}

const mapDispatchToProps = dispatch => {
    return{
        handleRangeChange: (e) => {
            dispatch(fetchSlider(e.target.value))
        },
        handleInputChange: (e) =>{
            dispatch(fetchInput(e.target.value))
            dispatch(fetchInputPoints())
        },
        onSubmitStrategy: (e) => {
            e.preventDefault();
            dispatch(fetchInput(e.target.value))
        },
        aiStrategyChange: () => {
            dispatch(fetchField())
            dispatch(fetchHistory())
            dispatch(fetchAiStrategy())
            dispatch(fetchPoints())
            dispatch(fetchEnding())
        },
        confirmBuy: () => {
            dispatch(fetchBuy())
        }
    }
}

const User = connect(mapStateToProps, mapDispatchToProps)(UserComponent)
export default User