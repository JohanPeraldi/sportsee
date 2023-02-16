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
  if (!isMockedData) {
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
  // Code below runs only if fetching mocked data
  const currentUser = USER_MAIN_DATA.find((user) => user.id === Number(id));
  const { firstName } = currentUser.userInfos;
  const { score, keyData } = currentUser;
  const scorePercentage = score * 100;
  const scoreData = {
    name: 'Score',
    percentage: scorePercentage,
    fill: '#ff0000',
  };

  return { firstName, scoreData, keyData };
}

/**
 * Sends an Axios request for the activity data of the user whose id is passed as an argument to the function.
 * @param { String } id
 * @returns { Object.<calories: Integer, day: String, kilogram: Integer> }
 */
export async function getActivityInfo(id) {
  if (!isMockedData) {
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
  // Code below runs only if fetching mocked data
  const currentUserActivityData = USER_ACTIVITY.find(
    (user) => user.userId === Number(id)
  );
  const formattedData = currentUserActivityData.sessions.map(
    (session, index) => {
      return {
        calories: session.calories,
        day: (index + 1).toString(),
        kilogram: session.kilogram,
      };
    }
  );

  return formattedData;
}

/**
 * Sends an Axios request for the average session length data of the user whose id is passed as an argument to the function.
 * @param { String } id
 * @returns { Object.<day: String, sessionLength: Integer> }
 */
export async function getAverageSessionLength(id) {
  if (!isMockedData) {
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
  // Code below runs only if fetching mocked data
  const currentUserAverageSessions = USER_AVERAGE_SESSIONS.find(
    (user) => user.userId === Number(id)
  );
  const formattedData = currentUserAverageSessions.sessions.map(
    (day, index) => {
      const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
      return {
        day: days[index],
        sessionLength: day.sessionLength,
      };
    }
  );

  return formattedData;
}

/**
 * Sends an Axios request for the performance data of the user whose id is passed as an argument to the function.
 * @param { String } id
 * @returns { Object.<factor: String, value: Integer> }
 */
export async function getPerformanceData(id) {
  if (!isMockedData) {
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
  // Code below runs only if fetching mocked data
  const currentUserPerformanceData = USER_PERFORMANCE.find(
    (user) => user.userId === Number(id)
  );
  const factors = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ];
  const formattedData = currentUserPerformanceData.data.map((el) => {
    return {
      factor: factors[el.kind - 1],
      value: el.value,
    };
  });
  const reverseFormattedData = formattedData.reverse();

  return reverseFormattedData;
}
