import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 1000,
    iteration: 3500,
};
export default function () {
    http.put('https://reqres.in/api/users/2');
    sleep(2);
}