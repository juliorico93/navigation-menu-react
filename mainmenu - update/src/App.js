import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';
class App extends Component {
    render() {
      return (
        <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Smart FHIR" scroll>
            <Navigation>
                <a href="#">Profile</a>
            </Navigation>
        </Header>
        <Drawer title="Navigation">
            <Navigation>
            <Link to="/Patients">Patients</Link>
                <a href="/">Messages</a>
                <Link to="/">Main Menu</Link>
                <a href="#">Supplies</a>
                <a href="#">Log Out</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
      )
    }
  }

export default App; 