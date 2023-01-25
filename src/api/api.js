import axios from 'axios';

const baseUrl = 'http://localhost:3000/user/';
/* Endpoints */
//const userInfoUrl = baseUrl + id;
//const activityUrl = userInfoUrl + '/activity';
//const averageSessionsUrl = userInfoUrl + '/average-sessions';
//const performanceUrl = userInfoUrl + '/performance';

export async function getUserInfo(id) {
  const response = await axios(baseUrl + id);

  return response.data;
}

export async function getActivityInfo(id) {
  const response = await axios(baseUrl + id + '/activity');

  return response.data;
}

export async function getAverageSessionLength(id) {
  const response = await axios(baseUrl + id + '/average-sessions');

  return response.data;
}
