import logo from '../assets/logo.png'

function Footer() {

    return (
        <>
            <hr className="mt-5" />
            <footer className="container py-5">
                <div className="row">
                    <div className="col-6 col-md">
                        <img src={logo} alt="logo" width={64} />
                    </div>
                    <div className="col-6 col-md">
                        <h5>Team Members</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none text-primary" href="https://github.com/gamzegurcan" rel='noreferrer' target="_blank">Gamze Gürcan</a></li>
                            <li><a className="link-secondary text-decoration-none text-primary" href="https://github.com/cansuyarkin" rel='noreferrer' target="_blank">Cansu Yarkın</a></li>
                            <li><a className="link-secondary text-decoration-none text-primary" href="https://github.com/nejlasahin" rel='noreferrer' target="_blank">Nejla Şahin</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Tech Stack</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none" href="https://developer.mozilla.org/en-US/docs/Web/HTML" rel='noreferrer' target="_blank">HTML</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://developer.mozilla.org/en-US/docs/Web/CSS" rel='noreferrer' target="_blank">CSS</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://getbootstrap.com/" rel='noreferrer' target="_blank">Bootstrap</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://ant.design/" rel='noreferrer' target="_blank">Ant Design</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://tr.reactjs.org/" rel='noreferrer' target="_blank">React</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://www.npmjs.com/package/react-debounce-input" rel='noreferrer' target="_blank">react-debounce-input</a></li>
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
