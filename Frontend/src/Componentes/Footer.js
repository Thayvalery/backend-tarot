import React from 'react';



export const Footer = () => {
    return (
        <footer >
            <div className='footer-content'>
                <h3>Hechizada</h3>
                <p>Cree en la Magia que hay en Ti</p>
                <ul className='socials'>
                    <li><a href='https://www.instagram.com/hechizada.arg/?igshid=MWZjMTM2ODFkZg%3D%3D'><box-icon type='logo' name='instagram'></box-icon></a></li>
                    <li><a href='https://github.com/Thayvalery'><box-icon type='logo' name='github'></box-icon></a></li>
                    <li><a href='#'><box-icon type='logo' name='linkedin'></box-icon></a></li>
                </ul>
            </div>
            <div className='footer-bottom'>
<p>Copyright &copy; 2023 Hechizada. designed by <span>Thailys Valery</span></p>
            </div>
        </footer>
    );
};

export default Footer;