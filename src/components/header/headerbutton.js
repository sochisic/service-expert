import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

class HeaderButton extends Component {
  render() {
    return (
      <div className="Header--button">
        <IconButton
          iconStyle={styles.mediumIcon}
          style={styles.medium}
          onClick={this.props.drawerToggle}
          disabled={true}
        >
          <Menu />
        </IconButton>
      </div>
    );
  }
}

export default HeaderButton;
