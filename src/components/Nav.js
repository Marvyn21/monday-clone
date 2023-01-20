import logo from '../images/crm-logo.jpg'
const Nav = () => {
    return(
        <nav>
            <div className="Logo-container" >
                <img src={logo} alt="logo" />
            </div>
            <div className='controls-container'>
                <div className='icon' onClick={() => navigate('/ticket')}></div>
                <div className='icon' onClick={() => navigate('/')}></div>
            </div>
        </nav>
    )
}

export default Nav