import React, {Component} from 'react';
import SelectField from '../../node_modules/material-ui/SelectField';
import MenuItem from '../../node_modules/material-ui/MenuItem';


const items = [
  <MenuItem value={1} key={1} primaryText={`iPhone 5`} className="select--item" />,
  <MenuItem value={2} key={2} primaryText={`iPhone 5s`} />,
  <MenuItem value={3} key={3} primaryText={`iPhone 6`} />
 ];
for (let i = 4; i < 10; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}


export default class MultipleRepair extends Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText="Выберите"
          floatingLabelStyle={{color: 'green', fontSize: '1rem'}}
          floatingLabelFixed={false}
          className="RepairContainer--select"
        >
          {items}
        </SelectField>
    );
  }
}
