import AutoCADlogo from '../assets/image/autoCAD-icon.png'
import ExpoLogo from '../assets/image/expo-go-app-logo.png'
import InsomniaLogo from '../assets/image/insomnia-logo.png'
import InventorLogo from '../assets/image/insomnia-logo.png'

const SkillsList = [

        /* Front-End */
    {
        title: 'Front-End',
        description: 
            <div className="skill__block">
                <div className="skill__item">
                    <img
                      className="skill__icon" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                        alt="react-logo"
                    />
                    <p className="name">React</p>
                </div>
                <div className="skill__item">
                    <img
                      className="skill__icon" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                        alt="react-logo"
                    />
                    <p className="name">React-Native</p>
                </div>
                <div className="skill__item">
                    <img
                      className="skill__icon" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                        alt="html-logo"
                    />
                    <p className="name">HTML5</p>
                </div>
                <div className="skill__item">
                    <img
                      className="skill__icon" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                        alt="css-logo"
                    />
                    <p className="name">CSS3</p>
                </div>
                <div className="skill__item">
                    <img
                      className="skill__icon" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
                        alt="tailwindcss-logo"
                    />
                    <p className="name">Tailwind CSS</p>
                </div>
                <div className="skill__item">
                    <img
                      className="skill__icon" 
                        src={ExpoLogo}
                        alt="expo-go-logo"
                        
                    />
                    <p className="name">Expo</p>
                </div>
            </div>,
    },

        /* Back-End */
    {    
        title: 'Back-End',
        description: 
            <div className="skill__block">
                <div className="skill__item">
                    <img
                      className="skill__icon" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" 
                        alt="express-logo-js"
                    />
                    <p className="name">Express Js</p>
                </div>
                <div className="skill__item">
                    <img
                      className="skill__icon" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" 
                        alt="node-logo-js"
                    />
                    <p className="name">Node Js</p>
                </div>
                <div className="skill__item">
                    <img
                      className="skill__icon" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                        alt="postgresql-logo"
                    />
                    <p className="name">PostgreSQL</p>
                </div>
                <div className="skill__item">
                    <img
                      className="skill__icon" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
                        alt="firebase-logo"
                    />
                    <p className="name">Firebase</p>
                </div>
                <div className="skill__item">
                    <img
                      className="skill__icon" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" 
                        alt="jest-logo"
                    />
                    <p className="name">Jest x TDD</p>
                </div>
                <div className="skill__item">
                    <img
                      className="skill__icon" 
                        src={InsomniaLogo}
                        alt="insomnia-logo"
                    />
                    <p className="name">Insomnia</p>
                </div>
            </div>,
    },
            /* Back-End */
    {    
      title: 'Other Softwares',
      description: 
          <div className="skill__block">
              <div className="skill__item">
                  <img
                    className="skill__icon" 
                      src={AutoCADlogo}
                      alt="autoCAD-logo-js"
                  />
                  <p className="name">AutoCAD</p>
              </div>
              <div className="skill__item">
                  <img
                    className="skill__icon" 
                      src={InventorLogo}
                      alt="node-logo-js"
                  />
                  <p className="name">Inventor</p>
              </div>
              <div className="skill__item">
                  <img
                    className="skill__icon" 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" 
                      alt="Photoshop-logo"
                  />
                  <p className="name">Photoshop</p>
              </div>
          </div>
  },
]

export default SkillsList;