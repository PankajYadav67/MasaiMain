export default class Store {
  constructor(state, reducer) {
    this.reducer = reducer;
    this.state = state;
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    return this.reducer(this.state, action);
  }
}
