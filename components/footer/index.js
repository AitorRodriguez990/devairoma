import {Fragment} from 'react'

const baseClass = 'da-Footer'

export const Footer = () => {  
  return (
    <Fragment>
      <footer className={baseClass}>
        <div className={`${baseClass}-content`}>
          Hecho por mí usando <a href="https://nextjs.org/" target="_blank">Next.js</a>.
          <ul className={`${baseClass}-social`}>
            <li><a href="https://github.com/AitorRodriguez990" target="_blank"><img src="./static/github.svg" alt="GitHub" width="30" /></a></li>
            <li><a href="https://www.linkedin.com/in/aitorrodriguezfrontend/" target="_blank"><img src="./static/linkedin.svg" alt="LinkedIn" width="30" /></a></li>
          </ul>
        </div>
      </footer>

      <style jsx>{`
        .da-Footer {
          background: #fff;
          padding: 30px 0;
          text-align: center;
        }
        
        .da-Footer-content {
          margin: auto;
          max-width: 800px;
        }

        .da-Footer-content > a {
          color: #000;
        }
        .da-Footer-content > a:after {
          background-color: #000;
          height: 6px;
          left: -1px;
          opacity: 0.2;
          width: calc(100% + 2px);
          z-index: 0;
        }
        .da-Footer-content > a:hover:after {
          opacity: 0.4;
        }

        .da-Footer-social {
          list-style: none;
          margin: 15px auto 0;
          padding: 0;
        }
        .da-Footer-social li {
          display: inline-block;
          margin: 0 10px;
          opacity: 0.7;
          transition: opacity 0.3s;
        }
        .da-Footer-social li:hover {
          opacity: 1;
          
        }
        .da-Footer-social li a:after {
          content: none;
        }
      `}</style>
    </Fragment>
  )
}
