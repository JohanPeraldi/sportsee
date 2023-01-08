import AverageSessionLength from './components/AverageSessionLength/AverageSessionLength';
import DailyActivity from './components/DailyActivity/DailyActivity';
import Header from './components/Header/Header';
import HorizontalNav from './components/HorizontalNav/HorizontalNav';
import IVFEEC from './components/IVFEEC/IVFEEC';
import KPI from './components/KPI/KPI';
import Macros from './components/Macros/Macros';
import VerticalNav from './components/VerticalNav/VerticalNav';
import InnerWrapper from './layout/InnerWrapper/InnerWrapper';
import OuterWrapper from './layout/OuterWrapper/OuterWrapper';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <HorizontalNav />
      <OuterWrapper>
        <VerticalNav />
        <InnerWrapper>
          <Header />
          <DailyActivity />
          <AverageSessionLength />
          <IVFEEC />
          <KPI />
          <Macros />
        </InnerWrapper>
      </OuterWrapper>
    </div>
  );
}

export default App;
