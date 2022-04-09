const supertest = require('supertest');
const app = require('../app');
//const { server } = require('../bin/www');

// afterAll(() => {
//     server.close()
// })

const api = supertest(app)

describe('GET  =>  /games', () => {

    test('It should respond with a JSON', async () => { 
        await api
            .get('/games')
            .expect('Content-Type', /application\/json/)
    });

    test('It should respond with a 200 status code', async () => { 
        await api
            .get('/games')
            .expect(200)
    });

})

describe('GET  =>  /games/id', () => {

    test('It should respond with a JSON', async () => { 
        await api
            .get('/games/5')
            .expect('Content-Type', /application\/json/)
    });

    test('It should respond with a 200 status code', async () => { 
        await api
            .get('/games/10')
            .expect(200)
    });


})

// describe('POST  =>  /games', () => {

//     test('It should respond with a JSON', async () => { 
//         await api
//             .post('/games').send()
//             .expect('Content-Type', /application\/json/)
//     });

//     test('It should respond with a 200 status code', async () => { 
//         await api
//             .post('/games')
//             .expect(200)
//     });

      
// })

