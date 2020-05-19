import getRandomInt from "./getRandomInt"
function generateStrategy(history)
    {
      let check_history=history.slice(-2)
      let ai={
          range_value:0,
          attack_type:0
      }
      if(check_history[0]=="1" && check_history[1]=="1")
      {
        ai.range_value=getRandomInt(3,1);
        if(ai.range_value==1)
        {
          ai.attack_type=1
        }
        else if(ai.range_value==2)
        {
          ai.attack_type=getRandomInt(5,3)
        }
        else if(ai.range_value==3)
        {
          ai.attack_type=5
        }  
      }
      else if(check_history[0]=="2" && check_history[1]=="2")
      {
        ai.range_value=getRandomInt(4,2);
        if(ai.range_value==2)
        {
          ai.attack_type=getRandomInt(5,3)
        }
        else if(ai.range_value==3)
        {
          ai.attack_type=5
        }  
      }
      else if(check_history[0]=="3" && check_history[1]=="3")
      {
        ai.range_value=getRandomInt(4,1);
        if(ai.range_value==1)
        {
          ai.attack_type=getRandomInt(3,1)
        }
        else if(ai.range_value==2)
        {
          ai.attack_type=4
        }
        else if(ai.range_value==3)
        {
          ai.attack_type=5
        }  
      }
      else if(check_history[0]=="4" && check_history[1]== "4")
      {
        ai.range_value=getRandomInt(4,1);
        if(ai.range_value==1)
        {
          ai.attack_type=1
        }
        else if(ai.range_value==2)
        {
          ai.attack_type=4
        }
        else if(ai.range_value==3)
        {
          ai.attack_type=5
        }  
      }
      else if(check_history[0]=="5" && check_history[1]== "5")
      {
        ai.range_value=3
        ai.attack_type=5
      }
      else
      {
        ai.range_value=getRandomInt(4,1);
        if(ai.range_value==1)
        {
          ai.attack_type=getRandomInt(3,1)
        }
        if(ai.range_value==2)
        {
          ai.attack_type=getRandomInt(5,3)
        }
        if(ai.range_value==3)
        {
          ai.attack_type=5
        } 
      }
      return (
        ai
      )
    }

    export default generateStrategy;