import React from 'react';
import ReactDOM from 'react-dom';
import { db,auth,fire } from "../../../firebase"
import 'antd/dist/antd.css';
import { PageHeader, Tabs, Button, Statistic, Descriptions } from 'antd';
import { withRouter } from 'react-router-dom';

const { TabPane } = Tabs;




const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
    <Descriptions.Item label="Association">
    </Descriptions.Item>
    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="Remarks">
      Practicas Chamanicas Web
    </Descriptions.Item>
  </Descriptions>
);

const extraContent = (
  <div
    style={{
      display: 'flex',
      width: 'max-content',
      justifyContent: 'flex-end',
    }}
  >
    <Statistic
      title="Status"
      value="Pending"
      style={{
        marginRight: 32,
      }}
    />
    <Statistic title="Price" prefix="$" value={568.08}  style={{
        marginRight: 32,
      }} />
    <Statistic title="Price" prefix="$" value={568.08}  style={{
        marginRight: 32,
      }} />

  </div>
);

const Content = ({ children, extra }) => {
  return (
    <div className="content">
      <div className="main">{children}</div>
      <div className="extra">{extra}</div>
    </div>
  );
};

const Header = (props) => {

    const logout = () => {

        fire.auth().signOut().then(function() {
                       
            props.history.push('/')
                                         
        }).catch(function(error) {
          
          
        });
    
    
    }



    return (

        <div>
        <PageHeader
          className="site-page-header-responsive"
          onBack={() => window.history.back()}
          title="Peter App"
          subTitle="Beta"
          extra={[
            <Button onClick={logout} key="1" type="primary">
             Logout
            </Button>,
          ]}
          footer={
            <Tabs defaultActiveKey="1">
              <TabPane tab="Details" key="1" />
              <TabPane tab="Rule" key="2" />
            </Tabs>
          }
        >
          <Content extra={extraContent}>{renderContent()}</Content>
        </PageHeader>
      </div>)
}
 
export default withRouter(Header)