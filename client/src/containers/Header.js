import {connect} from "react-redux"
import HeaderComponent from "../components/HeaderComponent"

const mapStateToProps = ({main}) => {
    return{
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
export default Header