let initialState = {
  username: 'username',
  email: 'email@gmail.com',
  avatar: './avatar.jpg'
}

export default function exemple(state = initialState, action) {
  switch(action.type) {
    // case 'INCREMENT':
    //   return state + 1
    // case 'DECREMENT':
    //   return state + 1
    case 'UPDATE_USERNAME': {
      // state = state
      state.username = action.username
      return state
    }
    default:
      return state
  }
}