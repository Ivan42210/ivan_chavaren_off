import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home'


import Header from '../Header';
import { useEffect, useState } from 'react';
import {  getGeneral, getCategoryServices } from '../../Services/API/getDatas';
import BlogArchive from '../../Pages/Archive';
import CheckDatas from '../../Utils/checkDatas';
import ServicePage from '../../Pages/Services';


export default function Layout(){

    const[siteDatas, setSite] = useState([])
   const[categoriesDatas, setCategories]=useState([])

    useEffect(()=>{
        const fetchData = async() =>{
            getGeneral(setSite)
           getCategoryServices(setCategories)
        }

        fetchData()
    },[])
   // console.log('site')
  //console.log(siteDatas)
   // console.log('catégories')
    //console.log(categoriesDatas)
    
    /*          < Router>
        <Header data={SiteDatas}/>
        <Routes>
          
          <Route path='/blog/:name' element={<BlogSingle/>}/>
        </Routes>
      
    </Router> */

    return(
        <>
          < Router>
            <CheckDatas />
                <Header data={siteDatas}/>
                <Routes>
                    <Route exact path='/' element={<Home siteDatas={siteDatas} servicesData={categoriesDatas}/>}/>
                    <Route path='/services' element={<ServicePage datas={categoriesDatas}/>}/>
                    <Route path='/blog' element={<BlogArchive/>}/>
                </Routes>
                </Router>
        </>
    )
}