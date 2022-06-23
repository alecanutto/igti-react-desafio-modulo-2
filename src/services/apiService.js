import { read } from './httpService';

export async function apiGetAllCities() {
  const data = await read('/cities');
  return data;
}

export async function apiGetAllElections() {
  const data = await read('/election');
  return data;
}

export async function apiGetAllCandidates() {
  const data = await read('/candidates');
  return data;
}

export async function apiGetElectionByCity(cityId) {
  const data = await read(`/election?cityId=${cityId}`);
  return data;
}

export async function apiGetCandidateById(candidateId) {
  const data = await read(`/candidates?id=${candidateId}`);
  return data;
}
