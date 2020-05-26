import {AppStateType, InferActionTypes} from '../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

const initialState = {}

export const loginReducer = (state: typeof initialState = initialState, action: ActionsType) => {
  switch (action.type) {
    default:
      return state
  }
}

const actions = {
  someAction: () => ({type: ''} as const)
}
type ActionsType = InferActionTypes<typeof actions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const someThunkCreator = (): ThunkType => async (dispatch: DispatchType, getState: () => AppStateType) => {
  try {
    dispatch(actions.someAction())
  } catch (e) {
    console.error('error: ' + {...e})
  }
}