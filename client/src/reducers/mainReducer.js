import { 
  LIFEPOINTS_SUCCESS,
  RANDOM_STRATEGY_SUCCESS,
  INPUT_STRATEGY_SUCCESS,
  INPUT_STRATEGY_POINTS,
  HISTORY_PUSH,
  FIELD_VALUE_SUCCESS,
  RANGE_VALUE_SUCCESS,
  SUCCESS_ATTACKS_RESULT, 

  SUCCESS_QUESTIONS_RESULT, 
  SUCCESS_ABOUT_RESULT, 
  SUCCESS_GRUNWALD_RESULT, 
  REQUEST_QUESTIONS,
  FAILURE_RESULT,
  SUCCESS_QUIZ_START,
  SUCCESS_QUIZ_END,
  HANDLE_QUESTIONS,
  SUCCESS_NEXT_QUESTION,
  INPUT_QUESTION,
  ANSWERS_RESULT,
  TEST_REWARDS,

  USER_BUY_SUCCESS,
  SUCCESS_MODAL_END,
  SUCCESS_MODAL_FIRST_START,
  SUCCESS_MODAL_SECOND_START,
  SELECT_VALUE_SUCCESS,
  CHECK_END,
  USER_RESTART_SUCCESS
} from "../constants";

import  calculateResult  from '../utils/calculateResult';
import  calculateReward  from '../utils/calculateReward';
import  generateStrategy  from '../utils/strategyCalcUtil';
import  getRandomInt  from '../utils/getRandomInt';

