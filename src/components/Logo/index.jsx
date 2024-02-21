import React from 'react'
import LogoSerpro from '../../imgs/LogoSe.jpg'

const Logo = () => {
    return (
        <div className='logo'>
            <div className="logo-icon">
                <span><img src={LogoSerpro} alt='Diario de Ocorrencias'
                    style={{ width: '100%', height: '100%', borderRadius: '70px'}} /></span>
            </div>
        </div>
    )
}

export default Logo
