import './App.css';
import Header from './components/Header';
import{BrowserRouter as Router,Route} from'react-router-dom'
import{Container} from 'react-bootstrap'
import Home from './components/Home';
import RestaurentDetails from'./components/RestaurentDetails';
function App() {
  return (
     <><Router>
      <main className="py-3">
      <Header />
        <Container>
       
          <Route exact path="/" component={Home} />
           <Route path="/restaurants/:id" component={RestaurentDetails} /> 
        </Container>

      </main>
    </Router>
    <div>
   
      </div></>
  );
}

export default App;
