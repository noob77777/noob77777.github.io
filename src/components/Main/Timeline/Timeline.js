import React, { Component } from 'react';
import styles from './timeline.module.scss';
import TimelineComponent from './TimelineComponent';
import Astronaut from './Astronaut';

class Timeline extends Component {
    render() {
        return (
            <div className={styles.Timeline + ' Timeline'}>
                <div id='timeline-main' className='container'>
                    <br />
                    <br />
                    <div className='row'>
                        <div className={styles.timelineHeader + ' col s12'}>
                            <h2>Timeline</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className={styles.timelineMain + ' col s12 l6'}>
                            <div>
                                <TimelineComponent />
                            </div>
                        </div>
                        <div
                            className={
                                styles.timelineRight +
                                ' col s12 l6 hide-on-med-and-down'
                            }
                        >
                            <div>
                                <Astronaut />
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

export default Timeline;
