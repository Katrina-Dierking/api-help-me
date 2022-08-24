const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000

app.use(cors())

let household = [
{
        'id': 1,
        'name': 'Mom', 
        'fullName' : 'Katrina Dierking', 
        'birthday' : '09/22/1973', 
        'path' : 'https://blog.hertimetocode.com/wp-content/uploads/2022/08/MomAvatar-2.png',
        'gender' : 'female', 
        'surgeries':
            [
                {
                    'date': 2005, 
                    'description':'cardiac cath after pulmonary embolism and MI. No stends required',
                    'complications': 'none'
                }, 
                {
                    'date': 2012, 
                    'description':'c-section at 27 weeks',
                    'complications':'none'
                }, 
                {
                    'date': 2018, 
                    'description':'gallbladder removed',
                    'complications': 'none'
                }, 
                {
                    'date': 2019, 
                    'description':'ectopic pregnancy. Tube removed',
                    'complications': 'air embolism during surgery. Coded for 3 minutes before revived'
                }
            ],
        'medications': 'daily baby aspirin', 
        'recreational drugs': 'none',
        'alcohol intake': 'none',
        'tobacco': 'never',
        'medical history': [
            'Lupus', 
            'pre-diabetic', 
            'multiple miscarriages', 
            'multiple blood clots'
        ], 
        'locations': [
            {
                'id': 1, 
                'title': 'home', 
                'address': '2834 Mallard Cove Rd Sanford NC',
                'image': 'https://blog.hertimetocode.com/wp-content/uploads/2022/08/homeIcon.png'
            }, 
            {
                'id': 2, 
                'title': 'church', 
                'address': 'union pines church road',
                'image': 'https://blog.hertimetocode.com/wp-content/uploads/2022/08/churchIcon.png'
            }
        ], 
        'medical emergency': [
            'unresponsive with no pulse', 
            'unresponsive choking', 
            'responsive choking'
        ]
    }, 

    {
        'id': 2,
        'name': 'Colby', 
        'fullName' : 'Colby Wampler', 
        'birthday' : '05/20/1999', 
        'path' : 'https://blog.hertimetocode.com/wp-content/uploads/2022/08/ColbyAvatar-2.png',
        'gender' : 'male', 
        'surgeries':
            [
                {
                    'date': 'n/a', 
                    'description':'none',
                    'complications': 'none'
                }, 
            ],
        'medications': 'n/a', 
        'recreational drugs': 'none',
        'alcohol intake': '2-3/week',
        'tobacco': 'never',
        'medical history': "uneventful", 
        'locations': [
            {
                'id': 1, 
                'title': 'home', 
                'address': '2834 Mallard Cove Rd Sanford NC',
                'image': 'https://blog.hertimetocode.com/wp-content/uploads/2022/08/homeIcon.png'
            }, 
            {
                'id': 2, 
                'title': 'church', 
                'address': 'union pines church road',
                'image': 'https://blog.hertimetocode.com/wp-content/uploads/2022/08/churchIcon.png'
            }
        ], 
        'medical emergency': [
            'unresponsive with no pulse', 
            'unresponsive choking', 
            'responsive choking'
        ]
    }, 

    {
        'id': 3,
        'name': 'Channing', 
        'fullName' : 'Channing Dierking', 
        'birthday' : '05/28/2012', 
        'path' : 'https://blog.hertimetocode.com/wp-content/uploads/2022/08/ChanningAvatar.png',
        'gender' : 'female', 
        'surgeries':
            [
                {
                    'date': 'n/a', 
                    'description':'none',
                    'complications': 'none'
                }, 
            ],
        'medications': 'n/a', 
        'recreational drugs': 'n/a',
        'alcohol intake': 'n/a',
        'tobacco': 'never',
        'medical history': "born at 27 weeks", 
        'locations': [
            {
                'id': 1, 
                'title': 'home', 
                'address': '2834 Mallard Cove Rd Sanford NC',
                'image': 'https://blog.hertimetocode.com/wp-content/uploads/2022/08/homeIcon.png'
            }, 
            {
                'id': 2, 
                'title': 'church', 
                'address': 'union pines church road',
                'image': 'https://blog.hertimetocode.com/wp-content/uploads/2022/08/churchIcon.png'
            }
        ], 
        'medical emergency': [
            'unresponsive with no pulse', 
            'unresponsive choking', 
            'responsive choking'
        ]
    }, 

    {
        'id': 4,
        'name': 'Dylan', 
        'fullName' : 'Dylan Wampler', 
        'birthday' : '11/25/2019', 
        'path' : 'https://blog.hertimetocode.com/wp-content/uploads/2022/08/DylanAvatar.png',
        'gender' : 'male', 
        'surgeries':
            [
                {
                    'date': 'n/a', 
                    'description':'none',
                    'complications': 'none'
                }, 
            ],
        'medications': 'n/a', 
        'recreational drugs': 'n/a',
        'alcohol intake': 'n/a',
        'tobacco': 'never',
        'medical history': 'non-eventful', 
        'locations': [
            {
                'id': 1, 
                'title': 'home', 
                'address': '2834 Mallard Cove Rd Sanford NC',
                'image': 'https://blog.hertimetocode.com/wp-content/uploads/2022/08/homeIcon.png'
            }, 
            {
                'id': 2, 
                'title': 'church', 
                'address': 'union pines church road',
                'image': 'https://blog.hertimetocode.com/wp-content/uploads/2022/08/churchIcon.png'
            }
        ], 
        'medical emergency': [
            'unresponsive with no pulse', 
            'unresponsive choking', 
            'responsive choking'
        ]
    }, 


    




]

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/household', (request, response) => {
    console.log(household)
    if(household) {
        response.json(household)
    }
})

app.get('/api/household/:member', (request, response) => {
    const member = request.params.member.toLocaleLowerCase()
    console.log(member)
    if(household[member]) {
        response.json(household[member])
    }
})
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on ${PORT}`)
})