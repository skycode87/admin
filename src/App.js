import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter,Route, Switch } from 'react-router-dom'

import Admin from './shamanic/admin/contacts/contacts'
import Settings from './shamanic/admin/settings/settings'
import Login from './shamanic/components/login/login'
import store from './store'
import { withRouter,Redirect } from "react-router-dom"

import { CookiesProvider } from 'react-cookie';
//2215269076d9e1c7e9d7431d14a8086062fb1c1c



const App = (props) => {
    

      return (  <BrowserRouter>
         <Provider store={store}>
         <CookiesProvider>
            <Switch>
          
                        <Route exact path="/" component={Admin} />
                        <Route  path="/admin" component={Admin} />
                        <Route  path="/settings" component={Settings} />
        
            </Switch>
            </CookiesProvider>
            </Provider>
        </BrowserRouter>
        
      )


}
export default withRouter(App)