import axios from 'axios';
import DataAdapter from '../adapters/DataAdapter';

// eslint-disable-next-line import/named
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/mockedData';

const baseUrl = 'http://localhost:3000/user/';
const isMockedData = Boolean(process.env.REACT_APP_MOCKEDDATA);

/**
 * Sends an Axios request for the data of the user whose id is passed as an argument to the function.
 * @param { String } id
 * @returns { Object.<firstName: String, scoreData: Integer, keyData: Object.<calorieCount: Integer, proteinCount: Integer, carbohydrateCount: Integer, lipidCount: Integer>> }
 */
export async function getUserData(id) {
  let response;
  if (!isMockedData) {
    try {
      response = await (await axios.get(baseUrl + id)).data.data;
    } catch (error) {
      if (error.request.status === 404) {
        return {
          errorCode: 404,
        };
      }
      if (error.request.status === 0) {
        return {
          errorCode: 503,
        };
      }

      return null;
    }
  } else {
    // This code runs only if fetching mocked data
    response = USER_MAIN_DATA.find((user) => user.id === Number(id));
  }
  const formattedData = new DataAdapter(response);
  const firstName = formattedData.getFirstName();
  const scoreData = formattedData.getScoreData();
  const keyData = formattedData.getKeyData();

  return { firstName, scoreData, keyData };
}

/**
 * Sends an Axios request for the activity data of the user whose id is passed as an argument to the function.
 * @param { String } id
 * @returns { Object.<calories: Integer, day: String, kilogram: Integer> }
 */
export async function getActivityInfo(id) {
  let response;
  if (!isMockedData) {
    try {
      response = await (await axios(`${baseUrl + id}/activity`)).data.data;
    } catch (error) {
      if (error.request.status === 404) {
        return {
          errorCode: 404,
        };
      }
      if (error.request.status === 0) {
        return {
          errorCode: 503,
        };
      }

      return null;
    }
  } else {
    // This code runs only if fetching mocked data
    response = USER_ACTIVITY.find((user) => user.userId === Number(id));
  }
  const data = new DataAdapter(response);
  const formattedData = data.getActivityData();

  return formattedData;
}

/**
 * Sends an Axios request for the average session length data of the user whose id is passed as an argument to the function.
 * @param { String } id
 * @returns { Object.<day: String, sessionLength: Integer> }
 */
export async function getAverageSessionLength(id) {
  let response;
  if (!isMockedData) {
    try {
      response = await (
        await axios(`${baseUrl + id}/average-sessions`)
      ).data.data;
    } catch (error) {
      if (error.request.status === 404) {
        return {
          errorCode: 404,
        };
      }
      if (error.request.status === 0) {
        return {
          errorCode: 503,
        };
      }

      return null;
    }
  } else {
    // This code runs only if fetching mocked data
    response = USER_AVERAGE_SESSIONS.find((user) => user.userId === Number(id));
  }
  const data = new DataAdapter(response);
  const formattedData = data.getSessionLengthData();

  return formattedData;
}

/**
 * Sends an Axios request for the performance data of the user whose id is passed as an argument to the function.
 * @param { String } id
 * @returns { Object.<factor: String, value: Integer> }
 */
export async function getPerformanceData(id) {
  let response;
  if (!isMockedData) {
    try {
      response = await (await axios(`${baseUrl + id}/performance`)).data.data;
    } catch (error) {
      if (error.request.status === 404) {
        return {
          errorCode: 404,
        };
      }
      if (error.request.status === 0) {
        return {
          errorCode: 503,
        };
      }

      return null;
    }
  } else {
    // This code runs only if fetching mocked data
    response = USER_PERFORMANCE.find((user) => user.userId === Number(id));
  }
  const data = new DataAdapter(response);
  const formattedData = data.getPerformanceData();

  return formattedData;
}
