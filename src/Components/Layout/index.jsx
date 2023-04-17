import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home'
//import ServicePage from '../../Pages/Services'
//import BlogSingle from '../../Pages/Blog';

import Header from '../Header';
import { useEffect, useState } from 'react';
import {  getGeneral } from '../../Services/API/getDatas';

export default function Layout(){

    const[siteDatas, setSite] = useState([])
   // const[categoriesDatas, setCategories]=useState([])

    useEffect(()=>{
        const fetchData = async() =>{
            getGeneral(setSite)
           // getCategoryServices(setCategories)getCategoryServices,
        }

        fetchData()
    },[])
    console.log('site')
 //   console.log(siteDatas)
   // console.log('catégories')
    //console.log(categoriesDatas)
    
    /*          < Router>
        <Header data={SiteDatas}/>
        <Routes>
          <Route path='/services' element={<ServicePage datas={categoriesDatas} />}/>
          <Route path='/blog/:name' element={<BlogSingle/>}/>
        </Routes>
      
    </Router> */

    return(
        <>
          < Router>
             <Header data={siteDatas}/>
             <Routes>
             <Route exact path='/' element={<Home siteDatas={siteDatas}/>}/>
             </Routes>
             </Router>
        </>
    )
}