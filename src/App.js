
import './App.css';
import Menu from "./Menu";
import Carousel from "./Carousel";
import ArticleBox from "./ArticleBox";
import CommentBox from "./CommentBox";
import photoLeft from "./img/column-left.jpg";
import photoCenter from "./img/column-center.jpg";
import comments from "./app.json";



function App() {



  return (
    <div className="App">
      <Menu />
      <Carousel />

      
      <section className='bottomsection'>

      <ArticleBox header={'This Is Some Content'} img={photoLeft} text={'Far far away, behindt he word mountains, far from the countries Vokalia and Consonantia, ther live the blind texts. Separated they live in Bookmarksrove right at the ocoast of the Semantics, a large language ocean. '}/>

      <ArticleBox header={'This Is Some Content'} img={photoCenter} text={<ul>
        <li>Sed lacinia et nisl viverra.</li>
        <li>Nullam elementum quam in luctus.</li>
        <li>Integer ac et lacus hendrerit pretium.</li>
        <li>Donec placerat dui et blandit</li>
        <li>Nullam elementum quam in luctus</li>
      </ul>}/>

      <CommentBox response={comments} />

      </section>
    

      <footer>
        <div className="copyright-container">
         © Copyright, All Rights Reserved.
        </div>
        <div className='footer-button-container'>
                <button className='footerbutton'>Home</button>
                <button className='footerbutton'>Uno</button>
                <button className='footerbutton'>Dos</button>
                <button className='footerbutton'>Tres</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
