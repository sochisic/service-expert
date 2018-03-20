import React, { Component } from 'react';
import PropTypes from "prop-types";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentArrowUpward from "material-ui/svg-icons/navigation/arrow-upward";
import "./rewindtotopbutton.css";
import { rewind } from "../actions/actions";


export default class RewindToTopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        className: 'RewindToTopButton disabled'
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
      let scroll = document.documentElement.scrollTop;
      if(scroll > 1300) {
        this.setState({
          className: 'RewindToTopButton'
        })
      } else {
        this.setState({
          className: 'RewindToTopButton disabled'
        })
      }
  }

  render() {
    return (
      <div onClick={ rewind } className={this.state.className}>
        <FloatingActionButton>
          <ContentArrowUpward />
        </FloatingActionButton>
      </div>
    );
  }
}
