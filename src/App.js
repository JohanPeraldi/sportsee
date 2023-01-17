import AverageSessionLength from './components/AverageSessionLength/AverageSessionLength';
import DailyActivity from './components/DailyActivity/DailyActivity';
import Header from './components/Header/Header';
import IVFEEC from './components/IVFEEC/IVFEEC';
import Macros from './components/Macros/Macros';
import Score from './components/Score/Score';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <DailyActivity />
      <AverageSessionLength />
      <IVFEEC />
      <Score />
      <Macros />
    </div>
  );
}

export default App;
