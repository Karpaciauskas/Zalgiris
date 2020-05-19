import React from "react"

function BoardComponent(props){
    return (
        <div className="Board text-center block_main_2 rounded shadow">
            {props.field_type==0 && (
            <div className="boardimg0">  
                <div className="board_grid"> 
                    <div className="item_board_1"> 
                        {props.attack_type===0 && (<img className="board_img" src="../images/user_question_mark.png" alt="logo"/> )}   
                        {props.attack_type==="1" && (<img className="board_img" src="../images/ldk_attack.png" alt="logo"/> )}
                        {props.attack_type==="2" && (<img className="board_img" src="../images/ldk_defense.png" alt="logo"/> )}
                        {props.attack_type==="3" && (<img className="board_img" src="../images/ldk_crossbowman.png" alt="logo"/> )}
                        {props.attack_type==="4" && (<img className="board_img" src="../images/ldk_spearman.png" alt="logo"/> )}
                        {props.attack_type==="5" && (<img className="board_img" src="../images/ldk_cavalry.png" alt="logo"/> )}       
                    </div> 
                    <div className="item_board_2">  
                        {props.ai_attack_type===0 && (<img className="board_img" className="board_img" src="../images/question_mark.png" alt="logo"/> )}
                    </div> 
                </div>  
            </div>)}
            {props.field_type==1 && (
            <div className="boardimg1">  
                <div className="board_grid"> 
                    <div className="item_board_1"> 
                        {props.attack_type===0 && (<img className="board_img" src="../images/user_question_mark.png" alt="logo"/> )}     
                        {props.attack_type==="1" && (<img className="board_img" src="../images/ldk_attack.png" alt="logo"/> )}
                        {props.attack_type==="2" && (<img className="board_img" src="../images/ldk_defense.png" alt="logo"/> )}
                        {props.attack_type==="3" && (<img className="board_img" src="../images/ldk_crossbowman.png" alt="logo"/> )}
                        {props.attack_type==="4" && (<img className="board_img" src="../images/ldk_spearman.png" alt="logo"/> )}
                        {props.attack_type==="5" && (<img className="board_img" src="../images/ldk_cavalry.png" alt="logo"/> )}    
                    </div> 
                    <div className="item_board_2">  
                    
                        {props.ai_attack_type===1 && (<img className="board_img" src="../images/templar_attack.png" alt="logo"/> )}
                        {props.ai_attack_type===2 && (<img className="board_img" src="../images/templar_defense.png" alt="logo"/> )}
                        {props.ai_attack_type===3 && (<img className="board_img" src="../images/templar_crossbowman.png" alt="logo"/> )}
                        {props.ai_attack_type===4 && (<img className="board_img" src="../images/templar_spearman.png" alt="logo"/> )}
                        {props.ai_attack_type===5 && (<img className="board_img" src="../images/templar_cavalry.png" alt="logo"/> )}
                    </div> 
                </div>  
            </div>)}
            {props.field_type==2 && (
            <div className="boardimg2">  
                <div className="board_grid"> 
                    <div className="item_board_1"> 
                        {props.attack_type===0 && (<img className="board_img" src="../images/user_question_mark.png" alt="logo"/> )}   
                        {props.attack_type==="1" && (<img className="board_img" src="../images/ldk_attack.png" alt="logo"/> )}
                        {props.attack_type==="2" && (<img className="board_img" src="../images/ldk_defense.png" alt="logo"/> )}
                        {props.attack_type==="3" && (<img className="board_img" src="../images/ldk_crossbowman.png" alt="logo"/> )}
                        {props.attack_type==="4" && (<img className="board_img" src="../images/ldk_spearman.png" alt="logo"/> )}
                        {props.attack_type==="5" && (<img className="board_img" src="../images/ldk_cavalry.png" alt="logo"/> )}    
                    </div> 
                    <div className="item_board_2">  
                        {props.ai_attack_type===1 && (<img className="board_img" src="../images/templar_attack.png" alt="logo"/> )}
                        {props.ai_attack_type===2 && (<img className="board_img" src="../images/templar_defense.png" alt="logo"/> )}
                        {props.ai_attack_type===3 && (<img className="board_img" src="../images/templar_crossbowman.png" alt="logo"/> )}
                        {props.ai_attack_type===4 && (<img className="board_img" src="../images/templar_spearman.png" alt="logo"/> )}
                        {props.ai_attack_type===5 && (<img className="board_img" src="../images/templar_cavalry.png" alt="logo"/> )}
                    </div> 
                </div>  
            </div>)}
            {props.field_type==3 && (
            <div className="boardimg3">  
                <div className="board_grid"> 
                    <div className="item_board_1">  
                        {props.attack_type===0 && (<img className="board_img" src="../images/user_question_mark.png" alt="logo"/> )}    
                        {props.attack_type==="1" && (<img className="board_img" src="../images/ldk_attack.png" alt="logo"/> )}
                        {props.attack_type==="2" && (<img className="board_img" src="../images/ldk_defense.png" alt="logo"/> )}
                        {props.attack_type==="3" && (<img className="board_img" src="../images/ldk_crossbowman.png" alt="logo"/> )}
                        {props.attack_type==="4" && (<img className="board_img" src="../images/ldk_spearman.png" alt="logo"/> )}
                        {props.attack_type==="5" && (<img className="board_img" src="../images/ldk_cavalry.png" alt="logo"/> )}    
                    </div> 
                    <div className="item_board_2">  
                        {props.ai_attack_type===1 && (<img className="board_img" src="../images/templar_attack.png" alt="logo"/> )}
                        {props.ai_attack_type===2 && (<img className="board_img" src="../images/templar_defense.png" alt="logo"/> )}
                        {props.ai_attack_type===3 && (<img className="board_img" src="../images/templar_crossbowman.png" alt="logo"/> )}
                        {props.ai_attack_type===4 && (<img className="board_img" src="../images/templar_spearman.png" alt="logo"/> )}
                        {props.ai_attack_type===5 && (<img className="board_img" src="../images/templar_cavalry.png" alt="logo"/> )}
                    </div> 
                </div>  
            </div>)}
        </div>    
    )
}       

export default BoardComponent