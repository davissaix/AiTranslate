import React, { useState } from 'react';

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState('en');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    // You can store the selected option in another state variable or perform any other action
    // For example, you can pass the selected option to a callback function or an API request.
    console.log('Selected language:', selectedValue);
  };

  return (
    <div>
      
      <select id="language" value={selectedOption} onChange={handleOptionChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="es">Spanish</option>
        <option value="es">portuguese</option>
        <option value="es">Russian</option>
        <option value="es">Italian</option>
        <option value="es">Turkish</option>
        <option value="es">Chinese</option>
        <option value="es">Japanese</option>


      </select>
    </div>
  );
};

export default DropDown;
