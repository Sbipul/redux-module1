import React from "react";
import { actionTypes } from "../actions/actionTypes";
import { useStore } from "../context/UserProvider";

const HomeComponents = () => {
  const {
    state: { users, loading, error },dispatch
  } = useStore();

  let content;
  if (loading) {
    content = <p>Please wait...</p>;
  } else if (error) {
    content = <p>Something went wrong...</p>;
  } else if (loading || error) {
    content = <p>Something went wrong...</p>;
  } else if (loading || error || users.length === 0) {
    content = <p>Something went wrong...</p>;
  } else {
    content = users.map((user, i) => (
      <div key={i}>
        <p>{user.name}</p>
        <button onClick={()=>dispatch({type:actionTypes.ADDTOCART,payload:user})}>Add to cart</button>
      </div>
    ));
  }

  return (
    <div>
      <div className="container">{content}</div>
    </div>
  );
};

export default HomeComponents;
