import { url } from "../API/getSource"

const formatCategories = (data) => {
    const formattedCategories = data.map((el) => ({
        id: el.id,
        name: el.attributes.Name,
        description: el.attributes.Description,
        cover: `${url}${el.attributes.cover.data.attributes.url}`,
        thumbnail: `${url}${el.attributes.thumbnail.data[0].attributes.url}`,
        tasks: el.attributes.tasks.data


    }))

    return formattedCategories
}



export { formatCategories }