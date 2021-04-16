export const createState = () => {
  const store = {
    loading: false,
  }

  return store;
}

export type wechatState = ReturnType<typeof createState>