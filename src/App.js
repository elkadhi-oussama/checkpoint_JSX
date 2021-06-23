
import myvideo from './vid/myvideo.mp4'

function App() {
  return (
    <div className='container' style={{border:'solid 1px black',maxWidth:'100vw',margin:'10rem',padding:'50px'}}>
      <div >
        <h1 className="title red" style={{color:"Tomato"}}>FSOCIETY</h1>
        <img className="img-fluid" src="/imgs/01.png" alt = 'img1' width="920" height="480"/>
        <img  className="img-fluid" src="/imgs/02.jpg" alt ='img 2' width="920" height="480"/>
      </div>
          <video width="920" height="480" controls>
          <source src={myvideo} type="video/mp4" />
          </video>
    </div>
);
}
 export default App;
