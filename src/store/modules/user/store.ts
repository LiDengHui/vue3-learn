export const createState = () => {
  const store = {
    loading: false,
  }

  return store;
}

export type userState = ReturnType<typeof createState>