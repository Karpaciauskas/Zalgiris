import roundNumber from "./roundNumber"

function calculateResult(HP,field_type,ai,user,ai_units,user_units){
  let field_negative=0.5
  let field_positive=1.5
  HP.userDMG=0
  HP.aiDMG=0

  /////////////////////Win/Lose/Draw
  if(HP.ai<=0 && HP.user<=0){
    HP.user=0
    HP.ai=0
    HP.userDMG=0
    HP.aiDMG=0
    console.log("draw")
  }
  else if(HP.ai<=0){
    HP.user=HP.user
    HP.ai=0
    console.log("USER won")
  }
  else if(HP.user<=0){
    HP.user=0;
    HP.ai=HP.ai;
    console.log("AI won");
  }

  let ai_damage=ai.basedmg;
  let user_damage=user.basedmg;
  let ai_defense=ai.basedf;
  let user_defense=user.basedf;
  if(user_units>=1){
    user_damage=user_damage+user_damage/(user_units/2);
    user_defense=user_defense+user_defense/(user_units/2);
  }
  if(ai_units>=1){
    ai_damage=ai_damage+ai_damage/ai_units;
    ai_defense=ai_defense+ai_defense/ai_units;
  }
  //////////////////////////////////////////////
  if(user.fields===true && field_type===1){
    user_damage=user_damage+user.basedmg*field_positive;
    user_defense=user_defense+user.basedf*field_positive;
  }
  else if(user.forest===true && field_type===2){
    user_damage=user_damage+user.basedmg*field_positive;
    user_defense=user_defense+user.basedf*field_positive;
  }
  else if(user.river===true && field_type===3){
    user_damage=user_damage+user.basedmg*field_positive;
    user_defense=user_defense+user.basedf*field_positive;
  }
  else{
    user_damage=user_damage-user.basedmg*field_negative;
    user_defense=user_defense-user.basedf*field_negative;
  }
  //////////////////////////////////////////////
  if(ai.fields===true && field_type===1){
    ai_damage=ai_damage+ai.basedmg*field_positive;
    ai_defense=ai_defense+ai.basedf*field_positive;
  }
  else if(ai.forest===true && field_type===2){
    ai_damage=ai_damage+ai.basedmg*field_positive;
    ai_defense=ai_defense+ai.basedf*field_positive;
  }
  else if(ai.river===true && field_type===3){
    ai_damage=ai_damage+ai.basedmg*field_positive;
    ai_defense=ai_defense+ai.basedf*field_positive;
  }
  else {
    ai_damage=ai_damage-ai.basedmg*field_negative
    ai_defense=ai_defense-ai.basedf*field_negative
  }
  //////////////////////////////////////////////
  HP.userDMG=roundNumber((user_damage-ai_defense))
  HP.aiDMG=roundNumber((ai_damage-user_defense))
  
  if(HP.userDMG<0 && HP.aiDMG<0){
    HP.user=HP.user-HP.userDMG*(-1)
    HP.ai=HP.ai-HP.aiDMG*(-1)
    console.log(HP.userDMG+ " user   " + HP.aiDMG+" ai")
  } 
  else if(HP.userDMG<0 && HP.aiDMG>=0){

    HP.user=HP.user-HP.userDMG*(-1)
    HP.user=HP.user-HP.aiDMG
    console.log(HP.userDMG+ " user   " + HP.aiDMG+" ai")
  } 
  else if(HP.aiDMG<0 && HP.userDMG>=0){
    HP.ai=HP.ai-HP.aiDMG*(-1)
    HP.ai=HP.ai-HP.userDMG
    console.log(HP.userDMG+ " user   " + HP.aiDMG+" ai")
  }
  else {
    HP.user=HP.user-HP.aiDMG
    HP.ai=HP.ai-HP.userDMG
    console.log(HP.userDMG+ " user   " + HP.aiDMG+" ai")
  }

  ////////////////// Lifepoints below 0
  if(HP.ai<=0){
    HP.user=HP.user
    HP.ai=0
  }
  if(HP.user<=0){
    HP.user=0
    HP.ai=HP.ai
  }
  return {HP}
}

export default calculateResult;