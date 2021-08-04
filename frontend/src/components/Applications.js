import React from 'react';
import './Applications.css';

const APPS_INFO = [
    {
        title: 'Fantasy Football Stats App',
        description: 'MERN stack application that displays statistics for all players and Premier League teams,'
                        + ' and calculates in-play points scored and league tables for a league in'
                        + ' the Premier League\'s Fantasy Football competition.',
        bulletPoints: [
            'React',
            'Redux',
            'Express',
            'MongoDB',
            'Chart.js'
        ],
        urls: {
            app: 'https://fantasy-football-app-r383r.ondigitalocean.app/',
            github: 'https://github.com/steve-999/fantasy-football-app'
        }
    },

    {
        title: 'Colour Scheme App',
        description: 'React application that enables rapid prototyping of colour schemes by combining different colours, fonts,'
                     + ' font sizes and weights.',
        bulletPoints: [
            'React',
            'Redux'
        ],
        urls: {
            app: 'https://colour-scheme-app.web.app/',
            github: 'https://github.com/steve-999/colour-scheme-app'
        }
    },

    {
        title: 'Angular Blog App',
        description: 'Blog application implemented using the MEAN stack. The application includes user authentication using'
                        + ' JSON web tokens (JWT) and blogs can be styled using Markdown and/or HTML.',
        bulletPoints: [
            'Angular',
            'Express',
            'MongoDB',
            'JWT User Authentication'
        ],
        urls: {
            app: 'https://mean-blog-app-896df.ondigitalocean.app/',
            github: 'https://github.com/steve-999/mean-blog-app'
        }
    },

    {
        title: 'Vue.js Blog App',
        description: "Blog application implementing using Vue.js. Google's Firebase authentication is used to log users in and to protect"
                       + " routes, and Firebase's Firestore database is used to store blog and user data.",
        bulletPoints: [
            'Vue',
            'Firebase Firestore Database',
            'Firebase User Authentication'
        ],
        urls: {
            app: 'https://vue-blog-app-3e261.web.app/',
            github: 'https://github.com/steve-999/vue-firebase-blog-app'
        }
    },

    {
        title: 'Image Classification App',
        description: "This React application uses Google's Vision API to classify an image selected by a user."
                      + " The classification results and image file are then stored in"
                      + " Firebase Storage and the Firestore database.",
        bulletPoints: [
            'React',
            'Google Cloud Vision API',
            'Firebase Firestore Database',
            'Firebase Storage'
        ],
        urls: {
            app: 'https://cloud-vision-api-test-290115.web.app/',
            github: 'https://github.com/steve-999/google-cloud-vision-api-label-classification'
        }
    },

    {
        title: 'React WHO Vaccine Wastage Calculator',
        description: 'This application for a World Health Organisation project allowed users to enter'
                     + " different input parameters, and the application then displays a table of results.",
        bulletPoints: [
            'React'
        ],
        urls: {
            app: 'https://who-vaccine-wastage-app.web.app/',
            github: 'https://github.com/steve-999/who-vaccine-wastage-calculator'
        }
    },

    {
        title: 'Angular WHO Vaccine Wastage Calculator',
        description: 'This application performs exactly the same task as the previous React WHO Vaccine Calculator application,'
                      + ' only it is implemented using the Angular framework.',
        bulletPoints: [
            'Angular'
        ],
        urls: {
            app: 'https://who-vaccine-app-angular.web.app/',
            github: 'https://github.com/steve-999/who-vaccine-wastage-calculator-angular'
        }
    },

    {
        title: 'SMS Portal App',
        description: 'This Laravel application allows users to enter a message which is then sent as an SMS text'
                      + ' message to the specified mobile phone number.',
        bulletPoints: [
            'Laravel',
            'Twilio API',
            'Redis cache'
        ],
        urls: {
            app: '',
            github: 'https://github.com/steve-999/Laravel-SMS-Portal'
        }
    },

    {
        title: 'This Web Portfolio App',
        description: 'React application that uses the Nodemailer Node.js package to send emails.',
        bulletPoints: [
            'React',
            'Nodemailer'
        ],
        urls: {
            app: '',
            github: 'https://github.com/steve-999/my-web-portfolio'
        }
    },
];

const AppCard = (props) => {
    const { title, description, bulletPoints, urls } = props.appInfo;
    document.title = 'Steve\'s Web Development Portfolio | Apps';

    return ( 
        <div className="app-card">
            <h3 className="app-card__title">{ title && title }</h3>
            <p className="app-card__description">{ description && description }</p>
            <ul className="app-card__ul">
                { bulletPoints && bulletPoints.map((point, i) => <li key={i} className="app-card__li">{ point }</li>)}
            </ul>
            <div className="app-card__buttons-container">
                <a className="app-card__a" href={urls.app} target="_blank" rel="noreferrer">
                    <button className="app-card__button live-app-button" disabled={urls.app.length === 0}>Live App</button>
                </a>
                <a className="app-card__a" href={urls.github} target="_blank" rel="noreferrer">
                    <button className="app-card__button github-button" disabled={urls.github.length === 0}>Github</button>
                </a>
            </div>
        </div>
    );
}

const Apps = () => {
    return (  
        <div className="apps-container fadeInAnimation">
            <div className="app-cards-container">
                { APPS_INFO && APPS_INFO.map((appInfo, i) => <AppCard key={i} appInfo={appInfo} />) }
            </div>
        </div>
    );
}
 
export default Apps;



