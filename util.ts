export function assert(cond: boolean, msg: string): asserts cond {
  if (!cond) {
    throw new Error(msg);
  }
}

export function makeLocalStorageHelper<T>(keyname: string): {
  serialize: (value: T) => void;
  deserialize: () => T | null;
} {
  return {
    serialize: (value: T) => {
      try {
        window.localStorage.setItem(keyname, JSON.stringify(value));
      } catch (e) {
        console.error(`failed to serialize to localstorage in ${keyname}: ${e}`);
      }
    },
    deserialize: () => {
      try {
        const json = window.localStorage.getItem(keyname);
        if (json == null) {
          return null;
        }
        return JSON.parse(json);
      } catch (e) {
        console.error(`failed to deserialize from localstorage in ${keyname}: ${e}`);
        return null;
      }
    },
  };
}
