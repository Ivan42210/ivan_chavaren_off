export default class GeneralModel {
    constructor(data) {
        //this.attributes = data.data.attributes
        this.id = data.data.id
        this.site = data.data.attributes.site
        this.logo = data.data.attributes.logo.data[0].attributes.url
        this.BannerSrc = data.data.attributes.banner.data[0].attributes.url
        this.introduction = data.data.attributes.introduction





    }
}