import {
////////////////////////////////// Game
    RANGE_VALUE_SUCCESS,
    INPUT_STRATEGY_SUCCESS,
    INPUT_STRATEGY_POINTS,
    RANDOM_STRATEGY_SUCCESS,
    LIFEPOINTS_SUCCESS,
    HISTORY_PUSH,
    FIELD_VALUE_SUCCESS,
    SUCCESS_ATTACKS_RESULT,
////////////////////////////////// Quiz
    SUCCESS_QUESTIONS_RESULT, 
    SUCCESS_QUIZ_START,
    SUCCESS_QUIZ_END,
    SUCCESS_NEXT_QUESTION,
    INPUT_QUESTION,
    ANSWERS_RESULT,
    TEST_REWARDS,
////////////////////////////////// Coins
    USER_BUY_SUCCESS,
////////////////////////////////// Modal
    SUCCESS_ABOUT_RESULT, 
    SUCCESS_GRUNWALD_RESULT,
    SUCCESS_MODAL_FIRST_START,
    SUCCESS_MODAL_SECOND_START,
    SUCCESS_MODAL_END,
    SELECT_VALUE_SUCCESS,
    CHECK_END,
    USER_RESTART_SUCCESS

} from "../constants/index"
import { bindActionCreators } from "redux";

//Action Creator
export function fetchSlider(range_value){
    return dispatch => {
        dispatch(rangeValueResult(range_value));
    };
}

export function fetchInput(attack_type,attack_damage,attack_defense){
    return dispatch => {
        dispatch(strategyValueResult(attack_type,attack_damage,attack_defense));
    };
}

export function fetchInputPoints(attack_damage,attack_defense){
    return dispatch => {
        dispatch(strategyPointsResult(attack_damage,attack_defense));
    };
}


export function fetchAiStrategy(ai_attack_type,ai_range_value){
    return dispatch => {
        dispatch(aiStrategyResult(ai_attack_type,ai_range_value));
    };
}

export function fetchPoints(points,total_points,show_score){
    return dispatch => {
        dispatch(lifepointsResult(points,total_points,show_score));
    };
}

export function fetchHistory(history){
    return dispatch => {
        dispatch(historyPushResult(history));
    };
}

export function fetchField(field_type){
    return dispatch => {
        dispatch(fieldResult(field_type));
    };
}

export function fetchBuy(attack_user_amount,user_coins,total_spent){
    return dispatch => {
        dispatch(buyResult(attack_user_amount,user_coins,total_spent));
    };
}

//Utils

function buyResult(attack_user_amount,user_coins,total_spent){
    return {
        type:USER_BUY_SUCCESS,
        attack_user_amount,
        user_coins,
        total_spent
    }
}

/////////////////////////////////////////////////////

export function fetchRestart(
        user,ai,userDMG,aiDMG,total_points,total_spent,attack_damage,attack_defense,ai_attack_type,ai_range_value,
        attack_type,range_value,history,field_type,answeredQuestions,quizEnd,test_rewards,attack_user_amount,attack_ai_amount,
        user_coins,coin_reward,test_coin_rewards,activeQuestion
){
    return dispatch => {
        dispatch(restartGame(        
            user,ai,userDMG,aiDMG,total_points,total_spent,attack_damage,attack_defense,ai_attack_type,ai_range_value,
            attack_type,range_value,history,field_type,answeredQuestions,quizEnd,test_rewards,attack_user_amount,attack_ai_amount,
            user_coins,coin_reward,test_coin_rewards,activeQuestion));
    };
}


function restartGame(
    user,ai,userDMG,aiDMG,total_points,total_spent,attack_damage,attack_defense,ai_attack_type,ai_range_value,
    attack_type,range_value,history,field_type,answeredQuestions,quizEnd,test_rewards,attack_user_amount,attack_ai_amount,
    user_coins,coin_reward,test_coin_rewards,activeQuestion){
    return {
        type:USER_RESTART_SUCCESS,
        user,ai,userDMG,aiDMG,total_points,total_spent,attack_damage,attack_defense,ai_attack_type,ai_range_value,
        attack_type,range_value,history,field_type,answeredQuestions,quizEnd,test_rewards,attack_user_amount,attack_ai_amount,
        user_coins,coin_reward,test_coin_rewards,activeQuestion
    }
}

//////////////////////////////////////////////////////

function historyPushResult(history){
    return {
        type:HISTORY_PUSH,
        history
    }
}

function fieldResult(field_type){
    return {
        type:FIELD_VALUE_SUCCESS,
        field_type
    }
}

function rangeValueResult(range_value){
    return {
        type:RANGE_VALUE_SUCCESS,
        range_value
    }
}

function strategyValueResult(attack_type,attack_damage,attack_defense){
    return {
        type:INPUT_STRATEGY_SUCCESS,
        attack_type,
        attack_damage,
        attack_defense
    }
}

function strategyPointsResult(attack_damage,attack_defense){
    return {
        type:INPUT_STRATEGY_POINTS,
        attack_damage,
        attack_defense
    }
}

function aiStrategyResult(ai_attack_type,ai_range_value){
    return {
        type:RANDOM_STRATEGY_SUCCESS,
        ai_attack_type,
        ai_range_value
    }
}

function lifepointsResult(user,ai,userDMG,aiDMG,total_points,show_score){
    return {
        type:LIFEPOINTS_SUCCESS,
            user,
            ai,
            userDMG,
            aiDMG,
            total_points,
            show_score
    }
}


