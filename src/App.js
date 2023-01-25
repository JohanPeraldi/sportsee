import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
//import axios from 'axios';
import { getUserInfo } from './api/api';
import AverageSessionLength from './components/AverageSessionLength/AverageSessionLength';
import DailyActivity from './components/DailyActivity/DailyActivity';
import Header from './components/Header/Header';
import IVFEEC from './components/IVFEEC/IVFEEC';
import Macros from './components/Macros/Macros';
import Score from './components/Score/Score';
import styles from './App.module.css';

function App() {
  const [data, setData] = useState();
  //const baseUrl = 'http://localhost:3000/user/';
  const { id } = useParams();
  //const url = baseUrl + id;

  const fetchData = useCallback(async () => {
    //const response = await axios(url);
    const res = await getUserInfo(id);
    setData(res);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (data) {
    console.group('*** DATA ***');
    console.log('User id: ', data.data.id);
    console.log('User first name: ', data.data.userInfos.firstName);
    console.groupEnd();

    return (
      <div className={styles.app}>
        <Header firstName={data.data.userInfos.firstName} />
        <DailyActivity />
        <AverageSessionLength />
        <IVFEEC />
        <Score />
        <Macros />
      </div>
    );
  }
}

export default App;
