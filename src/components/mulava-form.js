import React, { useContext, useState } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { MulavaContext } from '../context/mulava-context';
import { flashErrorMessage } from './flash-message';

const MulavaForm = ({mulava}) => {
  const [state, dispatch] = useContext(MulavaContext);
  const [redirect, setRedirect] = useState(false);
  const { register, errors, handleSubmit } = useForm({
    defaultValues: mulava,
  });

  const createMulava = async data => {
    try {
      const response = await axios.post('http://localhost:3030/mulava', data);
      dispatch({
        type: 'CREATE_MULAVA',
        payload: response.data,
      });
      setRedirect(true);
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };

  const updateMulava = async data => {
    try {
      const response = await axios.patch(
        `http://localhost:3030/mulava/${mulava._id}`,
        data,
      );
      dispatch({
        type: 'UPDATE_MULAVA',
        payload: response.data,
      });
      setRedirect(true);
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };

  const onSubmit = async data => {
    if (mulava._id) {
      await updateMulava(data);
    } else {
      await createMulava(data);
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <h1 style={{ marginTop: "1em" }}>
          {mulava._id ? "Edit Mulava" : "Add "}
        </h1>
        <Form onSubmit={handleSubmit(onSubmit)} loading={state.loading}>
          
            <Form.Field className={classnames({ error: errors.name })}>
              <label htmlFor="name">
                 Name
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  ref={register({ required: true, minLength: 2 })}
                />
              </label>
             
            </Form.Field>
            <Form.Field className={classnames({ error: errors.description })}>
              <label htmlFor="description">
                Description
                <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Description"
                  ref={register({ required: true })}
                />
              </label>
            </Form.Field>
            
            <Form.Field className={classnames({ error: errors.numberTasks })}>
              <label htmlFor="numberTasks">
              Number of Tasks
                <input
                  id="numberTasks"
                  name="numberTasks"
                  type="text"
                  placeholder="numberTasks"
                  ref={register({ required: true })}
                />
              </label>
            </Form.Field>
            <Form.Field className={classnames({ error: errors.year })}>
              <label htmlFor="year">
               Deadline Year
                <input
                  id="year"
                  name="year"
                  type="text"
                  placeholder="year"
                  ref={register({ required: true })}
                />
              </label>
            </Form.Field>
          
         
          <Button primary type="submit">
            Save
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default MulavaForm;
