import React from 'react';
import  axios  from  'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Icon } from 'semantic-ui-react';
import  {   MulavaContext }  from  '../context/mulava-context';
import  { flashErrorMessage }  from  './flash-message';

const  { useContext }  =  React;

const MulavaCard = ({ mulava }) => {
  
  const [state , dispatch] = useContext(MulavaContext);

  const deleteMulava = async id => {
    try {
      const response = await axios.delete(
        `http://localhost:3030/mulava/${id}`,
      );
      dispatch({
        type: 'DELETE_MULAVA',
        payload: response.data,
      });
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>
        <Icon name="user" /> {mulava.name} 
        </Card.Header>
        <Card.Description>
          <p>
            <Icon name="archive" /> {mulava.description}
          </p>
          <p>
            <Icon name="pin" /> {mulava.numberTasks}
          </p>
          <p>
            <Icon name="calendar alternate" /> {mulava.year}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            basic
            color="green"
            as={Link}
            to={`/mulava/edit/${mulava._id}`}
          >
            Edit
          </Button>
          <Button basic color="red" onClick={() => deleteMulava(mulava._id)}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default MulavaCard;
