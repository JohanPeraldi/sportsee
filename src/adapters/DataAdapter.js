/**
 * Formats the data received from the backend API
 * in order to be used in Recharts components.
 * @class
 */
export default class DataAdapter {
  constructor(data) {
    this.data = data.data.data;
  }

  /**
   * Returns the current user's first name.
   * @returns { String }
   */
  getFirstName() {
    return this.data.userInfos.firstName;
  }

  /**
   * Returns an object with three key-value pairs for calories, day and kilogram.
   * @returns { Object.<calories: Integer, day: String, kilogram: Integer> }
   */
  getActivityData() {
    const formattedData = this.data.sessions.map((session, index) => {
      return {
        calories: session.calories,
        day: (index + 1).toString(),
        kilogram: session.kilogram,
      };
    });

    return formattedData;
  }

  /**
   * Returns an object with two key-value pairs for day and sessionLength.
   * @returns { Object.<day: String, sessionLength: Integer> }
   */
  getSessionLengthData() {
    const data = this.data.sessions;
    const formattedData = data.map((day, index) => {
      const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
      return {
        day: days[index],
        sessionLength: day.sessionLength,
      };
    });

    return formattedData;
  }

  /**
   * Returns an object with two key-value pairs for factor and value.
   * @returns { Object.<factor: String, value: Integer> }
   */
  getPerformanceData() {
    const { data } = this.data;
    const factors = [
      'Cardio',
      'Energie',
      'Endurance',
      'Force',
      'Vitesse',
      'Intensité',
    ];
    const formattedData = data.map((el) => {
      return {
        factor: factors[el.kind - 1],
        value: el.value,
      };
    });
    const reverseFormattedData = formattedData.reverse();

    return reverseFormattedData;
  }

  /**
   * Returns an object with three key-value pairs for name, percentage and fill.
   * @returns { Object.<name: String="Score", percentage: Integer, fill: String="#ff0000"> }
   */
  getScoreData() {
    const score = this.data.todayScore || this.data.score;
    const scorePercentage = score * 100;
    return {
      name: 'Score',
      percentage: scorePercentage,
      fill: '#ff0000',
    };
  }

  /**
   * Returns an object with four key-value pairs for calorieCount, proteinCount, carbohydrateCount and lipidCount.
   * @returns { Object.<calorieCount: Integer, proteinCount: Integer, carbohydrateCount: Integer, lipidCount: Integer > }
   */
  getKeyData() {
    return this.data.keyData;
  }
}
