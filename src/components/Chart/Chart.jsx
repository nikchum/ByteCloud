import { useMediaQuery } from 'react-responsive';
import { getProgressPrecent } from '../../helpers/getProgressPrecent';
import { isLowPrice } from '../../helpers/isLowPrice';

import styles from './Chart.module.scss';

export const Chart = ({ company, cost, handleChange, pricesCompanies }) => {
  const { name, icon, color, options } = company;

  const isMobile = useMediaQuery({ maxWidth: 660 });

  return (
    <div className={styles.chart}>
      <div className={styles.company}>
        <div className={styles.name}>
          {name}

          {options && (
            <form
              className={styles.form}
              onChange={e => {
                handleChange(e.target.value);
              }}
            >
              {options.map(el => (
                <label className={styles.label} key={el.value}>
                  <input
                    type="radio"
                    name={el.name}
                    value={el.value}
                    defaultChecked={el.defaultChecked}
                  />
                  {el.title}
                </label>
              ))}
            </form>
          )}
        </div>
        <img className={styles.logo} src={icon} alt="logo" />
      </div>

      <div className={styles.progressBox}>
        <span
          className={styles.progress}
          style={{
            backgroundColor: `${isLowPrice(cost, pricesCompanies) ? color : 'gray'}`,
            ...(isMobile
              ? { height: `${getProgressPrecent(cost)}%` }
              : { width: `${getProgressPrecent(cost)}%` }),
          }}
        >
          <span className={styles.procent}>{cost}$</span>
        </span>
      </div>
    </div>
  );
};
