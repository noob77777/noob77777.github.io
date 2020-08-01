import React, { Component } from 'react';
import styles from './navbar.module.scss';
import M from 'materialize-css';

const scrollFunction = () => {
    const navbar = document.getElementById('Navbar');
    if (window.scrollY > 555) {
        navbar.classList.remove('transparent');
        navbar.classList.add('solid-nav');
    } else {
        navbar.classList.remove('solid-nav');
        navbar.classList.add('transparent');
    }
};

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                <li key='Home'>
                    <a href='/#header'>Home</a>
                </li>,
                <li key='CP'>
                    <a href='/#cp-main'>Competitive Programming</a>
                </li>,
                <li key='Timeline'>
                    <a href='/#timeline-main'>Timeline</a>
                </li>,
                <li key='Projects'>
                    <a href='/#projects-main'>Projects</a>
                </li>,
                <li key='Skills'>
                    <a href='/#skills-main'>Skills</a>
                </li>,
                <li key='Contact'>
                    <a href='/#contact-main'>Contact</a>
                </li>,
            ],
            brandLogo: (
                <a href='/#header' className='brand-logo'>
                    noob77777
                </a>
            ),
        };
        this.preProcessor = this.preProcessor.bind(this);
    }

    preProcessor() {
        window.addEventListener('scroll', scrollFunction);
    }

    componentDidMount() {
        M.AutoInit();
        this.preProcessor();
    }

    render() {
        return (
            <nav
                className={styles.Navbar + ' Navbar nav-wrapper transparent'}
                id='Navbar'
            >
                <div className='container'>
                    {this.state.brandLogo}
                    <a
                        href='#Navbar'
                        className='sidenav-trigger'
                        data-target='mobile-menu'
                    >
                        <i className='material-icons'>menu</i>
                    </a>
                    <ul className='right hide-on-med-and-down'>
                        {this.state.menuItems}
                    </ul>
                    <ul
                        className={styles.sidenav + ' sidenav'}
                        id='mobile-menu'
                    >
                        <br />
                        {this.state.menuItems}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
