import { connect } from "react-redux"
import QuizComponent from "../components/QuizComponent"
import { fetchQuestions,fetchQuizOpen, fetchQuizClose,fetchQuestion,fetchInputTest,fetchAnswers,fetchTestRewards,fetchEnding } from "../actions/actions"

const mapStateToProps = ({main}) => {
  return {
    isLoaded:           main.isLoaded,
    questions:          main.questions,
    activeQuestion:     main.activeQuestion,
    show:               main.show,
    answeredQuestions:  main.answeredQuestions,
    choosen:            main.choosen,
    currentQuestion:    main.currentQuestion,
    user_lifepoints:    main.points.user,
    test_rewards:       main.test_rewards,
    test_coin_rewards:  main.test_coin_rewards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    endTestResult: () => {
        dispatch(fetchQuizClose())
        dispatch(fetchQuestion())
        dispatch(fetchAnswers())
        dispatch(fetchTestRewards())
        dispatch(fetchEnding())
    },
    onHandleOpen: () => {
        dispatch(fetchQuizOpen())
    },
    onHandleQuestions: () => {
        dispatch(fetchQuestions())
    },
    onNextQuestion: () => {
        dispatch(fetchQuestion())
        dispatch(fetchAnswers())
    },
    onInput: (e) => {
      dispatch(fetchInputTest(e.target.value))
    }
  }
}

const Quiz = connect(mapStateToProps, mapDispatchToProps)(QuizComponent)
export default Quiz
