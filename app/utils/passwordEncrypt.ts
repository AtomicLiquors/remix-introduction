import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

export const encrypt = async (rawPassword: string): Promise<string> => {
    return await encryptWithSaltRounds(rawPassword, SALT_ROUNDS);
}

export const encryptWithSaltRounds = async (rawPassword: string, saltRounds: number): Promise<string>  => {
    const encryptedPassword: string = await bcrypt.hash(rawPassword, saltRounds);
    return encryptedPassword;
}

export const verifyPassword = async (inputPassword: string, encryptedPassword: string): Promise<boolean> => {
    const result: boolean = await bcrypt.compare(inputPassword, encryptedPassword);
    return result;
}
