import axios from 'axios'

let initialState = {
  username: 'empty',
  email: 'empty',
  avatar: 'empty'
}

export default function currentUser(state = initialState, action) {
  switch(action.type) {
    case 'SET_CURRENT_USER': {
      const user = action.user
      state.username = user.username
      state.email = user.email
      state.avatar = user.avatar
      return state
    }
    default:
      return state
  }
}