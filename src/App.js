import Dashboard from './component/dashboard/Admin/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UdcHome from './component/front/UdcHome';
import Counter from './component/lib/Counter';
import Division from './component/front/Division';
import District from './component/front/Districtct';
import AdminDivision from './component/dashboard/Admin/division/AdminDivision';
import AdminDistrict from './component/dashboard/Admin/district/AdminDistrict';
import AdminUpazila from './component/dashboard/Admin/upazila/AdminUpazila';
import AdminUnion from './component/dashboard/Admin/union/AdminUnion';


function App() {
    return (
        <Router>
            <Switch>
                <Route path='/dashboard' exact>
                    <Dashboard />
                </Route>
                <Route path="/dashboard/division" exact>
                    <AdminDivision />
                </Route>
                <Route path="/dashboard/district" exact>
                    <AdminDistrict />
                </Route>
                <Route path="/dashboard/upazila" exact>
                    <AdminUpazila />
                </Route>
                <Route path="/dashboard/union" exact>
                    <AdminUnion />
                </Route>
                <Route path="/add-division">
                    
                </Route>
                <Route path='/' exact>
                    <Counter
                        render={(division, district) => (
                            <UdcHome division={division} district={district} />
                        )}
                    />
                </Route>
                <Route path="/divisions">
                    <Counter
                        render={(division, district) => (
                            <Division division={division} />
                        )}
                    />
                </Route>
                <Route path="/districts">
                    <Counter
                        render={(division, district) => (
                            <District district={district} />
                        )}
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
