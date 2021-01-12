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

const deletes = async (id, loc) => {
    const { data } = await axios.delete(`${baseUrl}/${loc}/${id}`);
    return data;
}

export default {
    getAll: getAll,
    create: create,
    update: update,  
    deletes: deletes     
}