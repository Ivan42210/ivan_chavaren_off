

import './Banner.css'

export default function Banner({siteDatas}){

   console.log('banner')
   console.log(siteDatas)

   /*
   
            <div className="banner-caption">
                <img className="banner-logo" src={siteDatas.logo} alt="" />
                <h4 className="banner-introduction">{siteDatas.introduction}</h4>
            </div>
   
   */ 

    return(
        <section className="banner">
            <img className="banner-cover" src={siteDatas.BannerSrc} alt="" />

        </section>
    )


}

