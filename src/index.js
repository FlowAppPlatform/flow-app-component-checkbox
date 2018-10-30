import React from 'react';

import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class CheckboxComponent extends AppComponent {
  static properties = {
    iconUrl: '/assets/images/checkbox-component.png',
    name: 'Checkbox',
    type: 'ui-component',
    componentType: 'checkbox',
    category: 'Inputs',
    parent: null,
    showOnComponentsPanel: true,
    isValuable: true,
    allowsChildren: false
  };

  constructor() {
    super();
    const newState = {
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
              id: 'event',
              name: 'Events',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],

      ...CheckboxComponent.properties
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    return (
      <div className="checkfix space-1">
        <label htmlFor="checkbox" className="check-label">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            value="true"
            className="check-input"
          />
          Checkbox
        </label>
      </div>
    );
  }
}

export default CheckboxComponent;
