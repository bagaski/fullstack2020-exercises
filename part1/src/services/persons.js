import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const del = async (id) => {
    const { data } = await axios.delete(`${baseUrl}/${id}`);
    return data;
}

export default {
    getAll: getAll,
    create: create,
    update: update,  
    delete: del   
}