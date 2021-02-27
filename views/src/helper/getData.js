import axios from 'axios';

export const getData=async(path)=>{
    try {
        const response = await axios.get(`${path}`)
        return response;
    } catch (err) {
        console.log(err)
    }
}

