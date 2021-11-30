import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    first: {
      executor: 'constant-vus',
      vus: 1,
      duration: '60s',
    },
    second: {
      executor: 'constant-vus',
      vus: 1,
      startTime: '240s',
      duration: '120s',
    }
  }
}

export default function () {
  http.get(__ENV.TARGET_URL);
  sleep(10);
}
