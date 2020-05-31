import {AppStateType, InferActionTypes} from '../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {useEffect} from "react";

const initialState = {}

export const restorePswReducer = (state: typeof initialState = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}
const dispa
useEffect(()=>{

})


/*
const actions = {
  someAction: () => ({type: ''} as const)
}
type ActionsType = InferActionTypes<typeof actions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const someActionCreator = (): ThunkType => async (dispatch: DispatchType, getState: () => AppStateType) => {
  try {
    dispatch(actions.someAction())
  } catch (e) {
    console.error('error: ' + {...e})
  }
}*/
