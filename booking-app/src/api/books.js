import axios from 'axios';

function getAllBooks(){
    return axios.get('http://localhost:8080/')
    .then(function (response) {
        return(response.data);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
}

export default getAllBooks;
export const name = 'Books';