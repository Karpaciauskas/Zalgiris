import {connect} from "react-redux"
import AiComponent from "../components/AiComponent"

const mapStateToProps = ({main}) => {
    return{
        ai_range_value:main.ai_range_value,
        ai_attack_type:main.ai_attack_type,
        ai_lifepoints: main.points.ai
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}

const AI = connect(mapStateToProps, mapDispatchToProps)(AiComponent)
export default AI