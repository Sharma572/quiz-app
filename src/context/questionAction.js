// Set User (get user info)
export const getUser = async (dispatch) => {
  setLoading(dispatch, true);

  // do fetch
  await axios
    .get(`https://jsonplaceholder.typicode.com/users/1`)
    .then((res) => {
      const result = res.data;

      // set user info
      dispatch({
        type: "SET_USER",
        payload: result,
      });
    })
    .catch((error) => {
      const result = error;

      // set error if has any
      dispatch({
        type: "SET_ERROR",
        payload: {
          error: true,
          message: result,
        },
      });
    });
};
