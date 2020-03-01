import React from 'react';
import { IPokemonStats } from '../../../models/models';
import { Slider } from '@material-ui/core';
import './Stats.css';

interface IStatsProps {
    stats: IPokemonStats;
}

const Stats: React.FC <IStatsProps> = ({ stats }) => {
    const howManyDots = () => {
        let result: React.ReactElement[] = [];
        console.log(stats.effort);
        for (let i = 0; i < stats.effort; i++) {
            console.log(i);
            result.push(<div className='dots' key={i}/>);
        }
        console.log(result);
        return(result)
    }
    return (
        <div className='stats'>
            <div>
                <div className='stats-static'>{stats.stat.name}</div>
                <Slider
                    valueLabelDisplay='auto'
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