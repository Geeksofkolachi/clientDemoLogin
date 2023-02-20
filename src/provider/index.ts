import { atom, AtomEffect } from 'recoil';

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    if (typeof window !== 'undefined') {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authUser = atom<any | null>({
  key: 'user',
  default: null,
  // get initial state from local storage to enable user to stay logged in
  effects: [localStorageEffect('user')],
});
