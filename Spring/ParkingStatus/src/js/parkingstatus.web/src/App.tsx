
import './App.css';
import NavigationBar from './main_components/navigation_bar/NavigationBar';
import LotAccordion from './main_components/front_page/LotAccordion';
import ColorLegend from './main_components/front_page/ColorLegend';

//https://create-react-app.dev/docs/adding-typescript/
function App() {
  return (
    <>
      <NavigationBar />
      <LotAccordion />
      <ColorLegend /></>
  );
}

export default App;
