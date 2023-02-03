import axios from 'axios';
import DataAdapter from '../adapters/DataAdapter';

const baseUrl = 'http://localhost:3000/user/';

export async function getUserData(id) {
  const response = await axios(baseUrl + id);
  const formattedData = new DataAdapter(response);
  const firstName = formattedData.getFirstName();
  const scoreData = formattedData.getScoreData();
  const keyData = formattedData.getKeyData();

  return { firstName, scoreData, keyData };
}

export async function getActivityInfo(id) {
  const response = await axios(`${baseUrl + id}/activity`);
  const data = new DataAdapter(response);
  const formattedData = data.getActivityData();

  return formattedData;
}

export async function getAverageSessionLength(id) {
  const response = await axios(`${baseUrl + id}/average-sessions`);
  const data = new DataAdapter(response);
  const formattedData = data.getSessionLengthData();

  return formattedData;
}

export async function getPerformanceData(id) {
  const response = await axios(`${baseUrl + id}/performance`);
  const data = new DataAdapter(response);
  const formattedData = data.getPerformanceData();

  return formattedData;
}
