const axios = require('axios').default;

const postRequest1 = async () => {

    try {

        const resp = await axios.post('http://localhost:3000/books', {
            ID: 1, name: 'Book 1', author: 'Author 1',
        });

        console.log(resp.data);

    } catch (err) {

        console.log(err.response.data);

    }

}

const postRequest2 = async () => {

    try {

        const resp = await axios.post('http://localhost:3000/books', {
            ID: 2, name: 'Book 2', author: 'Author 2',
        });

        console.log(resp.data);

    } catch (err) {

        console.log(err.response.data);

    }

}

const postRequest3 = async () => {

    try {

        const resp = await axios.post('http://localhost:3000/books', {
            ID: 3, name: 'Book 3', author: 'Author 3',
        });

        console.log(resp.data);

    } catch (err) {

        console.log(err.response.data);

    }

}

const getRequest1 = async () => {

    try {

        const resp = await axios.get('http://localhost:3000/books');

        await axios.get('http://localhost:3000/books/' + response.data.ID);

        console.log(response.data);

    } catch (err) {

        console.log(err.response.data);

    }

};

const getRequest2 = async () => {

    try {

        const resp = await axios.get('http://localhost:3000/log');

        console.log("\nTotal de requests: " + response.data);

    } catch (err) {

        console.log(err.response.data);

    }

};