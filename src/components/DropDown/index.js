import React, { useState } from 'react';
import { UserContext } from '../UserProvider';
import styled from 'styled-components';

const DropDown = () => {
  const { selectedOption, handleOptionChange } = React.useContext(UserContext);
  console.log('Selected option:', selectedOption);

  return (
    <div>
      
      <StyledSelect id="language" value={selectedOption} onChange={handleOptionChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="es">Spanish</option>
        <option value="pt">portuguese</option>
        <option value="ru">Russian</option>
        <option value="it">Italian</option>
        <option value="tr">Turkish</option>
        <option value="zh">Chinese</option>
        <option value="jp">Japanese</option>


      </StyledSelect>
    </div>
  );
};

export default DropDown;

const StyledSelect = styled.select`
  border-radius: 45px;
  /* Add any other styles you want here... */
`;