import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import reportWebVitals from './reportWebVitals';
import {
  IdcardOutlined,
  DeploymentUnitOutlined,
  MonitorOutlined,
  ToolOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (    
      <Layout>
        <Header>
          <Menu theme='dark' >
            <div style={{textAlign:"center", color:"white"}}> Portfolio </div>
          </Menu>
        </Header>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="about" icon={<IdcardOutlined />}> Qui suis-je ? </Menu.Item>
              <SubMenu key="ppe" icon={<DeploymentUnitOutlined />} title="PPE">
                <Menu.Item key="ppe1"> PPE1 </Menu.Item>
                <Menu.Item key="ppe2"> PPE2 </Menu.Item>
                <Menu.Item key="ppe3"> PPE3 </Menu.Item>
              </SubMenu>
              <SubMenu key="veille" icon={<MonitorOutlined />} title="Veille">
                <Menu.Item key="vtechno"> Technologique </Menu.Item>
                <Menu.Item key="vjuri"> Juridique </Menu.Item>
              </SubMenu>
              <Menu.Item key="skill" icon={<ToolOutlined />}> Compétences </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>Crée à l'aide de Ant Design</Footer>
      </Layout>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById('container'));

reportWebVitals();
