import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '1232',
        };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('user'),
        )).toBe({ username: 'user' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '1232',
        };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123'),
        )).toBe({ password: '123' });
    });
});
