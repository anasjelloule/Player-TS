import DOMPurify from 'isomorphic-dompurify';
import React, { ReactElement, useState } from 'react'
import { renderToString } from "react-dom/server";
// import { FaBeer } from 'react-icons/fa';
type AppProps = {
    children: React.ReactNode,
    href: string,
    texthref: ReactElement,
    classhref: string, 
};

function Dropdown({ children, href = '#', texthref , classhref = '', }: AppProps): JSX.Element {
    const [isShown, setIsShown] = useState<boolean>(false);
    const reactDom = renderToString(texthref);
    const sanitizedHTML = DOMPurify.sanitize(reactDom);
    return (
        <>
            <li className={`dropdown nav-item d-md-flex align-items-center ${isShown ? 'show' : ''}`} onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)} >

                <a href={href} className={classhref} id="dropdown04" data-toggle="dropdown" aria-expanded={true} 
                 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sanitizedHTML) }}></a>
                <div className={`dropdown-menu dropdown-menu-left ${isShown ? 'show' : ''}`} aria-labelledby="dropdown04" style={{ margin: '0' }} >
                    {children}
                </div>
            </li>

        </>
    )
}

export default Dropdown