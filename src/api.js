import { getEndpoint } from './functions';

export async function getChurches(coords) {
  return fetch(getEndpoint(coords)).then((response) => response.json());
}
