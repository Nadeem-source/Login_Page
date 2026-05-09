import React from "react";
/*
  useState import kiya

  Kyun?
  Input state handle karne ke liye
*/
import { useState } from "react";

/*
  Redux hooks import kiye
*/
import {
  useDispatch,
  useSelector,
} from "react-redux";

import { useNavigate } from "react-router-dom";
/*
  CRUD actions import kiye
*/
import {
  addItem,
  deleteItem,
  updateItem,
} from "../redux/slices/crudSlice";

import { logout } from "../redux/slices/authSlice";
import "./HomePage.css";


function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  /*
    Redux items access kiye
  */
  const items = useSelector(
    (state) => state.crud.items
  );

  /*
    Add/update handler
  */
  const handleSubmit = () => {

    if (!input) return;

    /*
      Update mode
    */
    if (editId) {
      dispatch(
        updateItem({
          id: editId,
          name: input,
        })
      );

      setEditId(null);
    }

    /*
      Create mode
    */
    else {
      dispatch(addItem(input));
    }

    setInput("");
  };

  /*
    Logout function
  */
  const handleLogout = () => {
    dispatch(logout());

    navigate("/");
  };

  return (
    <div className="homepage-main-wrapper">

      <div className="homepage-crud-container">

        <div className="homepage-top-bar">

          <h1>CRUD Dashboard</h1>

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="homepage-input-wrapper">

          <input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="Enter Item"
          />

          <button onClick={handleSubmit}>
            {editId ? "Update" : "Add"}
          </button>
        </div>

        <div className="homepage-items-list">

          {items.map((item) => (
            <div
              key={item.id}
              className="homepage-item-card"
            >

              <span>{item.name}</span>

              <div>

                <button
                  onClick={() => {
                    setInput(item.name);
                    setEditId(item.id);
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    dispatch(deleteItem(item.id))
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;