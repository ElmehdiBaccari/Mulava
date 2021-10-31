import React, { useReducer, createContext } from 'react';

export const MulavaContext = createContext();

const initialState = {
  mulavas: [],
  mulava: {}, 
  message: {}, 
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_MULAVA': {
      return {
        ...state,
        mulavas: [...state.mulavas, action.payload],
        message: {
          type: 'success',
          title: 'Success',
          content: 'New Mulava Task created!',
        },
      };
    }
    case 'FETCH_MULAVAS': {
      return {
        ...state,
        mulavas: action.payload,
      };
    }
    case 'FETCH_MULAVA': {
      return {
        ...state,
        mulava: action.payload,
      };
    }
    case 'UPDATE_MULAVA': {
      const mulava = action.payload;
      return {
        ...state,
        mulavas: state.mulavas.map(item =>
          item._id === mulava._id ? mulava : item,
        ),
        message: {
          type: 'success',
          title: 'Mulava Task Updated Successful',
          content: `New "${mulava.name}" has been updated!`,
        },
      };
    }
    case 'DELETE_MULAVA': {
      const { _id, name } = action.payload;
      return {
        ...state,
        mulavas: state.mulavas.filter(item => item._id !== _id),
        message: {
          type: 'success',
          title: 'Delete Successful',
          content: `Mulava task  "${name}" has been deleted!`,
        },
      };
    }
    case 'FLASH_MESSAGE': {
      return {
        ...state,
        message: action.payload,
      };
    }
    default:
      throw new Error();
  }
}

export const MulavaContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <MulavaContext.Provider value={[state, dispatch]}>
      {children}
    </MulavaContext.Provider>
  );
};
