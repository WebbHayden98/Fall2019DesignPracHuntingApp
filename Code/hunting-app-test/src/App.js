import React, { Component } from 'react';

import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import AutoCompleteText from './Components/AutoCompleteText/AutoCompleteText';

class App extends Component {
   state = {
     sideDrawerOpen: false
   };

   drawerToggleClickHandler = () => {
     this.setState((prevState) => {
       return {sideDrawerOpen: !prevState.sideDrawerOpen};
     });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
  
  render(){
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <div className="App-Component" style={{ position: 'absolute', left: '40%', top: '10%' }}> 
          <AutoCompleteText />
        </div>
        <main style={{marginTop: '64px'}}>
          <p>Test words</p>
        </main>
      </div>
    );
  }
}

export default App;
