import './App.css';
import Header from './components/header/header';
import OrderPage from './screen/orderSecreen/orderPage';
import Tap from './components/tap/tap';
function App() {
  return (
    <div className="App">
      <Header/>
      <Tap/>
      <OrderPage/>
    </div>
  );
}

export default App;
