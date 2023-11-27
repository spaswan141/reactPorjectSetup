
export const incrementAsync = () => (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
  