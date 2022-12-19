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
            {
                id: 4,
                title: 'Программирование',
                score: 0
            },        
            {
                id: 5,
                title: 'Мульты 2000-2010',
                score: 0
            },
        ]
    },
    supertopics: [
        {
            id: 0,
            title: '',
            topics: []
        }
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