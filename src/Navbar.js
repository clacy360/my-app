
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

export default function Navbar(){
    
    return <nav className="nav">
        <div className='site-title'>CSS480</div>
        {/* <CustomLink to="/" className="site-title">CSS480</CustomLink> */}
        <ul>
            
            <CustomLink to="/Home">Home</CustomLink>
            <CustomLink to="/ThingsToRead">Things to Read</CustomLink>
            <CustomLink to="/Snorlax">Snorlax</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch ({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
        <Link to={to}{...props}>{children}</Link>
        </li>
    )

}

