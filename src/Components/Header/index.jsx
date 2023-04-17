import { Link } from "react-router-dom";


export default function Header({data}){

/* 
 <Link to={'/'}><h2>{data.site}</h2></Link>
 <Link to={'/services'}>Service</Link>
*/
   
 console.log(data)

    return(
       <nav className="navbar">
           <div className="navbar-header">
           <Link to={'/'}><h2>{data.site}</h2></Link>
 <Link to={'/services'}>Service</Link>

            </div>
            <section className="navbar-menu">
                
                
            </section>
        </nav>
    )
}