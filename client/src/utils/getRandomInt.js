import React, {Component} from 'react';

function getRandomInt(max, min) {
    
    return( 
        Math.floor(Math.random() * (max - min) + min)
        )
  }

  export default getRandomInt