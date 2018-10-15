import React, { Component } from 'react';

// import AssignmentDetails from './AssignmentDetails';
import NotFound from './SubComponents/NotFound'
import Reload from './SubComponents/Reload'
import  Loading from './SubComponents/Loading'
import  ServerError from './SubComponents/ServerError'

class ConditionalRenderPractice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeComponent: null,
    };
  }

  getCurrentView(selection)
  {
      if(selection === '_Loading')
      {
          return <Loading/>
      }
      else if(selection === '_NotFound')
      {
          return<NotFound/>
      }
      else if (selection === '_Reload')
      {
          return <Reload/>
      }
      else if(selection === '_ServerError')
      {
          return <ServerError/>
      }
  }

  changeActiveComonents(selection) {
      this.setState(
          {
              activeComponent: selection
          }
      );
  }



  render() {
    return (
        <section className="lesson-conditional-render info-panel">
          <h2>Practice Conditional Rendering</h2>
            <div>
                <span> <button onClick={this.changeActiveComonents.bind(this,'_NotFound')} >Not Found</button> </span>
                <span> <button onClick={this.changeActiveComonents.bind(this,'_ServerError')}>Server Error</button> </span>
                <span> <button onClick={this.changeActiveComonents.bind(this,'_Loading')}>Loading</button> </span>
                <span> <button onClick={this.changeActiveComonents.bind(this,'_Reload')}>Re-Load</button> </span>
            </div>

            <div align="center">
                    {this.getCurrentView(this.state.activeComponent)}
            </div>
        </section>
    );
  }
}

export default ConditionalRenderPractice;
