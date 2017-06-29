import DeepFreeze from '../../utils/deep-freeze.js';

class Constants {}
Constants.NAME = 'localstorage-store';
Constants.NAMESPACE = Constants.NAME + ':';
Constants.WELLKNOWN_EVENTS = {
  in: {
    localstorageSet: Constants.NAMESPACE + 'set',
    localstorageGet: Constants.NAMESPACE + 'get',
    localstorageRemove: Constants.NAMESPACE + 'remove',
    localstorageClear: Constants.NAMESPACE + 'clear'
  },
  out: {}
};
DeepFreeze.freeze(Constants);
export function  localStorageConstants() {
	return Constants;
}


export function clearLocalStorage() {
  return {
    type: Constants.WELLKNOWN_EVENTS.in.localstorageClear,
  };
}

export function setLocalStorageItem(mutation) {
  return {
    type: Constants.WELLKNOWN_EVENTS.in.localstorageSet,
    mutation
  };
}

export function getLocalStorageItem(query) {
  return {
    type: Constants.WELLKNOWN_EVENTS.in.localstorageSet,
    query
  };
}

export function removeLocalStorageItem(key) {
  return {
    type: Constants.WELLKNOWN_EVENTS.in.localstorageRemove,
    key
  };
}
