import React from "react";
import PropTypes from "prop-types";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentArrowUpward from "material-ui/svg-icons/navigation/arrow-upward";
import "./rewindtotopbutton.css";


let handleClick = e => {

};

const RewindToTopButton = ({}) => {
  const handleClick = e => {
    console.log("Click! ", e);
  };
  return (
    <div onClick={handleClick} className="RewindToTopButton">
      <FloatingActionButton>
        <ContentArrowUpward />
      </FloatingActionButton>
    </div>
  );
};

export default RewindToTopButton;
