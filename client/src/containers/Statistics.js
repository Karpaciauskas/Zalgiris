import {connect} from "react-redux"
import StatisticsComponent from "../components/StatisticsComponent"
import {
    fetchModalClose,
  } from "../actions/actions"

const mapStateToProps = ({main}) => {
    return{
        ai_lifepoints   :   main.points.ai,
        user_lifepoints :   main.points.user,
        ai_DMG          :   main.points.aiDMG,
        user_DMG        :   main.points.userDMG,
        total_points    :   main.total_points,
        show_score      :   main.show_score,
        total_spent     :   main.total_spent,
        answeredQuestions:  main.answeredQuestions
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onCloseModal: () => {
            dispatch(fetchModalClose())
        }
    }
}

const Statistics = connect(mapStateToProps, mapDispatchToProps)(StatisticsComponent)
export default Statistics