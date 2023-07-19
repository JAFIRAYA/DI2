import React from 'react';

const FormComponent = ({ formData }) => {
  return (
    <div>
      <h2>Form Data:</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Age: {formData.age}</p>
      <p>Gender: {formData.gender}</p>
      <p>Destination: {formData.destination}</p>
      <p>Dietary Restrictions:</p>
      <p>Vegan: {formData.vegan ? 'Yes' : 'No'}</p>
      <p>Lactose Free: {formData.lactoseFree ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default FormComponent;