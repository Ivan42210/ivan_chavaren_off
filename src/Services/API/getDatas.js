import axios from "axios";
import GeneralModel from '../../Models/GeneralModel'


const getServices = async(setSingle, serviceId) => {
    try {
        const response = await axios.get(`http://localhost:1337/api/services/${serviceId}`)
        const data = response.data.data
        return setSingle(data)

    } catch (error) {
        return error
    }
}

const getCategoryServices = async(setServices) => {
    try {
        const response = await axios.get("http://localhost:1337/api/services?populate=*")
        const data = response.data.data;
        return setServices(data)
    } catch (error) {
        return error
    }
}

const getGeneral = async(setGeneral) => {
    try {
        const response = await axios.get('http://localhost:1337/api/general?populate=*')
        const data = response.data
        const modelize = new GeneralModel(data)

        return setGeneral(modelize)
    } catch (error) {
        return error
    }
}

export { getServices, getCategoryServices, getGeneral }