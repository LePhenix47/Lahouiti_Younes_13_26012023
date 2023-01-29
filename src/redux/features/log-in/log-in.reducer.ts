//Immer

export function logInReducer(state: any = false, action: any): any {
  const typeOfAction = action.type;
  switch (typeOfAction) {
    case "": {
      return;
    }

    default: {
      return state;
    }
  }
}
