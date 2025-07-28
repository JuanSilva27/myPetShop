import { describe, test, expect } from 'vitest';
import { userRegister } from './user-register';

describe('UserRegister Use Case', () => {
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
        })
        const result = userRegister(payload);
        expect(result).toEqual({
            error: {
                code: 'InvalidData',
                message: 'Email is required',
            }
        });
})