import './App.css';
import {pics, pics2, pics3, pics4, pics5} from "./data";
import {Category1} from "./components/category.jsx";
import {Category2} from "./components/category.jsx";
import {Category3} from "./components/category.jsx";
import {Footer} from './components/Footer/Footer';
import {Navbar2} from "./components/Navbar/Navbar2";



function App() {
  
 

  return (

    
    
  
  <div className="App">
  
  <Navbar2 />

 
      <div className='head1'>
        <h1>About Freshly</h1>
      </div> <br /> <br />

      <div className='head2'>
        <h1>Heat-and-eat in 3 minutes or less</h1>
      </div>
      <div className='para'>
        <p>See just how easy it is to prepare a chef-cooked Freshly meal</p>
      </div>
      <img src={require('./images/vid.png')} height={500} width={950} /> <br /> <br /> <br /> <br />

      <div className='head2'>
        <h1>Our Food Philosophy</h1>
      </div>
      <div className='para'>
        <p>Our meals aren’t just ready in minutes... or just delicious... or just nutritious. They’re all three.</p>
      </div>
        <div className='pics'>
      {pics.map(el => <Category1 image={el.image} label={el.title} label2={el.subtitle} />)}
    
     </div>
     <div><button><h3>Learn More</h3></button></div> 

     <div className='pics2'>
      {pics2.map(el => <Category2 image={el.image} title={el.title} label1={el.subtitle1} label2={el.subtitle2} link={el.learnmore} />)}
      
    
     </div>  <br /> <br />

     <div className='banner'>
       <img height="270px" width="100%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1296df66804c2d4aaf1e4_22_About_SeePlansMenu_1440x300_desktop.jpg" alt="bannerimg" />
       <button className='btn'>See Our Plans & Menu</button>
     </div> <br /> <br />

     <div className='head2'>
        <h1>How Freshly Works</h1>
      </div>
      <div className='para'>
        <p>We’re always hard at work making the Freshly experience easier for our customers.</p>
      </div>

    <div className="pics3">
      {pics3.map(el => <Category3 image={el.image} title={el.title} />)}

    </div>
    <div><button><h3>Learn More</h3></button></div>

    <div className='pics2'>
      {pics4.map(el => <Category2 image={el.image} title={el.title} label1={el.subtitle1} label2={el.subtitle2} link={el.learnmore} />)}
      
    
     </div>  <br /> <br />

     <div className='head2'>
        <h1>Why Choose Freshly?</h1>
      </div>
      <div className='para'>
        <p>When it comes to meal-time, you’ve got a lot of options. Some offer convenience, <br />
        some offer nutrition, and some offer the foods you crave. We offer all three.</p>
      </div>

      <div className="pics3">
      {pics5.map(el => <Category3 image={el.image} title={el.title} />)}

</div>
             <div><button><h3>Learn More</h3></button></div>

             <div className="lastName">
             <div className='headend'>
        <h1>Ready to live Freshly?</h1>
        
        </div> 
        <div><button><h3>Get Started</h3></button></div>
             </div> <br />  
             <Footer />


   


   
      </div>
     
     
  );
}



export default App;
