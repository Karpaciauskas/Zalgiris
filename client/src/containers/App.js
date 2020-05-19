import {connect} from "react-redux"
import AppComponent from "../components/AppComponent"
import {fetchAttacks} from "../actions/actions"


const mapStateToProps = ({main}) => {
    return{
        attacks:main.attacks,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onHandleAttacks: () => {
            dispatch(fetchAttacks())
          }
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)
export default App