import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Button } from 'antd';
import reportWebVitals from './reportWebVitals';
import {
  IdcardOutlined,
  DeploymentUnitOutlined,
  MonitorOutlined,
  ToolOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (    
      <Layout>
        <Header>
          <Menu theme='dark' >
            <div style={{textAlign:"center", color:"white", fontWeight:'bolder'}}> Portfolio </div>
          </Menu>
        </Header>
        <Layout>
          <Sider>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Menu theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" inlineCollapsed={this.state.collapsed}>
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
          <Content style={{ margin: '0 0px' }}>
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
