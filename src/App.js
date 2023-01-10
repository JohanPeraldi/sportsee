import AverageSessionLength from './components/AverageSessionLength/AverageSessionLength';
import DailyActivity from './components/DailyActivity/DailyActivity';
import Header from './components/Header/Header';
import IVFEEC from './components/IVFEEC/IVFEEC';
import KPI from './components/KPI/KPI';
import Macros from './components/Macros/Macros';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <DailyActivity />
      <AverageSessionLength />
      <IVFEEC />
      <KPI />
      <Macros />
    </div>
  );
}

export default App;
