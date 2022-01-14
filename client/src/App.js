import './App.css';
import ApplyCoupon from './components/ApplyCoupon.jsx'
import Coupons from './components/Coupons.jsx'
import AddCoupon from './components/AddCoupon.jsx'
import Home from './components/Home.jsx'
import Nav  from './components/Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
      <Switch>
        <Route path = "/" exact component = {Home} />
        <Route path = "/apply-coupon" exact component = {ApplyCoupon} />
        <Route path = "/coupons" exact component = {Coupons} />
        <Route path = "/add-coupon" exact component = {AddCoupon} />
      </Switch>
      </div>
    </Router>  
  );
}

export default App;
