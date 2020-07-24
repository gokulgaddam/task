import React,{useState} from 'react';
import options from './options.json'
//import logo from './logo.svg';
import Search from './search';
import './index.scss';
import {Modal,ModalBody,Button,ModalHeader} from 'reactstrap';
import Aboutme from './Aboutme'
import {withRouter,Route,Link,Switch,Redirect} from 'react-router-dom'

function App() {
  const main = ()=> {
    return(
      <>
      <Link to="/about-me" className="ml-5 ">About Me</Link>
      <Search options={opts}/>
      </>
    )
  }
  const [isOpen,setIsOpen]=useState(false);

  const modalToggle = () => {
    setIsOpen(!isOpen)
  }


  console.log((options["options"]));
  let opts=options["options"];
  /*Object.keys(opts).map(k=>{
   return options.push[opts[k]]
  })*/
  console.log(options)
  return (
    <div className="App container text-center">
      <Modal isOpen={isOpen} toggle={modalToggle}>
      <ModalHeader toggle={modalToggle}>About Me</ModalHeader>
        <ModalBody>
          <p>
            hello,my name is g.gokul krishna reddy.
          </p>
        </ModalBody>
      </Modal>
    <Button onClick={modalToggle} className="btn btn-outline-primary mt-3">
      Modal
    </Button>
  
    
      <Switch>
        <Route  exact path="/" component={main}/>
       <Route  exact path="/about-me" component={Aboutme}/>
       <Redirect to="/" />
      </Switch>
     
      
         
    </div>

  );
}

export default withRouter(App);
