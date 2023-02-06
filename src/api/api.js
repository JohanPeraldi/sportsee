import axios from 'axios';
import DataAdapter from '../adapters/DataAdapter';

const baseUrl = 'http://localhost:3000/user/';

export async function getUserData(id) {
  try {
    const response = await axios.get(baseUrl + id);
    const formattedData = new DataAdapter(response);
    const firstName = formattedData.getFirstName();
    const scoreData = formattedData.getScoreData();
    const keyData = formattedData.getKeyData();

    return { firstName, scoreData, keyData };
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
}

export async function getActivityInfo(id) {
  try {
    const response = await axios(`${baseUrl + id}/activity`);
    const data = new DataAdapter(response);
    const formattedData = data.getActivityData();

    return formattedData;
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
}

export async function getAverageSessionLength(id) {
  try {
    const response = await axios(`${baseUrl + id}/average-sessions`);
    const data = new DataAdapter(response);
    const formattedData = data.getSessionLengthData();

    return formattedData;
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
}

export async function getPerformanceData(id) {
  try {
    const response = await axios(`${baseUrl + id}/performance`);
    const data = new DataAdapter(response);
    const formattedData = data.getPerformanceData();

    return formattedData;
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
}
