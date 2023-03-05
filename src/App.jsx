import { useState } from 'react';

import { Header } from './components/Header/Header';
import { InputRange } from './components/InputRange/InputRange';
import { Chart } from './components/Chart/Chart';

import {
  getCostBackbaze,
  getCostBunny,
  getCostScaleway,
  getCostVultr,
} from './helpers/getCostServices';

import { companies } from './constans/companies';

import styles from './App.module.scss';

function App() {
  const [storage, setStorage] = useState(500);
  const [transfer, setTransfer] = useState(500);
  const [disk, setDisk] = useState('hdd');
  const [type, setType] = useState('multi');

  const costBackbaze = getCostBackbaze(storage, transfer);
  const costBunny = getCostBunny(disk, storage, transfer);
  const costScaleway = getCostScaleway(type, storage, transfer);
  const costVultr = getCostVultr(storage, transfer);

  const pricesCompanies = [costBackbaze, costBunny, costScaleway, costVultr];

  return (
    <div className="container">
      <Header />
      <div className={styles.calculator}>
        <div className={styles.boxInput}>
          <InputRange type={storage} handleChange={setStorage} name="storage" title="Storage" />
          <InputRange type={transfer} handleChange={setTransfer} name="transfer" title="Transfer" />
        </div>

        <div className={styles.boxCharts}>
          <Chart
            company={companies.backblaze}
            cost={costBackbaze}
            pricesCompanies={pricesCompanies}
          />

          <Chart
            company={companies.bunny}
            cost={costBunny}
            handleChange={setDisk}
            pricesCompanies={pricesCompanies}
          />

          <Chart
            company={companies.scaleway}
            cost={costScaleway}
            handleChange={setType}
            pricesCompanies={pricesCompanies}
          />

          <Chart company={companies.vultr} cost={costVultr} pricesCompanies={pricesCompanies} />
        </div>
      </div>
    </div>
  );
}

export default App;
