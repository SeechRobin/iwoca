import { apiWrapper } from './wrapper';

const BASE_URL_API = "https://www.mocky.io/v2/5d4aa9e93300006f000f5ea9";

export const getLoanRules = () => (
    apiWrapper(`${BASE_URL_API}`)
    .then(({ data }) => data)
);