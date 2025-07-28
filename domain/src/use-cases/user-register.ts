import { User } from "../entities/User"

export type UserRegisterRequestModel = Omit<User, 'id' | 'role'>

export function userRegister({ email, password }: UserRegisterRequestModel) {
  if (!email || email.trim() === '') {
    return {
      error: {
        code: 'InvalidData',
        message: 'Email is required',
      }
    }
  }
  if (!password || password.trim() === '') {
    return {
      error: {
        code: 'InvalidData',
        message: 'Password is required',
      }
    }
  }
  return {
    error: {
      code: 'InvalidData',
      message: 'Email already in use',
    }
  }
}