const initialState = {
    ai_attack_type    : 0,
    ai_range_value    : 0,
    attack_type       : 0,
    range_value       : 2,
    points:{
        user    : 1000,
        ai      : 1000,
        userDMG : 0,
        aiDMG   : 0
    },
    history:["0"],
    field_type:0,
    show: false,
    show_first: false,
    show_second: false,
    show_score: false,
    value: '',
    attacks:[],
    questions: [],
    about: [],
    grunwald: [],
    activeQuestion: 0,
    answeredQuestions: 0,
    quizEnd:false,
    choosen:false,
    currentQuestion:0,
    isLoaded:false,
    test_rewards:0,
    attack_user_amount:[0,0,0,0,0,0],
    attack_ai_amount:[0,0,0,0,0,0],
    attack_cost:[0,10,10,20,25,40],
    user_coins:100,
    coin_reward:0,
    test_coin_rewards:0,
    activeSelection:0,
    total_points:0,
    total_spent:0,
    attack_damage:0,
    attack_defense:0,
    answers:[2,1,3,1,2,3,2,2,2,3]
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case USER_BUY_SUCCESS:
      let updated_user_coins=state.user_coins
      updated_user_coins=state.user_coins-state.attack_cost[state.attack_type]
      let updated_attack_user_amount=state.attack_user_amount
      updated_attack_user_amount[state.attack_type]=updated_attack_user_amount[state.attack_type]+1
      let updated_total_spent=state.total_spent+state.attack_cost[state.attack_type]
      return{
        ...state,
        user_coins:updated_user_coins,
        attack_user_amount:updated_attack_user_amount,
        total_spent:updated_total_spent
      }
    //////////////////////////////
    case FIELD_VALUE_SUCCESS:
      let field_type=getRandomInt(4,1)
      return{
        ...state,
        field_type:field_type
      }
      case USER_RESTART_SUCCESS:
        return{
          ...state,
          points:{
            user:1000,
            ai:1000,
            userDMG:0,
            aiDMG:0
          },
          activeQuestion:0,
          total_points:0,
          total_spent:0,
          attack_damage:0,
          attack_defense:0,
          ai_attack_type:0,
          ai_range_value:0,
          attack_type:0,
          range_value:2,
          history:["0"],
          field_type:0,
          answeredQuestions:0,
          quizEnd:false,
          test_rewards:0,
          attack_user_amount:[0,0,0,0,0,0],
          attack_ai_amount:[0,0,0,0,0,0],
          user_coins:100,
          coin_reward:0,
          test_coin_rewards:0
        }
    //////////////////////////////
    case HISTORY_PUSH:
      let update_attack_user_amount=state.attack_user_amount
      update_attack_user_amount[state.attack_type]=update_attack_user_amount[state.attack_type]-1
      return {
        ...state,
        attack_user_amount:update_attack_user_amount,
        history:state.history.concat(state.attack_type)
      }
    //////////////////////////////
    case LIFEPOINTS_SUCCESS:
        let calcObject=calculateResult(
          state.points,
          state.field_type,
          state.attacks[state.ai_attack_type-1],
          state.attacks[state.attack_type-1],
          state.attack_user_amount[state.attack_type],
          state.attack_ai_amount[state.ai_attack_type])
        let coin_reward=calculateReward(calcObject.HP.userDMG,state.attack_cost[state.attack_type-1])
        let updated_coins=state.user_coins+coin_reward.coins
        let updated_points=state.total_points+calcObject.HP.userDMG+calcObject.HP.aiDMG
        let show_modal=false
        if(state.quizEnd && state.points.user<=0 || state.points.ai<=0)
        {
          show_modal=true
        }
      return { 
        ...state,
        coin_reward:coin_reward,
        user_coins:updated_coins,
        total_points:updated_points,
        show_score:show_modal,
        points:{
         user:calcObject.HP.user,
         ai:calcObject.HP.ai,
         userDMG:calcObject.HP.userDMG,
         aiDMG:calcObject.HP.aiDMG
        }
      };
    //////////////////////////////
    case RANDOM_STRATEGY_SUCCESS:
        let ai_custom_units=[0,0,0,0,0,0]
        let aiObject=generateStrategy(state.history)
        let randunits=getRandomInt(10,4)
        ai_custom_units[aiObject.attack_type]=randunits
      return {
        ...state,
        ai_range_value  : aiObject.range_value,
        ai_attack_type  : aiObject.attack_type,
        attack_ai_amount: ai_custom_units

      };
    //////////////////////////////
    case INPUT_STRATEGY_SUCCESS:
      return {
        ...state,
        attack_type: action.attack_type
      };
    case INPUT_STRATEGY_POINTS:
        let damage=state.attacks[state.attack_type-1].basedmg
        let defense=state.attacks[state.attack_type-1].basedf
        return {
          ...state,
          attack_damage:damage,
          attack_defense:defense
        };
    //////////////////////////////
    case RANGE_VALUE_SUCCESS:
        return {
        ...state,
        range_value: action.range_value
      };
      case ANSWERS_RESULT:
            let sum=state.answeredQuestions
            if (state.choosen==state.answers[state.activeQuestion-1]){
                  sum=sum+1   
            }
            return {
                ...state,
                answeredQuestions:sum,
                choosen:false  
            };
        case INPUT_QUESTION:
            const id =action.choosen;
            const answer = {id};
            return {
              ...state,
              choosen: answer.id
            };
        case SUCCESS_NEXT_QUESTION:
            let newActiveQuestion=state.activeQuestion+1
            return {
                ...state,
                activeQuestion:newActiveQuestion
            }
        case HANDLE_QUESTIONS:
            return {
                ...state
            }
        case SUCCESS_QUIZ_END:

            return {
                ...state,
                show:false,
                quizEnd:true 
            }
        case SUCCESS_QUIZ_START:
            return {
                ...state,
                show:true
                
            }
        case SUCCESS_QUESTIONS_RESULT:
            return {
                ...state,
                questions:action.questions,
                isLoaded:true,
        };
        case REQUEST_QUESTIONS:
            return {
                ...state,
            };
        case FAILURE_RESULT:
            return {
                error:action.error
            };
        case CHECK_END:
          let show_modal_1=false
          if(state.quizEnd && state.points.user<=0 || state.points.ai<=0)
          {
            show_modal_1=true
          }
        return{
          ...state,
          show_score:show_modal_1
        }
        case TEST_REWARDS:
          let rewards=state.answeredQuestions*10
          let coins_reward=state.answeredQuestions*25
          let coins_updated=state.user_coins+coins_reward
          let quiz_points=state.total_points+state.answeredQuestions*10
          return {
            ...state,
            points:{
              user:rewards,
              ai:state.points.ai,
              userDMG:state.points.userDMG,
              aiDMG:state.points.aiDMG
            },
            test_rewards:rewards,
            test_coin_rewards:coins_reward,
            user_coins:coins_updated,
            total_points:quiz_points
          }
          case SUCCESS_ATTACKS_RESULT:
            return {
                ...state,
                attacks:action.attacks,
                isLoaded:true,
        };
          case SUCCESS_ABOUT_RESULT:
            return {
                ...state,
                about:action.about,
                isLoaded:true,
        };
          case SUCCESS_GRUNWALD_RESULT:
            return {
                ...state,
                grunwald:action.grunwald,
                isLoaded:true,
        };
          case SUCCESS_MODAL_END:
            return {
                ...state,
                show_first:false,
                show_second:false,
                show_score:false,
                activeSelection:0
            };
          case SUCCESS_MODAL_FIRST_START:
            return {
                ...state,
                show_first:true  
            };
          case SUCCESS_MODAL_SECOND_START:
            return {
                ...state,
                show_second:true  
            };
          case SELECT_VALUE_SUCCESS:
            return {
            ...state,
            activeSelection: action.activeSelection
          };
          default:
          return state;
  }
}

export default mainReducer;


