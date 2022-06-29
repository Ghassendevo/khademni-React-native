export const post = (state = false, action) => {
    switch (action.type) {
      case 'POST':
        return !state;
      default:
        return state;
    }
  }
