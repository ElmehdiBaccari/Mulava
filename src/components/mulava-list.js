import React from 'react';
import { Card } from 'semantic-ui-react';
import  MulavaCard from './mulava-card';

const MulavaList = ({ mulavas }) => {
  const cards = () => {
    return mulavas.map(mulava => {
      return <MulavaCard key={mulava._id} mulava={mulava} />;
    });
  };

  return <Card.Group>{cards()}</Card.Group>;
}

export default MulavaList;
