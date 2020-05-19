let Question = require("../models/questions.model");

    exports.getQuestions= async(req, res, next)=>{
            const questions = await Question.find();
            return res.json(questions)
    };

let Attack = require("../models/attacks.model");

    exports.getAttacks= async(req, res, next)=>{
            const attacks = await Attack.find();
            return res.json(attacks)
    };

let About = require("../models/about.model");

    exports.getAbout= async(req, res, next)=>{
            const about = await About.find();
            return res.json(about)
    };

let Grunwald = require("../models/grunwald.model");

    exports.getGrunwald= async(req, res, next)=>{
            const grunwald = await Grunwald.find();
            return res.json(grunwald)
    };


