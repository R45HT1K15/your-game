export const initialState = {
    profile: {
        id: 0,
        name: '',
        rating: [
            {
                id: 1,
                title: 'Гарри Поттер',
                score: 4800
            },
            {
                id: 2,
                title: 'Игры на комп',
                score: 0
            },        
            {
                id: 3,
                title: 'Солянка',
                score: -200
            },        
        ]
    },
    supertopics: [
        {
            id: 1,
            title: 'Гарри Поттер'
        },
        {
            id: 2,
            title: 'Игры на комп'
        },        
        {
            id: 3,
            title: 'Солянка'
        },        
    ],
    topics: [
        {
            tema_id: 1,
            question:'abcd',
            answer: 'abcd',
        },
        {
            tema_id: 1,
            question:'abcdwww',
            answer: 'abcd',
        },
        {
            tema_id: 1,
            question:'abcddd',
            answer: 'abcd',
        },
        {
            tema_id: 1,
            question:'abcddddd',
            answer: 'abcd',
        },
        {
            tema_id: 1,
            question:'abcdddd',
            answer: 'abcd',
        },
        {
            tema_id: 1,
            question:'abcdaaa',
            answer: 'abcd',
        },
    ],
    overallRating: [
        {
            user: 'Вася228',
            score: 8900
        },
        {
            user: 'Вася227',
            score: 8500
        },
        {
            user: 'Друг Васи',
            score: 5000
        },
    ]
}