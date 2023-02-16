/* eslint-disable import/prefer-default-export */
export const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: 'Annie',
      lastName: 'Malières',
      age: 24,
    },
    score: 0.89,
    keyData: {
      calorieCount: 3754,
      proteinCount: 334,
      carbohydrateCount: 127,
      lipidCount: 2,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: 'Oscar',
      lastName: 'Tonpate',
      age: 78,
    },
    score: 0.78,
    keyData: {
      calorieCount: 1633,
      proteinCount: 38,
      carbohydrateCount: 505,
      lipidCount: 228,
    },
  },
];

export const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      {
        day: '2023-02-01',
        kilogram: 80,
        calories: 240,
      },
      {
        day: '2023-02-02',
        kilogram: 80,
        calories: 220,
      },
      {
        day: '2023-02-03',
        kilogram: 81,
        calories: 280,
      },
      {
        day: '2023-02-04',
        kilogram: 81,
        calories: 290,
      },
      {
        day: '2023-02-05',
        kilogram: 80,
        calories: 160,
      },
      {
        day: '2023-02-06',
        kilogram: 78,
        calories: 162,
      },
      {
        day: '2023-02-07',
        kilogram: 76,
        calories: 390,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: '2023-02-09',
        kilogram: 70,
        calories: 180,
      },
      {
        day: '2023-02-10',
        kilogram: 70,
        calories: 250,
      },
      {
        day: '2023-02-11',
        kilogram: 72,
        calories: 230,
      },
      {
        day: '2023-02-12',
        kilogram: 73,
        calories: 150,
      },
      {
        day: '2023-02-13',
        kilogram: 70,
        calories: 190,
      },
      {
        day: '2023-02-14',
        kilogram: 70,
        calories: 210,
      },
      {
        day: '2023-02-15',
        kilogram: 71,
        calories: 220,
      },
    ],
  },
];

export const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 45,
      },
      {
        day: 2,
        sessionLength: 55,
      },
      {
        day: 3,
        sessionLength: 45,
      },
      {
        day: 4,
        sessionLength: 30,
      },
      {
        day: 5,
        sessionLength: 25,
      },
      {
        day: 6,
        sessionLength: 35,
      },
      {
        day: 7,
        sessionLength: 20,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: 1,
        sessionLength: 22,
      },
      {
        day: 2,
        sessionLength: 28,
      },
      {
        day: 3,
        sessionLength: 26,
      },
      {
        day: 4,
        sessionLength: 29,
      },
      {
        day: 5,
        sessionLength: 0,
      },
      {
        day: 6,
        sessionLength: 0,
      },
      {
        day: 7,
        sessionLength: 0,
      },
    ],
  },
];

export const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      {
        value: 125,
        kind: 1,
      },
      {
        value: 120,
        kind: 2,
      },
      {
        value: 160,
        kind: 3,
      },
      {
        value: 70,
        kind: 4,
      },
      {
        value: 130,
        kind: 5,
      },
      {
        value: 90,
        kind: 6,
      },
    ],
  },
  {
    userId: 18,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      {
        value: 45,
        kind: 1,
      },
      {
        value: 55,
        kind: 2,
      },
      {
        value: 60,
        kind: 3,
      },
      {
        value: 90,
        kind: 4,
      },
      {
        value: 110,
        kind: 5,
      },
      {
        value: 100,
        kind: 6,
      },
    ],
  },
];
