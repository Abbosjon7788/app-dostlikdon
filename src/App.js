
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from './pages/Admin';
import {ToastContainer} from 'react-toastify';
import AdminNews from "./components/AdminNews";
import AdminMenus from "./components/AdminMenus";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div>
        <BrowserRouter>

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/category/:url' component={CategoryPage}/>
                <Route exact path='/login' component={Login}/>
                <PrivateRoute exact path='/admin' component={Admin}/>
                <PrivateRoute exact path='/admin/news' component={AdminNews}/>
                <PrivateRoute exact path='/admin/menus' component={AdminMenus}/>

                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
        <ToastContainer/>

    </div>
  );
}

export default App;
