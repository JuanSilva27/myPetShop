export function userRegister() {
  return {
    error: {
      code: 'InvalidData',
      message: 'Email already in use',
    }
  }
}