/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';


const initialState = {
    username: '',
    totalScore: 0,
    questionData:
    // Need to add value for player answers to each card object
        [
            {   
                name: "School Mottos",
                clues: [
                    {
                        clue: "Many schools use this motto from genesis, gods first spoken command",
                        answer: "Let there be light",
                        state: "fresh",
                        value: 100
                    },
                    {
                        clue: "Many schools use this motto from genesis, gods first spoken command",
                        answer: "Let there be light",
                        state: "fresh",
                        value: 200
                    }, {
                        clue: "Many schools use this motto from genesis, gods first spoken command",
                        answer: "Let there be light",
                        state: "fresh",
                        value: 300
                    }, {
                        clue: "Many schools use this motto from genesis, gods first spoken command",
                        answer: "Let there be light",
                        state: "fresh",
                        value: 400
                    }, {
                        clue: "Many schools use this motto from genesis, gods first spoken command",
                        answer: "Let there be light",
                        state: "fresh",
                        value: 500
                    },
                ]
            },
            {
                name: "Brazillian",
                clues: [
                    {
                        clue: "The University of Brazil, the country's oldest, wasn't founded until this century",
                        answer: "20th century",
                        state: "fresh",
                        value: 100
                    },
                    {
                        clue: "The layout of this, the capital, resembles a jet airliner",
                        answer: "brasillia",
                        state: "fresh",
                        value: 200
                    }, {
                        clue: "1985 film set in Brazil that featured the fierce people, the invisible people, & the bat people",
                        answer: "The Emerald Forest",
                        state: "fresh",
                        value: 300
                    }, {
                        clue: "This democratic privilege is compulsory for all Brazilians who are literate & between the ages of 18 & 65",
                        answer: "Voting",
                        state: "fresh",
                        value: 400
                    }, {
                        clue: "It got its name after a Spanish explorer reported being attacked by female warriors there",
                        answer: "Amazon River",
                        state: "fresh",
                        value: 500
                    },
                ]
            },
            {
                name: "eddie murphy movies",
                clues: [
                    {
                        clue: "Art Buchwald was awarded original story credit for this film in which Eddie played an African prince",
                        answer: "Coming to America",
                        state: "fresh",
                        value: 100
                    },
                    {
                        clue: "Axel Foley was a cop on this midwestern city's payroll",
                        answer: "Detroit",
                        state: "fresh",
                        value: 200
                    }, {
                        clue: "1990 sequel to his 1982 \"48HRS",
                        answer: "Another 48hours",
                        state: "fresh",
                        value: 300
                    }, {
                        clue: "He played the man with whom Eddie Murphy traded places in \"Trading Places\"",
                        answer: "Dan Ackroy",
                        state: "fresh",
                        value: 400
                    }, {
                        clue: "Who did eddie play in the barber shop in coming to ameria",
                        answer: "Everyone",
                        state: "fresh",
                        value: 500
                    },
                ]
            },
            {
                name: "Stock Clues",
                clues: [
                    {
                        clue: "Helllo World....I'm getting lazy",
                        answer: "Helllo World....I'm getting lazy",
                        state: "fresh",
                        value: 100
                    },
                    {
                        clue: "Helllo World....I'm getting lazy",
                        answer: "Helllo World....I'm getting lazy",
                        state: "fresh",
                        value: 200
                    }, {
                        clue: "Helllo World....I'm getting lazy",
                        answer: "Helllo World....I'm getting lazy",
                        state: "fresh",
                        value: 300
                    }, {
                        clue: "Helllo World....I'm getting lazy",
                        answer: "Helllo World....I'm getting lazy",
                        state: "fresh",
                        value: 400
                    }, {
                        clue: "Helllo World....I'm getting lazy",
                        answer: "Helllo World....I'm getting lazy",
                        state: "fresh",
                        value: 500
                    },
                ]
            },

        ]
}


const triviaReducer = (state = initialState, action) => {


    switch (action.types) {
        case types.FLIP_CARD:

            return state;

        default:
            return state;

    }
};

export default triviaReducer;