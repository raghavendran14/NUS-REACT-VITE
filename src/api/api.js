
import axios from 'axios';
const api = "http://localhost:3001/users";


// Fetch all users
const getUsers = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.get(api);
            resolve(res.data)
        } catch (error) {
            reject(error)
        }
    })
};

export { getUsers }