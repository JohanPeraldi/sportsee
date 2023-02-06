import { React, useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  const [error, setError] = useState({});
  const { id } = useParams();

  const fetchData = useCallback(async () => {
    const res = await getUserData(id);
    if (res) {
      setFirstName(res.firstName);
      setScoreData(res.scoreData);
      setKeyData(res.keyData);
    }
    if (res.errorCode === 404) {
      setError({ errorCode: 404 });
    }
    if (res.errorCode === 503) {
      setError({ errorCode: 503 });
    }
    const activityRes = await getActivityInfo(id);
    if (activityRes) {
      setActivityData(activityRes);
    }
    const sessionLengthRes = await getAverageSessionLength(id);
    if (sessionLengthRes) {
      setSessionsLength(sessionLengthRes);
    }
    const performanceRes = await getPerformanceData(id);
    if (performanceRes) {
      setPerformanceData(performanceRes);
    }
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

  return (
    <div className={styles.error}>
      {error.errorCode === 404 && (
        <p>Aucun utilisateur ne correspond à cet id.</p>
      )}
      {error.errorCode === 503 && (
        <p>Le serveur ne répond pas. Veuillez réessayer ultérieurement.</p>
      )}
      <p>
        <Link to="/">Retour à la page principale</Link>
      </p>
    </div>
  );
}

export default App;
