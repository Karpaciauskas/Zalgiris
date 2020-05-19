class CopyrightController {
    constructor(text,year){
        this.text = text
        this.year = year
    }
  
    printAdditional() {
      return(
        <div>
      {this.year}</div>  
      )
    }
  }
  
  function printText(Author){
    return(
      <div>
        {Author.map((copyright,index) => 
        <ul key={index}>
          {copyright.text}{copyright.printAdditional()}
        </ul>
        )}
      </div>
    )
  }
  
  const Author = [
    new Copyright(
        'Evaldas Karpačiauskas','© 2020'
    )
  ]

module.exports = CopyrightController