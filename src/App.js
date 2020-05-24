import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter,Route, Switch, Link,withRouter } from 'react-router-dom'
import Admin from './shamanic/admin/contacts/contacts'
import Settings from './shamanic/admin/settings/settings'
import Login from './shamanic/components/login/login'
import store from './store'
import loading from "./shamanic/img/loading.gif"
import logo from "./shamanic/img/einstein.png"


import { CookiesProvider } from 'react-cookie';
import { fire} from './firebase'
import './shamanic/style.css'

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


const App = (props) => {

  const [active,setActive] = React.useState(false)

  React.useEffect(() => {


    fire.auth().onAuthStateChanged(function(user) {
       
        if (user) {
      
            setActive(true)

        } else {
            //props.history.push('/')
            setActive(false)
          
        }
      });
  
    },[props])

return (
  <BrowserRouter>
  <Provider store={store}>
    <Layout>
   {

    active ? (<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1"> <p>Peter App</p></Menu.Item>
      <Menu.Item key="1"><Link to="/admin" exact>Contacts</Link> </Menu.Item>
      <Menu.Item key="3"><Link to="/" exact>Logout</Link> </Menu.Item>
    </Menu>
  </Header>) : null 


   }
    

    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
     
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
    
         <CookiesProvider>
            <Switch>
                   <Route exact path="/" component={Login} />
                   <Route  path="/admin" component={Admin} />
                   <Route  path="/settings" component={Settings} />
            </Switch>
            </CookiesProvider>
          

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Peter </Footer>
  </Layout>
  </Provider>
        </BrowserRouter>
)

}

export default withRouter(App)



