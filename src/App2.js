import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Admin from './shamanic/admin/contacts/contacts'
import Settings from './shamanic/admin/settings/settings'
import Login from './shamanic/components/login/login'
import store from './store'
import { withRouter } from "react-router-dom"
import loading from "./shamanic/img/loading.gif"
import { CookiesProvider } from 'react-cookie';
import firebaseUser from './shamanic/admin/auth/auth'

//2215269076d9e1c7e9d7431d14a8086062fb1c1c

function App (props)  {
  
      return firebaseUser !== false ? (  <BrowserRouter>
         <Provider store={store}>
         <CookiesProvider>
            <Switch>
                   <Route exact path="/" component={Login} />
                   <Route  path="/admin" component={Admin} />
                   <Route  path="/settings" component={Settings} />
            </Switch>
            </CookiesProvider>
            </Provider>
        </BrowserRouter>
        
      ) : ( 
        <div className="container-fluid">
        <p className="text-center"><img src={loading} alt="loading" /></p> 
        </div>)
}

export default withRouter(App)