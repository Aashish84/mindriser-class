import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return { ...state, [action.payload.name]: action.payload.value };
    case "HANDLE_QTY":
      console.log(action.payload.amt);
      return {
        ...state,
        quantity: state.quantity + action.payload.amt,
      };
    default:
      return state;
  }
}

export default function FormReducer() {
  const [state, dispatch] = useReducer(reducer, {
    firstname: "",
    lastname: "",
    academic: "",
    isAgreed: false,
    quantity: 0,
  });

  function handelChange(e) {
    const { name, value, checked, type } = e.target;
    dispatch({
      type: "HANDLE_CHANGE",
      payload: {
        name: name,
        value: type === "checkbox" ? checked : value,
      },
    });
  }

  function changeCounter(amt) {
    dispatch({ type: "HANDLE_QTY", payload: { amt } });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <form className="col-2 m-auto d-flex flex-column" onSubmit={handleSubmit}>
      <input
        className="mt-2 mb-2"
        type="text"
        placeholder="enter first name"
        name="firstname"
        value={state.firstname}
        onChange={handelChange}
      />
      <input
        className="mt-2 mb-2"
        type="text"
        placeholder="enter last name"
        name="lastname"
        value={state.lastname}
        onChange={handelChange}
      />
      <p className="mb-0">academic : </p>
      <select
        name="academic"
        className="mb-2"
        defaultValue={"DEFAULT"}
        onChange={handelChange}
      >
        <option disabled value={"DEFAULT"} hidden>
          ...
        </option>
        <option value="slc">slc</option>
        <option value="+2">+2</option>
        <option value="bachelor">bachelor</option>
      </select>

      <div className="d-flex align-items-center">
        <button type="button" className="m-2" onClick={() => changeCounter(1)}>
          +
        </button>
        <h1>{`qty ${state.quantity}`}</h1>
        <button type="button" className="m-2" onClick={() => changeCounter(-1)}>
          -
        </button>
      </div>

      <div className="">
        <input
          id="chkbox"
          type="checkbox"
          name="isAgreed"
          checked={state.isAgreed}
          onChange={handelChange}
        />
        <label htmlFor="chkbox">terms and condition</label>
      </div>

      <button
        className="mt-2 mb-2 btn btn-primary"
        type="submit"
        disabled={!state.isAgreed}
      >
        submit
      </button>
    </form>
  );
}
