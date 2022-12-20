

const Testreducer = (state, action) => {
    console.log("reducers", state, action);

  switch (action.type) {
    case "API_DATA":
      return {
        ...state,
        quesArr: action.payload,
      };
 default:
      return state;
  }
};

export default Testreducer;
