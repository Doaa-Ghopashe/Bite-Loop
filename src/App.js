import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import HomePg from './Pages/HomePg';
import Footer from './Components/Footer';
import UploadedFile from './Components/UploadedFile';
import { Todo } from './ReactAPP';
function App() {
  return (
    <div className="App">
      {/* <Todo/> */}
      <Header/>
      <HomePg/>
      {/* <div className='container'>
      <UploadedFile/>
      </div> */}
      
      <Footer/>
    </div>
  );
}

export default App;
