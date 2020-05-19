import {connect} from "react-redux"
import UserLifepointsComponent from "../components/UserLifepointsComponent"

const mapStateToProps = ({main}) => {
    return{
        user_lifepoints: main.points.user
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}

const USER_lifepoints = connect(mapStateToProps, mapDispatchToProps)(UserLifepointsComponent)
export default USER_lifepoints