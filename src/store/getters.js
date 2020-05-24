const getters = {
  token: state => state.user.token,
  user: state => state.user.user,
  loading: state => state.loading.loading,
}

export default getters
