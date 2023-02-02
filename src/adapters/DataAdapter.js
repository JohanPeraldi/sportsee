export default class DataAdapter {
  constructor(data) {
    this.data = data.data.data;
  }
  getFirstName() {
    return this.data.userInfos.firstName;
  }
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
  getPerformanceData() {
    const data = this.data.data;
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
  getScoreData() {
    const score = this.data.todayScore || this.data.score;
    const scorePercentage = score * 100;
    return {
      name: 'Score',
      percentage: scorePercentage,
      fill: '#ff0000',
    };
  }
  getKeyData() {
    return this.data.keyData;
  }
}
