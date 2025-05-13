import React from 'react';
import { Button } from 'components/Button';

export const Card = ({ title, description }) => {
  console.log("This is Card Component")
  return (
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button>Open</Button>
    </div>
  );
};