import { createSlice } from "@reduxjs/toolkit";
/*
  Kyun?
  Unique IDs generate karne ke liye
*/
import { v4 as uuidv4 } from "uuid";

const initialState = {

  /*
    Items array
  */
  items: [],
};

const crudSlice = createSlice({
  name: "crud",

  initialState,

  reducers: {

    /*
      Create item
    */
   
    addItem: (state, action) => {
      state.items.push({
        id: uuidv4(),
        name: action.payload,
      });
    },

    /*
      Delete item
    */
    deleteItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    /*
      Update item
    */
    updateItem: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.name = action.payload.name;
      }
    },
  },
});

export const {
  addItem,
  deleteItem,
  updateItem,
} = crudSlice.actions;

export default crudSlice.reducer;