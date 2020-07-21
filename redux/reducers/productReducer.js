// all reducer have own state

const initialState = {
  products: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    // actions go here

    default:
      return state;
  }
}
