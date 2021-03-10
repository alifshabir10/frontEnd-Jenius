import axios from 'axios';
import apiURL from '../../config/config-url';

const listcont = async () => {
    try {
        // console.log(apiURL)
        let response = await axios.get(`${apiURL}`)
        return await response.data
        
    }
    catch (err) {
        return await err.message
    }
};
const deleteCont = async (id) => {
    try {
        let response = await axios.delete(`${apiURL}/${id}`)
        return await response.data        
    }
    catch (err) {
        return await err.message
    }
};

const createCont = async (contact) => {
    try {
        let response = await axios.post(`${apiURL}/`,{
            data : contact
        })
        return await response.data
    } catch(err ) {
        return await err.message
    }
}

const updateCont = async (contact) => {
    try {
        let response = await axios.put(`${apiURL}/${contact.id}`,{
            data : contact
        })
        return await response.data 
    } catch(err) {
        return await err.message
    }
}
export { listcont, deleteCont, createCont,updateCont}