import React, { useContext } from 'react'
import { CSSTransition } from 'react-transition-group';
import logo from '../assets/logo.png'
import { stateContext } from '../state/state';
function SectionHero() {
	const {state} = useContext(stateContext)
    return (
		<CSSTransition
		in={state.isShow}
        appear={true}
        // unmountOnExit
        timeout={500}
        classNames="items"
		>
		<div className="section-hero container-fluid p-3 position-relative d-flex justify-content-center align-items-center">
			<img
				src={logo}
				alt = "logo"
				className="logo position-absolute "
				height="70px"
				width="70px"
			></img>
			<div className="texts-hero text-center">
				<h1>Hello! I'm Ade Bayu S</h1>
                <h2 className="font-weight-bold">Consult, Design, and Develop Websites</h2>
				<p className="mb-0">Have something great in mind? Feel free to contact me.</p>
                <p className="mb-0">I'll help you to make it happen.</p>
				<a href="https://github.com/adebayus" className="font-weight-bold contact-btn d-inline-block pt-2 pb-2 pl-3 pr-3 mt-3 text-white text-uppercase border border-white rounded">Let's Make Contact</a>
			</div>
		</div>
		</CSSTransition>
	);
}

export default SectionHero
