import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import MulavaForm from '../components/mulava-form';
import { flashErrorMessage } from '../components/flash-message';
import { MulavaContext } from '../context/mulava-context';

const MulavaFormPage = ({ match }) => {
  const [state, dispatch] = useContext(MulavaContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { _id } = match.params; 

    if (_id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3030/mulava/${_id}`,
          );
          dispatch({
            type: 'FETCH_MULAVA',
            payload: response.data,
          });
          setLoading(false);
        } catch (error) {
          flashErrorMessage(dispatch, error);
        }
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [match.params, dispatch]);

  if (loading) {
    return <p>Please wait...</p>;
  }

  return (
    <div>
      <MulavaForm mulava={state.mulava} />
    </div>
  );
}

export default MulavaFormPage;
