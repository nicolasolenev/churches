import { ENDPOINT } from './vars';

export function getEndpoint(coords) {
  return `${ENDPOINT}?lat=${coords[0]}&long=${coords[1]}&pg=1`;
}

export function getFilteredChurches(churches) {
  return churches.map((church) => {
    return {
      name: church.name,
      address: church.church_address_street_address,
      phone: church.phone_number,
      url: church.url,
      latitude: church.latitude,
      longitude: church.longitude,
    };
  });
}
