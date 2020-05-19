import {connect} from "react-redux"
import AILifepointsComponent from "../components/AILifepointsComponent"

const mapStateToProps = ({main}) => {
    return{
        ai_lifepoints: main.points.ai
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}

const AI_lifepoints = connect(mapStateToProps, mapDispatchToProps)(AILifepointsComponent)
export default AI_lifepoints