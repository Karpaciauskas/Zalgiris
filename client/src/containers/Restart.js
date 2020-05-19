import { connect } from "react-redux"
import RestartComponent from "../components/RestartComponent"
import {fetchRestart } from "../actions/actions"

const mapStateToProps = ({main}) => {
  return {
    activeQuestion:     main.activeQuestion,
    user_lifepoints:    main.points.user,
    ai_lifepoints:      main.points.ai
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRestart: () => {
        dispatch(fetchRestart())
    },
  }
}

const Restart = connect(mapStateToProps, mapDispatchToProps)(RestartComponent)
export default Restart
