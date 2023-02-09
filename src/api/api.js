import axios from 'axios';
import DataAdapter from '../adapters/DataAdapter';

// eslint-disable-next-line import/named
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/mockedData';

const isMockedData = true;
// const isMockedData = false;
const baseUrl = 'http://localhost:3000/user/';

export async function getUserData(id) {
  const currentUser = USER_MAIN_DATA.find((user) => user.id === Number(id));

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

  const { firstName } = currentUser.userInfos;
  const { score } = currentUser;
  const scorePercentage = score * 100;
  const scoreData = {
    name: 'Score',
    percentage: scorePercentage,
    fill: '#ff0000',
  };
  const { keyData } = currentUser;

  return { firstName, scoreData, keyData };
}

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
