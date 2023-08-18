import './App.css';
import {Header, Service, Experience, Contact} from "./containers"
import { Divider, SecTitleLeft, SecTitleCenter } from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <Divider/>
      <SecTitleLeft title="My services" subTitle="What I Do"/>
      <Service/>
      <Divider/>
      <SecTitleCenter title="3 Years of experience" subTitle="Where I worked"/>
      <Experience/>
      <Divider/>
      <SecTitleCenter title="Project, certifications, badge" subTitle="Recent works"/>
      
      <Divider/>
      <SecTitleCenter title="Contact" subTitle="Contact with me"/>
      <Contact/>
      <Divider/>

      {/*<Gallery/>
      <Contact/> */}
    </div>
  );
}

export default App;
