import React, { useContext, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import { stateContext } from '../state/state';

function Notif() {
	const [isFirst, setisFirst] = useState(true)

	useEffect(() => {
		if (isFirst){
			let a = document.getElementById("notification").offsetHeight
			document.documentElement.style.setProperty('--notifMargin', a +"px" )
			setisFirst(false)
		}
		console.log(isFirst,"isFirst")
	}, [isFirst])

	const {state, dispatch} = useContext(stateContext)
	console.log(state,"state")
	useEffect(() => {
		function handleElement(){
			let isNull = document.getElementById("notification")
			if(isNull){
				console.log(true,"test")
				let a = isNull.offsetHeight	
				document.documentElement.style.setProperty('--notifMargin', a +"px" )
				console.log(a,"asassa")
			} 

		}
		window.addEventListener("resize",handleElement)
	}, [])
	return (
		<CSSTransition
		in={state.isShow}
        appear={true}
        unmountOnExit
        timeout={500}
        classNames="item"
		>
		<div id="notification" className="container-fluid position-fixed p-3 bg-light border-bottom notif-container " >
			<div className="m-auto" style={{ maxWidth: "720px" }}>
				<div className="row mr-0 ml-0" style={{ maxWidth: "720px" }}>
					<div className="col-12 col-sm-10 ">
						<p className="text-secondary mb-0">
							By accessing and using this website, you acknowledge
							that you have read and understand our <a href="https://github.com/adebayus">Cookie Policy,
							Privacy Policy</a>, and our <a href="https://github.com/adebayus">Terms of Service</a>.
						</p>
					</div>
					<div className="col-12 col-sm-2 pl-sm-2 mt-3 mt-sm-0 d-flex align-items-center">
						<button onClick={()=> {
							// console.log("onClick")
							dispatch({
								type: "close"
							})
						}} type="button" className="btn btn-primary">Got it </button>
					</div>
				</div>
			</div>
		</div>
		</CSSTransition>

	);
}

export default Notif
