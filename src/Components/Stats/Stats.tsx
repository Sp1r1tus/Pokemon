import React from 'react';
import { IPokemonStats } from '../../../models/models';
import { Slider } from '@material-ui/core';
import './Stats.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    slider: {
        '& > *': {
          color: 'green'
        }
      },
  }),
);

interface IStatsProps {
    stats: IPokemonStats;
}

const Stats: React.FC <IStatsProps> = ({ stats }) => {
    const howManyDots = () => {
        let result: React.ReactElement[] = [];
        for (let i = 0; i < stats.effort; i++) {
            result.push(<div className='dots' key={i}/>);
        }
        return(result)
    }
    const classes = useStyles();
    return (
        <div className='stats'>
            <div>
                <div className='stats-static'>{stats.stat.name}</div>
                <Slider
                    className={classes.slider}
                    valueLabelDisplay='on'
                    min={0}
                    max={200}
                    step={1}
                    value={stats.base_stat}     
                />
            </div>
            <div>
                {stats.effort > 0 ? <div className='stats-static'>effort</div> : <></>}
                {howManyDots()}
            </div>
        </div>
    );
}
export default Stats;