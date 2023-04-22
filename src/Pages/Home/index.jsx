import Banner from '../../Components/Banner';
import Cardgallery from '../../Components/Cardgallery';
import './Home.css';

function Home({siteDatas, servicesData}) {

  

  //console.log('home')
 // console.log({siteDatas})
  return (
    <div className="App">
    <Banner  siteDatas={siteDatas}/>
    <section className='display_good'>
    <Cardgallery data={servicesData}/>
    </section>
    </div>
   
  );
}

export default Home;
