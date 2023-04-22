import './CommonBanner.css'

export default function CommonBanner({pageTitle, bannerType, srcs}){

    console.log('servicesbANNER')
    console.log(srcs)
    console.log(bannerType)

    return(
        <section className={`banner-${bannerType} banner-c`}>
            {bannerType === 'services' ? (
                <div className={`banner-${bannerType}-pics`}>
                    {srcs.map(({cover, id}) =>(
                    
                        <img key={id} src={cover} alt="" />
                        
                    ))}
                </div>
            ): null}
            <div className='banner-c-text'>
                <h3 className='text-light'>{pageTitle}</h3>
            </div>
        </section>
    )
}