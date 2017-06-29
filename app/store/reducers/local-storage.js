import R from 'ramda';
import  '../actions/local-storage';

let localStorageConstants = localStorageConstants();
export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return R.inc(state);
    case DECREMENT:
      return R.dec(state);
    default:
      return state;
  }
}
