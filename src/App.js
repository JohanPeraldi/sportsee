import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {
  getUserInfo,
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
import styles from './App.module.css';

function App() {
  const [data, setData] = useState();
  const [activityData, setActivityData] = useState();
  const [sessionsLength, setSessionsLength] = useState();
  const [performanceData, setPerformanceData] = useState();
  const { id } = useParams();

  const fetchData = useCallback(async () => {
    const res = await getUserInfo(id);
    setData(res);
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

  if (data && activityData && sessionsLength && performanceData) {
    return (
      <div className={styles.app}>
        <Header firstName={data.data.userInfos.firstName} />
        <DailyActivity data={activityData.data.sessions} />
        <AverageSessionLength data={sessionsLength.data.sessions} />
        <IVFEEC data={performanceData.data} />
        <Score score={data.data.todayScore || data.data.score} />
        <Macros data={data.data.keyData} />
      </div>
    );
  }
}

export default App;
