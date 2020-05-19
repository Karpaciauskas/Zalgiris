import {connect} from "react-redux"
import FooterComponent from "../components/FooterComponent"

const mapStateToProps = ({main}) => {
    return{
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}

const Footer = connect(mapStateToProps, mapDispatchToProps)(FooterComponent)
export default Footer