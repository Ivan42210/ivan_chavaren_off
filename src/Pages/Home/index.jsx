import Banner from '../../Components/Banner';
import './Home.css';

function Home({siteDatas}) {

  console.log(siteDatas)
  return (
    <div className="App">
    <Banner />
    </div>
  );
}

export default Home;
