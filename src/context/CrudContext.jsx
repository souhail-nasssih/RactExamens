import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { api } from '../services/api'; // ton axios configuré
import { crudReducer } from '../reducers/crudReducer';

const CrudContext = createContext();

export const useCrud = () => useContext(CrudContext);

const initialState = {
  items: [],
  notification: null,
};

export const CrudProvider = ({ children }) => {
  const [state, dispatch] = useReducer(crudReducer, initialState);

  useEffect(() => {
    api.get('/modules')
      .then(res => dispatch({ type: 'SET_ITEMS', payload: res.data }))
      .catch(err => {
        dispatch({ type: 'CLEAR_NOTIFICATION' });
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (state.notification) {
      const timer = setTimeout(() => {
        dispatch({ type: 'CLEAR_NOTIFICATION' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.notification]);

  const addItem = async (item) => {
    try {
      const res = await api.post('/modules', item);
      dispatch({ type: 'ADD_ITEM', payload: res.data });
    } catch (error) {
      console.error('Erreur ajout :', error);
    }
  };

  const updateItem = async (id, item) => {
    try {
      const res = await api.put(`/modules/${id}`, item);
      dispatch({ type: 'UPDATE_ITEM', payload: res.data });
    } catch (error) {
      console.error('Erreur modification :', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await api.delete(`/modules/${id}`);
      dispatch({ type: 'DELETE_ITEM', payload: id });
    } catch (error) {
      console.error('Erreur suppression :', error);
    }
  };

  return (
    <CrudContext.Provider
      value={{
        items: state.items,
        notification: state.notification,
        addItem,
        updateItem,
        deleteItem,
      }}
    >
      {children}
    </CrudContext.Provider>
  );
};
