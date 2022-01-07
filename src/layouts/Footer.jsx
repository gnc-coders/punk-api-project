import React from 'react'
import logo from '../assets/logo.png'
function Footer() {
    return (
        <>
        <hr className="mt-5"/>
            <footer className="container py-5">
                <div className="row">
                    <div className="col-6 col-md">
                        <img src={logo} alt="logo" width={64} />
                    </div>
                    <div className="col-6 col-md">
                        <h5>Team Members</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none text-primary" href="https://github.com/gamzegurcan" rel='noreferrer' target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                                Gamze Gürcan</a></li>
                            <li><a className="link-secondary text-decoration-none text-primary" href="https://github.com/cansuyarkin" rel='noreferrer' target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                                Cansu Yarkın</a></li>
                            <li><a className="link-secondary text-decoration-none text-primary" href="https://github.com/nejlasahin" rel='noreferrer' target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                                Nejla Şahin</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Tech Stack</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none" href="https://developer.mozilla.org/en-US/docs/Web/HTML" rel='noreferrer' target="_blank">HTML</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://developer.mozilla.org/en-US/docs/Web/CSS" rel='noreferrer' target="_blank">CSS</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://getbootstrap.com/" rel='noreferrer' target="_blank">Bootstrap</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://tr.reactjs.org/" rel='noreferrer' target="_blank">React</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://www.npmjs.com/package/react-debounce-input" rel='noreferrer' target="_blank">react-debounce-input</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://www.npmjs.com/package/react-paginate" rel='noreferrer' target="_blank">react-paginate</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Punk API</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none" href="https://punkapi.com/documentation/v2" rel='noreferrer' target="_blank">Documentation</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer