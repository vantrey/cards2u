import {useForm} from "react-hook-form";

export type UserType = {
  avatar: string
  created: string
  email: string
  isAdmin: boolean
  name: string
  publicCardPacksCount: number
  updated: string
  verified: boolean
  _id: string
}

export type UseFormRegisterType = ReturnType<typeof useForm>['register']
export type UseFormErrorsType = ReturnType<typeof useForm>['errors']