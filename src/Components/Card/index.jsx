import './Card.css'
import { Link } from "react-router-dom";


export default function Card({id, name,description,thumbnail,url, type, author,date, background}){
    return(
        <section key={id} className={`${background} card`}>
            <Link className='card-link' to={`${url}`}>
            <img className="card-thumbnail" src={thumbnail} alt="" />
            <div className='card-body'>
                <h3 className="card-title text-light">{name}</h3>
                {type === 'blog' ? ( <><p className="card-description text-light">{description}</p>
                <div>
                    <p>{author}</p>
                    <p>{date}</p>
                </div></>) : null}
                {type === 'services-categories'? ( <div className='card-popper'>
                    <h3 className='popper-text'>En savoir plus</h3>
                </div> ) : null}
            </div>
           </Link> 
        </section>
    )
}