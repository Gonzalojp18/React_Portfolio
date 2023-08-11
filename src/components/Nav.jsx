import './Nav.css'



const Nav = () => {

    return (
        <nav className='navMenu'>
            <ul className='menu'>
            <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills & Tech</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>

    )
}

export default Nav;
