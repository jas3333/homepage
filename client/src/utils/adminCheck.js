import axios from 'axios';

const adminCheck = async (user) => {
    console.log(user);
    try {
        const response = await axios.post('http://localhost:5012/api/v1/users/adminCheck', user.token);
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
};

export default adminCheck;
