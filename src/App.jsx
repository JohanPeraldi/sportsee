import { React, useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {
  getUserData,
  getActivityInfo,
  getAverageSessionLength,
  getPerformanceData,
} from './api/api';
import AverageSessionLength from './components/AverageSessionLength/AverageSessionLength';
import DailyActivity from './components/DailyActivity/DailyActivity';
import Header from './components/Header/Header';
import IVFEEC from './components/IVFEEC/IVFEEC';
import Macros from './components/Macros/Macros';
import Score from './components/Score/Score';
import styles from './App.module.scss';

function App() {
  const [firstName, setFirstName] = useState();
  const [activityData, setActivityData] = useState();
  const [sessionsLength, setSessionsLength] = useState();
  const [performanceData, setPerformanceData] = useState();
  const [scoreData, setScoreData] = useState();
  const [keyData, setKeyData] = useState();
  const { id } = useParams();

  const fetchData = useCallback(async () => {
    const res = await getUserData(id);
    setFirstName(res.firstName);
    setScoreData(res.scoreData);
    setKeyData(res.keyData);
    const activityRes = await getActivityInfo(id);
    setActivityData(activityRes);
    const sessionLengthRes = await getAverageSessionLength(id);
    setSessionsLength(sessionLengthRes);
    const performanceRes = await getPerformanceData(id);
    setPerformanceData(performanceRes);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (
    firstName &&
    activityData &&
    sessionsLength &&
    performanceData &&
    scoreData &&
    keyData
  ) {
    return (
      <div className={styles.app}>
        <Header firstName={firstName} />
        <DailyActivity data={activityData} />
        <AverageSessionLength data={sessionsLength} />
        <IVFEEC data={performanceData} />
        <Score data={scoreData} />
        <Macros data={keyData} />
      </div>
    );
  }
}

export default App;
