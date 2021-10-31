import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import MulavaList from '../components/mulava-list';
import { MulavaContext } from '../context/mulava-context';
import { FlashMessage, flashErrorMessage } from '../components/flash-message';

const MulavaListPage = () => {
  const [state, dispatch] = useContext(MulavaContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/mulava');
        dispatch({
          type: 'FETCH_MULAVAS',
          payload: response.data.data || response.data, 
        });
      } catch (error) {
        flashErrorMessage(dispatch, error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Mulava TaskList</h1>
      {state.message.content && <FlashMessage message={state.message} />}
      <MulavaList mulavas={state.mulavas} />
    </div>
  );
}

export default MulavaListPage;
