import React, { Component } from 'react';
import styles from './timelinecomponent.module.scss';

class Timeline extends Component {
    render() {
        return (
            <div className={styles.TimelineComponent}>
                <div className={styles.container}>
                    <ul>
                        <li>
                            <div>
                                <span></span>
                                <div className={styles.title}>CodeChef</div>
                                <div className={styles.info}>
                                    Software Engineering Intern
                                </div>
                                <div className={styles.type}>May - July</div>
                            </div>{' '}
                            <span className={styles.number}>
                                <span>2020</span>
                            </span>
                        </li>
                        <li>
                            <div>
                                <span></span>
                                <div className={styles.title}>
                                    Jadavpur University
                                </div>
                                <div className={styles.info}>
                                    Computer Science and Engineering
                                </div>
                                <div className={styles.type}>
                                    2018 - Present
                                </div>
                            </div>{' '}
                            <span className={styles.number}>
                                <span>2018</span>
                            </span>
                        </li>
                        <li>
                            <div>
                                <span></span>
                                <div className={styles.title}>JEE Advanced</div>
                                <div className={styles.info}>
                                    All India Rank
                                </div>
                                <div className={styles.type}>3422</div>
                                <br />
                                <div className={styles.title}>WBJEE</div>
                                <div className={styles.info}>Rank</div>
                                <div className={styles.type}>69</div>
                            </div>{' '}
                            <span className={styles.number}>
                                <span>2018</span>
                            </span>
                        </li>
                        <li>
                            <span></span>
                            <div>
                                <div className={styles.title}>
                                    South Point High School
                                </div>
                                <div className={styles.info}>CBSE Class 12</div>
                                <div className={styles.type}>96.8%</div>
                            </div>{' '}
                            <span className={styles.number}>
                                <span>2018</span>
                            </span>
                        </li>
                        <li>
                            <span></span>
                            <div>
                                <div className={styles.title}>
                                    South Point High School
                                </div>
                                <div className={styles.info}>
                                    Madhyamik Examination
                                </div>
                                <div className={styles.type}>89%</div>
                            </div>{' '}
                            <span className={styles.number}>
                                <span>2016</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Timeline;
