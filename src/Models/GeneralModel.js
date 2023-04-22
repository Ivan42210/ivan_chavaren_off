export default class GeneralModel {
    constructor(data) {
        //this.attributes = data.data.attributes data.data.attributes.logo.data[0].attributes.url
        this.id = data.data.id
        this.site = data.data.attributes.site
        this.logo = `http://localhost:1337${data.data.attributes.logo.data[0].attributes.url}`
        this.BannerSrc = `http://localhost:1337${data.data.attributes.banner.data[0].attributes.url}
        `
        this.introduction = data.data.attributes.introduction





    }
}