//////////////////// Quiz

export function fetchAnswers(answeredQuestions,choosen) {
    return dispatch => {
        dispatch(responseAnswers(answeredQuestions,choosen));
    };
}

export function fetchQuestions() {
  return dispatch => {
      dispatch(responseQuestions());
  };
}



export function fetchInputTest(choosen) {
  return dispatch => {
    dispatch(questionValue(choosen));
  };
}

export function fetchQuestion(activeQuestion) {
  return dispatch => {
    dispatch(successNextQuestion(activeQuestion));
  };
}

export function fetchQuizOpen(show) {
    return dispatch => {
      dispatch(quizOpen(show));
    };
}

export function fetchQuizClose(show,quizEnd) {
    return dispatch => {
      dispatch(quizClose(show,quizEnd));
    };
}

export function fetchTestRewards(test_rewards,total_points) {
    return dispatch => {
      dispatch(rewards(test_rewards,total_points));
    };
}

function rewards(test_rewards,total_points) {
    return {
        type: TEST_REWARDS,
        test_rewards,
        total_points,
    }
  }

export function fetchEnding(show_score) {
    return dispatch => {
      dispatch(ending(show_score));
    };
}

function ending(show_score) {
    return {
        type: CHECK_END,
        show_score
    }
  }

function responseAnswers(answeredQuestions,choosen) {
  return {
      type: ANSWERS_RESULT,
      answeredQuestions,
      choosen
  }
}

function quizOpen(show) {
    return {
        type: SUCCESS_QUIZ_START,
        show
    }
}

function questionValue(choosen) {
  return {
      type: INPUT_QUESTION,
      choosen
  }
}

function quizClose(show,quizEnd) {
    return {
        type: SUCCESS_QUIZ_END,
        show,
        quizEnd,
    }
}

function successQuestionsResult(questions) {
    return {
        type: SUCCESS_QUESTIONS_RESULT,
        questions
    }
}

function successNextQuestion(activeQuestion) {
  return {
      type: SUCCESS_NEXT_QUESTION,
      activeQuestion
  }
}

function successAboutResult(about) {
    return {
        type: SUCCESS_ABOUT_RESULT,
        about
    }
}

function successGrunwaldResult(grunwald) {
    return {
        type: SUCCESS_GRUNWALD_RESULT,
        grunwald
    }
}
/*
const URL1='https://zalgiriomusis.herokuapp.com/Questions';
const URL2='https://zalgiriomusis.herokuapp.com/Attacks';
const URL3='https://zalgiriomusis.herokuapp.com/About';
const URL4='https://zalgiriomusis.herokuapp.com/Grunwald';
*/
const URL1='http://localhost:5000/Questions';
const URL2='http://localhost:5000/Attacks';
const URL3='http://localhost:5000/About';
const URL4='http://localhost:5000/Grunwald';


export function fetchAttacks() {
    return dispatch => {
        dispatch(responseAttacks());
    };
}

export function fetchAbout() {
    return dispatch => {
        dispatch(responseAbout());
    };
}

export function fetchGrunwald() {
    return dispatch => {
        dispatch(responseGrunwald());
    };
}

export function fetchModalOpenFirst(show_first) {
    return dispatch => {
      dispatch(modalOpenFirst(show_first));
    };
}

export function fetchModalOpenSecond(show_second) {
    return dispatch => {
      dispatch(modalOpenSecond(show_second));
    };
}

export function fetchModalClose(show_first,show_second,show_score) {
    return dispatch => {
      dispatch(modalClose(show_first,show_second,show_score));
    };
}

export function fetchNext(activeSelection){
    return dispatch => {
        dispatch(selectValueResult(activeSelection));
    };
}

function selectValueResult(activeSelection){
    return {
        type:SELECT_VALUE_SUCCESS,
        activeSelection
    }
}

function successAttacksResult(attacks) {
    return {
        type: SUCCESS_ATTACKS_RESULT,
        attacks
    }
}

function modalOpenFirst(show_first) {
    return {
        type: SUCCESS_MODAL_FIRST_START,
        show_first
    }
}

function modalOpenSecond(show_second) {
    return {
        type: SUCCESS_MODAL_SECOND_START,
        show_second
    }
}

function modalClose(show_first,show_second,show_score) {
    return {
        type: SUCCESS_MODAL_END,
        show_first,
        show_second,
        show_score
    }
}

function responseQuestions(){
    return dispatch => 
    {
        return fetch(URL1, {})
        .then(res => {
           return res.json()
        })
        .then(questions => {
            dispatch(successQuestionsResult(questions))
        })
        .catch(error => {
            console.log(error);
        })
    }   
}


  
function responseAttacks(){
    return dispatch => 
    {
        return fetch(URL2, {})
        .then(res => {
           return res.json()
        })
        .then(attacks => {
            dispatch(successAttacksResult(attacks))
        })
        .catch(error => {
            console.log(error);
        })
    }   
}
  
function responseAbout(){
    return dispatch => 
    {
        return fetch(URL3, {})
        .then(res => {
           return res.json()
        })
        .then(about => {
            dispatch(successAboutResult(about))
        })
        .catch(error => {
            console.log(error);
        })
    }   
}
  
function responseGrunwald(){
    return dispatch =>
    {
        return fetch(URL4, {})
        .then(res => {
           return res.json()
        })
        .then(grunwald => {
            dispatch(successGrunwaldResult(grunwald))
        })
        .catch(error => {
            console.log(error);
        })
    }   
}

