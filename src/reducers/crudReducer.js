export const crudReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload, notification: null };
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        notification: { type: 'success', text: 'Élément ajouté avec succès !' }
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.id ? action.payload : item),
        notification: { type: 'success', text: 'Élément modifié avec succès !' }
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        notification: { type: 'danger', text: 'Élément supprimé avec succès !' }
      };
    case 'CLEAR_NOTIFICATION':
      return { ...state, notification: null };
    default:
      return state;
  }
};
