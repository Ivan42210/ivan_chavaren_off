import Card from "../Card"
import './CardGallery.css'

export default function Cardgallery({data}){
    console.log('cardGallery')
    console.log(data)
    return(
        <section className="gallery">
            {data.map(({name, id, description, thumbnail}) =>(
                    <Card 
                    key={id}
                    name={name} 
                    description={description} 
                    thumbnail={thumbnail} 
                    background={'bg-primary'}
                    type={'service-categories'}
                    url={'/services'}/>
            ))}
        </section>
    )
}