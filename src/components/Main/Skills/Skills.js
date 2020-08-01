import React, { Component } from 'react';
import styles from './skills.module.scss';
import circle from './circle.scss';

class Skills extends Component {
    render() {
        return (
            <div className={styles.Skills + ' Skills'}>
                <div id='skills-main' className='container'>
                    <br />
                    <br />
                    <div className='row'>
                        <div className={styles.header + ' col s12'}>
                            <h2>Skills</h2>
                        </div>
                    </div>
                    <div className={'row ' + circle.bruh}>
                        <div className={'col s12 l4 ' + styles.circleCol}>
                            <div className='c100 p80 big center'>
                                <span>4/5</span>
                                <div className='slice'>
                                    <div className='bar'></div>
                                    <div className='fill'></div>
                                </div>
                            </div>
                            <h5>C, C++, Python</h5>
                            <h5>Data Structures and Algorithms</h5>
                        </div>
                        <div className={'col s12 l4 ' + styles.circleCol}>
                            <div className='c100 p70 big center'>
                                <span>3.5/5</span>
                                <div className='slice'>
                                    <div className='bar'></div>
                                    <div className='fill'></div>
                                </div>
                            </div>
                            <h5>ReactJS, NodeJS, PHP, MySQL</h5>
                        </div>
                        <div className={'col s12 l4 ' + styles.circleCol}>
                            <div className='c100 p60 big center'>
                                <span>3/5</span>
                                <div className='slice'>
                                    <div className='bar'></div>
                                    <div className='fill'></div>
                                </div>
                            </div>
                            <h5>Database Systems</h5>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default Skills;
