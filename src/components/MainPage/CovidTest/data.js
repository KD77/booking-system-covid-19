export const data = [
    {
        id: 'Fevertmp',
        question: 'How high is your body temperature?',
        options: [
            'Below 38.0 degrees',
            '38.0 - 39.4 degrees',
            '39.5 degrees or above',

        ],
        scores: [0,4,10]
    },
    {
        id: 'cough',

        question: 'Have you recently started coughing?',
        options: [
            'No',
            'Yes. Coughs sometimes',
            'Yes. Coughs often',
            'Yes. Coughs almost all the time',

        ],

        scores: [0,1,3,7]
    },
    {
        id: 'breath',
        question: 'Have you recently had difficulty breathing?',
        options: [
            'No',
            'Yes, I get short of breath on light effort but not at rest',
            'Yes, I feel some shortness of breath at rest',
            'Yes, I feel real shortness of breath all the time',
        ],

        scores: [0,2,7,17]
    },{
        id: 'energy',
        question: 'How is your general energy?',
        options: [
            'As usual',
            'Is tired but able to be up',
            'Is mostly beridden but can be up for short moments',
            'can only lie to bed, but can handle the toilet',
            'Do not take me out of bed',
        ],

        scores: [1,3,4,7,10]
    },
    {
        id: 'contact',
        question: 'Have you had close contact with someone infected with coronavirus (covid-19)?',
        options: [
            'No',
            'Yes',
            'Do not know',


        ],
        scores: [0,2,1]
    },
    {
        id: 'disease',
        question: 'Do you have any of the following diseases with ongoing treatment?',
        options: [
            'Hypertension',
            'Cardiovascular disease (angina, heart failure, stroke)',
            'pulmonary Disease',
            'Cancer',
            'Diabetes with complications',
            'Chronic renal failure',
            'Neurological disease affecting the respiratory muscles',
            'Heavy obesity and obesity with BMI 40 and above',
            'Chronic liver disease',
            'None of the above',
        ],
        scores: [2,5,8,8,5,5,8,8,5,0]
    },    {
        id: 'immuneSystem',
        question: 'Have you compromised your immune system?',
        options: [
            'No',
            'Yes',
        ],
        scores: [0,15]
    },
    {
        id: 'age',
        question: 'How old are you',
        options: [
            'Under 60 years',
            '60-69 years',
            '70-79 years',
            '80 years or older',


        ],
        scores: [0,4,7,11]
    },

];