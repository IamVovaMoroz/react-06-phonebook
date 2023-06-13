
import { createReducer } from '@reduxjs/toolkit';
// import { ACTION_TYPE } from './constants';
import { addContacts, deleteContacts } from './actions';
import { filterReducer } from './filtersSlice';
// import { addContacts, deleteContacts, getFilterValue } from './actions';
// import { combineReducers } from 'redux';
// const tasksInitialState = [
//   { id: 0, text: "Learn HTML and CSS", completed: true },
//   { id: 1, text: "Get good at JavaScript", completed: true },
//   { id: 2, text: "Master React", completed: false },
//   { id: 3, text: "Discover Redux", completed: false },
//   { id: 4, text: "Build amazing apps", completed: false },
// ];

// первоначальное значение для contacts!

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];



//   export const contactsReducer = createReducer


//   Reducer для добавления и удаления контактов
//   export const contactsReducer = (state = initialContacts, action) => {
//     switch (action.type) {
//       case ACTION_TYPE.addContacts:
//         // распыляем предыдущий обьект [...state] и добавляем action.payload новый контакт. 
//         return [...state, action.payload];
  
//       case ACTION_TYPE.deleteContacts:
//         //фильтруем массив state.filter и оставляем  только те, что не совпадают с пришедшим contact.id. Т.е не равно action.payload. Если не находит возвращает предыдущий массив
//         return state.filter(contact => contact.id !== action.payload);
// //   если нет вариантов возвращаем тот что был
//       default:
//         return state;
//     }
//   };


export const contactsReducer = createReducer(initialContacts, {
    [addContacts.type]: (state, action) => {
        console.log('addContacts.type', addContacts.type)
      return [...state, action.payload];
    },
    [deleteContacts.type]: (state, action) => {
        console.log('deleteContacts.type', deleteContacts.type)
     
      return state.filter((contact) => contact.id !== action.payload);
    },
  });
  
//   первоначально state = ''(т.е. отсутствие фильтра) Если action.type === ACTION_TYPE.getFilterValue, возвращаем action.payload (соответствующий значению фильтра)
//   export const filterReducer = (state = '', action) => {
//     switch (action.type) {
//       case ACTION_TYPE.getFilterValue:
//         return action.payload;
  
//       default:
//         return state;
//     }
//   };
  

//   export const filterReducer = createReducer('', {
//     [getFilterValue.type]: (state, action) => action.payload,
//   });




// комбайн редюсеров , передаём в него filterReducer и contactsReducer
// import { combineReducers } from 'redux'; 
// export const reducer = combineReducers({
//     filter: filterReducer,
//     contacts: contactsReducer,
//   });

//    toolkit комбаин не нужен


export const reducer = ({
    filter: filterReducer,
    contacts: contactsReducer,
  });