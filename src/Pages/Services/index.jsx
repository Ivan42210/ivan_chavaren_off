import CommonBanner from "../../Components/CommonBanner"



export default function ServicePage({datas}){
    

    const srcArray = datas.map(({ id,cover}) =>(
        {
            cover: cover,
            id: id
        }
    ))
    

 
    return(
        <section>
            <CommonBanner pageTitle={'Services'} srcs={srcArray} bannerType={'services'}/>

        
        </section>
    )
}