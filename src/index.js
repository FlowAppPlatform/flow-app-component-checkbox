import React from 'react';

import AppComponent from 'flow-app-component';

import './css/theme/default.css';

// Programmatically generated styles
import {
  alignContainer,
  alignVertical,
  containerWidth,
  displayType
} from './style';

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
          properties: [
            {
              id: 'label',
              name: 'Title',
              type: 'text',
              options: {},
              data: null,
            },
          ],
        },
        {
          categoryName: 'Style',
          categoryDescription: 'Change style of the checkbox component',
          properties: [
            {
              id: 'align-container',
              name: 'Align Container',
              type: 'position', 
              options: ['left', 'center', 'right'],
              data: null,
            },
            {
              id: 'container-width',
              name: 'Width',
              type: 'dropdown',
              options: {
                options: [
                  { label: '10%', value: 'ten' },
                  { label: '15%', value: 'fifteen' },
                  { label: '20%', value: 'twenty' },
                  { label: '30%', value: 'thirty'},
                  { label: '40%', value: 'forty' },
                  { label: '50%', value: 'fifty' },
                  { label: '60%', value: 'sixty'},
                  { label: '70%', value: 'seventy' },
                  { label: '80%', value: 'eighty' },
                  { label: '90%', value: 'ninety'},
                  { label: '100%', value: 'full-page'}
                ]
              },
              data: null,
            },
            {
              id: 'vertical-align',
              name: 'Vertical Align',
              type: 'dropdown',
              options: {
                options: [
                  { label: 'Top', value: 'top' },
                  { label: 'Middle', value: 'middle' },
                  { label: 'Bottom', value: 'bottom' },
                ]
              },
              data: null
            },
          ],
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
      if (typeof this.getElementProps.onEvent === 'function') {
        this.getElementProps().onEvent(graphId);
      }
    }

  renderContent() {
    const label = this.getPropertyData('label') || 'Checkbox';
    const elemProps = this.getElementProps();
    const defaultWidth = { width: '100%' };
    const defaultVerticalAlign = { verticalAlign: 'top' }

    elemProps.style = Object.assign(this.getDefaultStyle() || {}, {
      ...this.getPropertyData('align-container') 
        && alignContainer(this.getPropertyData('align-container')),
      ...this.getPropertyData('container-width')
        && containerWidth(this.getPropertyData('container-width').value) || defaultWidth,
      ...this.getPropertyData('vertical-align')
        && alignVertical(this.getPropertyData('vertical-align').value) || defaultVerticalAlign,
    });

    return (
      <div style={elemProps.style} className="checkfix space-1">
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
          {label}
        </label>
      </div>
    );
  }
}

export default CheckboxComponent;
