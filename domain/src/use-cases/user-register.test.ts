import { describe, test, expect, Mock, Mocked } from 'vitest';
import { userRegister } from './user-register';
import { MockedUsersRepository, mockUserRepositry } from '../mocks/user-repository-mock';

describe('UserRegister Use Case', () => {
    const _mockedUserRepository: MockedUsersRepository = mockUserRepositry([])

    test('whit an email already in use, fails with InvalidData', () => {
        const payload = {
            email: 'test@test.com',
            name: 'Test User',
            telephone: '123456789',
            role: 'client',
            password: 'password123',
        } 

        const result = userRegister(payload);
        expect(result).toEqual({
            error: {
                code: 'InvalidData',
                message: 'Email already in use',
            }
        })
    });

    test('whit an empty email, fails with InvalidData', () => {
        const payload = {
            email: '',
            name: 'Test User',
            telephone: '123456789',
            role: 'client',
            password: 'password123',
        }
        const result = userRegister(payload);
        expect(result).toEqual({
            error: {
                code: 'InvalidData',
                message: 'Email is required',
            }
        });
        })

    test('whit an empty password, fails with InvalidData', () => {
        const payload = {
            email: 'test@prueba123.com',
            name: 'Test User',
            telephone: '123456789',
            role: 'client',
            password: '',
        }
        const result = userRegister(payload);
        expect(result).toEqual({
            error: {
                code: 'InvalidData',
                message: 'Password is required',
            }
        });
    });

    test('whit an empty name, fails with InvalidData', () => {
        const payload = {
            email: 'test@test456.com',
            name: '',
            telephone: '123456789',
            role: 'client',
            password: 'password123',
        }
        const result = userRegister(payload);
        expect(result).toEqual({
            error: {
                code: 'InvalidData',
                message: 'Name is required',
            }
        });
    });

    test('whit a valid data, returns success', () => {
        const payload = {
            email: 'mail@test.com',
            name: 'Test User',
            telephone: '123456789',
            role: 'client',
            password: 'password123',
        }
        const result = userRegister(payload);
        expect(result).toEqual({
            error: {
                code: 'InvalidData',
                message: 'Email already in use',
            }
        });
    });
})