import axios from 'axios';

export const apiWrapper = (url) => (
    axios.get(url, {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}));