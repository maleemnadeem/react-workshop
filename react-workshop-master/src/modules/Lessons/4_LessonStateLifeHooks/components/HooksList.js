import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontColor: props.fontColor || 'red',
      countries: [],
      isLoading: true,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('...componentWillReceiveProps...');
      let loading = this.state.isLoading;
      if (nextProps.countries.length > 0) {
          loading = false;
      }
      this.setState({
          fontColor: nextProps.fontColor,
          countries: nextProps.countries,
          isLoading: loading,
      });
  }

  render() {

    const { isLoading, countries } = this.state;

    return isLoading ? <h4>Loading data...</h4> : (
        <ul style={{color: this.state.fontColor}}>
          {
            countries.map(country => <li>{country}</li>)
          }
        </ul>
    );
  }
}


HooksList.propTypes = {
  fontColor: PropTypes.string,
  countries: PropTypes.arrayOf(PropTypes.object),
};

export default HooksList;
