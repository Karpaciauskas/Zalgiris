class Questions
{
    constructor() 
    {
        this.getQuestions = this.getQuestions.bind(this)
        this.findQuestion = this.findQuestion.bind(this)           
    }

    _questionsList() 
    {
        return [
            {
                id: 1,
                question: 'Koks kunigaikštis vadovavo Žalgirio mūšio lauke?', 
                answers: [
                {
                    isRight: false,
                    content: "a. Jogaila"
                },
                {
                    isRight: true,
                    content: "b. Vytautas"
                },
    
                {
                    isRight: false,
                    content: "c. Mindaugas"
                }]
            },
            {
                id: 2,
                question: 'Kiek karių kovėsi Žalgirio mūšyje?',
                answers: [
                {
                    isRight: true,
                    content: "a. Lenkijos-Lietuvių apie 39 tūkst., Kryžiuočių apie 27 tūkst "
                },
                {
                    isRight: false,
                    content: "b. Lenkijos-Lietuvių apie 60 tūkst., Kryžiuočių apie 20 tūkst"
                },
                {
                    isRight: false,
                    content: "c. Lenkijos-Lietuvių apie 35 tūkst., Kryžiuočių apie 40 tūkst"
                }
            ]},
            {
                id: 3,
                question: 'Kur 1910 m. Buvo pastatytas paminklas Žalgiriui ?',  
                answers: [
                {
                    isRight: false,
                    content: "a. Varšuvoje"
                },
                {
                    isRight: false,
                    content: "b. Griunvalde"
                },
                {
                    isRight: true,
                    content: "c. Krokuvoje"
                }
            ]},
            {
                id: 4, 
                question: 'Kada vyko Žalgirio mūšis?',
                answers: [
                {
                    isRight: true,
                    content: "a. 1410 m. Liepos 15 d."
                },
                {
                    isRight: false,
                    content: "b. 1420 m. Liepos 15 d."
                },
                {
                    isRight: false,
                    content: "c. 1440 m. Liepos 15 d."
                }
            ]},
            {
                id: 5, 
                question: 'Ar tiesa, kad Lenkų-Lietuvių kariuomenė turėjo pranašumą ginklais ir šarvais?', 
                answers: [
                {
                    isRight: false,
                    content: "a. Tiesa"
                },
                {
                    isRight: true,
                    content: "b. Netiesa"
                }
            ]},
            {
                id: 6, 
                question: 'Kur vyko Žalgirio mūšis?', 
                answers: [
                {
                    isRight: false,
                    content: "a. Netoli Brombergo"
                },
                {
                    isRight: false,
                    content: "b. Netoli Marienburgo ir Tanenbergo "
                },
                {
                    isRight: true,
                    content: "c. Netoli Tanenbergo ir Griunvaldo "
                }
            ]},
            {
                id: 7,
                question: 'Kiek laiko vyko Žalgirio mūšis?', 
                answers: [
                {
                    isRight: false,
                    content: "a. 1 parą"
                },
                {
                    isRight: true,
                    content: "b. Nuo 11 val iki vakaro"
                },
                {
                    isRight: false,
                    content: "c. Nuo 12 val iki ryto"
                }
            ]},
            {
                id: 8,
                question: 'Ar Lietuva ir Lenkija sudarė paliaubas su kryžiuočiais?', 
                answers: [
                {
                    isRight: true,
                    content: "a. Taip"
                },
                {
                    isRight: false,
                    content: "b. Ne"
                }
            ]},
            {
                id: 9, 
                question: 'Koks buvo Kryžiuočių  ordino ženklas?', 
                answers: [
                {
                    isRight: false,
                    content: "a. Ant juodo apsiausto išsiuvinėtas baltas kryžius"
                },
                {
                    isRight: true,
                    content: "b. Ant balto apsiausto išsiuvinėtas juodas kryžius"
                },
                {
                    isRight: false,
                    content: "c. Ant balto apsiausto išsiuvinėtas juodas tuščiaviduris kryžius"
                }
            ]},
            {
                id: 10, 
                question: 'Kokia taktika Lietuviai ir Lenkai iškovojo pergalę?', 
                answers: [
                {
                    isRight: false,
                    content: "a. Įveikus visus Križiuočių karius"
                },
                {
                    isRight: false,
                    content: "b. Įveikus dalį Križiuočių karių ir likusius paėmus į nelaisvę"
                },
                {
                    isRight: true,
                    content: "c. Atsitraukdami ir po to puldami "
                }
            ]}
        ]
    }
}
class QuizesController extends Questions 
{
    getQuestions(req, res, next)
    {
        const questions = this._questionsList()
        return res.json(questions)
    }

    findQuestion(req, res, next) 
    {
        const questionId = parseInt(req.params.questionId) || 0
        const questions = this._questionsList()
        const amount = questions.length
        let result = {}
        for (let i = 0; i < amount; i++) 
        {
            let question = questions[i]
            if (question.id == questionId) 
            {
                result = question
                break
            }
        }
        console.log(result)
        return res.json(result)
    }
}


module.exports = QuizesController

/*
attacks:{
    1:{
      id:1,
      basedmg:10,
      basedf:5,
      forest:true,
      fields:true,
      river:false
    },
    2:{
      id:2,
      basedmg:5,
      basedf:10,
      forest:true,
      fields:true,
      river:false
    },
    3:{
      id:3,
      basedmg:20,
      basedf:0,
      forest:false,
      fields:true,
      river:true
    },
    4:{
      id:4,
      basedmg:15,
      basedf:10,
      forest:true,
      fields:true,
      river:true
    },
    5:{
      id:5,
      basedmg:20,
      basedf:20,
      forest:false,
      fields:true,
      river:false
    }
  }
  */