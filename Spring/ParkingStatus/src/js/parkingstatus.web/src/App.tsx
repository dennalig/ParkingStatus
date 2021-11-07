import React from 'react';
import './App.css';
import NavigationBar from './main_components/navigation_bar/NavigationBar';
import LotAccordion from './main_components/front_page/LotAccordion';
import ColorLegend from './main_components/front_page/ColorLegend';

//https://create-react-app.dev/docs/adding-typescript/


class App extends React.Component{

  login_value: boolean = true;
  
  render(){
    return (
      <>
      
        <NavigationBar logged_in= {this.login_value}/>
        <LotAccordion />
        <ColorLegend /></>
    );
  }

}

export default App;
