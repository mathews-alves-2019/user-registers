import bcrypt from 'bcrypt';

export const returnEncryptPassword = (password: string) => bcrypt.hashSync(password, 10);
// eslint-disable-next-line max-len
export const isPasswordsEqual = (dbPassword: string, requestPassword: string) => bcrypt.compareSync(requestPassword, dbPassword);
