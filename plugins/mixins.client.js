export default defineNuxtPlugin(() => {
  return {
    provide: {
      objHasAllValuesExcept: (obj, except) => {
        if (except) {
          let requiredProps = Object.entries(obj)
            .filter(([key]) => !except.includes(key))
            .map(([_, value]) => value);
          return requiredProps.every((value) => value);
        }
        return Object.values(obj).every((el) => el !== "");
      },
    },
  };
});
