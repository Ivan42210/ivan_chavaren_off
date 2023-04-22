import axios from "axios";
import GeneralModel from '../../Models/GeneralModel'
import { formatCategories } from "../Formatter/formatDatas";
import { url } from "./getSource";


const getServices = async(setSingle, serviceId) => {
    try {
        const response = await axios.get(`${url}/api/services/${serviceId}`)
        const data = response.data.data
        return setSingle(data)

    } catch (error) {
        return error
    }
}

const getCategoryServices = async(setServices) => {
    try {
        const response = await axios.get(`${url}/api/services?populate=*`)
        const data = response.data.data;
        console.log()
        const formatData = formatCategories(data);
        return setServices(formatData)
    } catch (error) {
        return error
    }
}

const getGeneral = async(setGeneral) => {
    try {
        const response = await axios.get(`${url}/api/general?populate=*`)
        const data = response.data
        const modelize = new GeneralModel(data)
            //console.log('getGeneral')
            //console.log(modelize)
        return setGeneral(modelize)
    } catch (error) {
        return error
    }
}

const getBlog = async(setBlog) => {
    try {
        const response = await axios.get(`${url}/api/blogs?populate=*`)
        const data = response.data

        return setBlog(data)

    } catch (error) {
        return error
    }
}

export { getServices, getCategoryServices, getGeneral, getBlog }