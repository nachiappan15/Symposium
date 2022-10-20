import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'

function ScrollToTop({ children }) {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

const Component = ({ title }) => {
    return (
        <div>
            <p style={{ paddingTop: '150vh' }}>{title}</p>
        </div>
    )
}

export default (ScrollToTop);