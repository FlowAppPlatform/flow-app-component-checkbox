import React from 'react';

import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class CheckboxComponent extends AppComponent {
  constructor() {
    super();
    const newState = {
    interactiveMode: false,
    readOnly: false,
    checkInputValue: false,
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic settings for the checkbox',
          properties: [],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the checkbox',
          properties: [
            {
              id: 'load',
              name: 'Load Event',
              type: 'graph',
              options: {},
              data: null,
            },
            {
              id: 'click',
              name: 'Click Event',
              type: 'graph',
              options: {},
              data: null,
            },
            {
              id: 'hover',
              name: 'Hover Event',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],
      iconUrl: '/assets/images/checkbox-component.png',
      name: 'Checkbox',
      type: 'ui-component',
      componentType: 'checkbox',
      category: 'Inputs',
      parent: null,
      showOnComponentsPanel: true,
      isValuable: true,
      allowsChildren: false,
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }
    componentDidMount(){
        const interactiveMode = !(this.props.propertyData.interactiveMode === undefined);
        this.setState({interactiveMode, readOnly: interactiveMode});
        this.triggerGraphEvent('load')
    }

    handleClick = (e) => {
        if(this.state.readOnly){
          e.preventDefault();
        }else {
          this.setState(prevState => ({checkInputValue: !prevState.checkInputValue}))
          
          this.triggerGraphEvent('click');
        }
    }

    handleDbClick = (e) => {
        if(this.state.interactiveMode){
            this.setState(prevState => ({readOnly: !prevState.readOnly}))
        }
    }

    triggerGraphEvent = (eventId) => {
      const graphId = this.getPropertyData(eventId);
      this.getElementProps().onEvent(graphId)
    }

  renderContent() {
    return (
      <div className="checkfix space-1">
        <label htmlFor="checkbox" className="check-label">
          <input
            style={{cursor: 'pointer'}}
            type="checkbox"
            name="checkbox"
            id="checkbox"
            readOnly
            value={this.state.checkInputValue}
            checked={this.state.checkInputValue}
            className="check-input"
            onMouseOver={() => this.triggerGraphEvent('hover')}
            onDoubleClick={this.handleDbClick}
            onClick={this.handleClick}
          />
          Checkbox
        </label>
      </div>
    );
  }
}

export default CheckboxComponent;
