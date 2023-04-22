import './Header.css'
import { Link } from "react-router-dom";


export default function Header({data}){

/* 
 <Link to={'/'}><h2>{data.site}</h2></Link>
 <Link to={'/services'}>Service</Link>
*/
   


    return(
       <nav className="navbar">
           <div className="navbar-header">
           <Link className='text-light' to={'/'}><h2>{data.site}</h2></Link>
            </div>
            <section className="navbar-menu">
            <Link className="text-light" to={'/services'}>Services</Link>
            </section>
        </nav>
    )
}