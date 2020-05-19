import {connect} from "react-redux"
import BoardComponent from "../components/BoardComponent"


const mapStateToProps = ({main}) => {
    return{
        ai_attack_type:main.ai_attack_type,
        attack_type: main.attack_type,
        field_type:main.field_type
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}

const Board = connect(mapStateToProps, mapDispatchToProps)(BoardComponent)
export default Board