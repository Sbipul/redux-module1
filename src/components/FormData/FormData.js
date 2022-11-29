import React, { useReducer } from "react";
import { initialState, reducer } from "../../reducers/formReducer";

const FormData = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="section">
      <form onSubmit={submit}>
        <div className="form-grid">
          <div>
            <label htmlFor="">First name</label>
            <input
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              type="text"
              name="first_name"
            />
          </div>
          <div>
            <label htmlFor="">Last name</label>
            <input
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              type="text"
              name="last_name"
            />
          </div>
          <div>
            <label htmlFor="">Email address</label>
            <input
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              type="email"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="">Major subject</label>
            <select
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              name="subject"
              id=""
            >
              <option value="chemistry">chemistry</option>
              <option value="math">math</option>
              <option value="biology">biology</option>
              <option value="cse">cse</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Gender</label>
            <div className="df ac">
              <label htmlFor="">Male</label>
              <input
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                type="radio"
                value="male"
                name="gender"
                id=""
              />
            </div>
            <div className="df ac">
              <label htmlFor="">Feale</label>
              <input
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                type="radio"
                value="female"
                name="gender"
                id=""
              />
            </div>
          </div>
          <div className="df ac">
            <input name="terms" onClick={()=>dispatch({type:'CHECKBOX'})} type="checkbox" />
            <label>Default checkbox</label>
          </div>
          <div>
            <label htmlFor="">Skill set</label>
            <div className="df ac">
              <button type="button" onClick={()=> dispatch({type:'DECREMENT',payload:1})}>-</button>
              <button>
                {state.skill}
              </button>
              <button type="button" onClick={()=> dispatch({type:'INCREMENT',payload:1})}>+</button>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="">Your message</label>
          <textarea
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            name="message"
            id=""
            rows="10"
          ></textarea>
        </div>
        <button disabled={!state.terms} type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormData;
