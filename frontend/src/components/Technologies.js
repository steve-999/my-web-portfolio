import React from 'react';
import './Technologies.css';

const LOGOS = [
    { img_fname: 'react_logo.png',      text: 'React',      padding: '26px' },
    { img_fname: 'redux_logo.png',      text: 'Redux',      padding: '24px' },
    { img_fname: 'angular_logo.png',    text: 'Angular',    padding: '20px' },
    { img_fname: 'vue_logo.png',        text: 'Vue',        padding: '26px' },
    { img_fname: 'javascript_logo.png', text: 'JavaScript', padding: '26px' },
    { img_fname: 'node_logo.png',       text: 'Node.js',    padding: '40px 0' },
    { img_fname: 'mongodb_logo.png',    text: 'MongoDB',    padding: '22px'  },
    { img_fname: 'git_logo.png',        text: 'Git',        padding: '38px 0' },
    { img_fname: 'python_logo.png',     text: 'Python',     padding: '26px' },
    { img_fname: 'django_logo.png',     text: 'Django',     padding: '30px 0' },
    { img_fname: 'php_logo.png',        text: 'PHP',        padding: '34px 0' },
    { img_fname: 'laravel_logo.png',    text: 'Laravel',    padding: '22px 0' },
    { img_fname: 'html_logo.png',       text: 'HTML5',      padding: '26px' },
    { img_fname: 'css_logo.png',        text: 'CSS3',       padding: '26px' },
    { img_fname: 'mysql_logo.png',      text: 'MySQL',      padding: '30px 10px' },
    { img_fname: 'firebase_logo.png',   text: 'Firebase',   padding: '24px 10px' },
]


const Technologies = () => {
    document.title = 'Steve\'s Web Development Portfolio | Technologies';

    const getLogos = () => {
        const JSX = LOGOS.map(d => {
            const className = d.text.replace('.js', '').toLowerCase();
            return (
                <div className="logo-card" key={className}>
                    <img className={className} style={{padding: d.padding}} src={`./images/logos/${d.img_fname}`} alt={`${className} logo`}/>
                    <p className="logo-card__text">{ d.text }</p>
                </div>
            );
        });
        return JSX;
    }

    return (  
        <div className="technologies-container fadeInAnimation">
            <p className="page-intro-text">I have experience with the following technologies.</p>
            <div className="logos-container">
                { getLogos() }
            </div>
        </div>
    );
}
 
export default Technologies;