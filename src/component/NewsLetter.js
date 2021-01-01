import React, { useState, useContext, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import { stateContext } from '../state/state';
function NewsLetter() {
    // const [state, setstate] = useState(true)
    const {state, dispatch } = useContext(stateContext)
    useEffect(() => {
        const hRoot =  document.getElementById("root").offsetHeight
        const divide = Math.ceil(hRoot/3)
        const yOffset = window.pageYOffset;
        console.log(yOffset, "yOffset")
        console.log(hRoot, "hroot")
        console.log(divide, "divide")
    }, [])
    useEffect(() => {
        function handleScroll(){
            const hRoot =  document.getElementById("root").offsetHeight
            const divide = Math.ceil(hRoot/3)
            const yOffset = window.pageYOffset;
            console.log(yOffset, "yOffset")
            console.log(hRoot, "hroot")
            console.log(divide, "divide")
            if(yOffset >= divide){
                console.log("asdasdas")
                dispatch({
                    type : "showpanel",
                })
            }
        }

        document.addEventListener("scroll",handleScroll)
        
        
        
    }, [])
    return (
		<CSSTransition
			in={
				!state.newsPanel && !state.closed
					? false
					: state.newsPanel && !state.closed
					? true
					: false
			}
			// in={state.newsPanel}
			appear={true}
			unmountOnExit
			timeout={500}
			classNames="news"
		>
			<div
				style={{
					maxWidth: "500px",
					bottom: "0",
					left: "0",
					zIndex: "99999",
					width: "100%",
					backgroundColor: "rgba(7,123,255,.8)",
				}}
				className="pt-1 pb-4 pl-4 pr-4 position-fixed text-white "
			>
				<div className="d-flex justify-content-end">
					<p
						className="mb-1"
						style={{ cursor: "pointer     " }}
						onClick={() => {
							console.log("clicked");
							dispatch({ type: "closepanel" });
						}}
					>
						<FaTimes />
					</p>
				</div>
				<h4 className="font-weight-bold ">
					Get latest updates in web technologies
				</h4>
				<p>
					I write articles related to web technologies, such as design
					trends, development tools, UI/UX case studies and reviews,
					and more. Sign up to my newsletter to get them all.
				</p>
                <form>
                <div className="row mr-0 ml-0 ">
                    <div className="col-sm-9 col-12 p-0">
                        <div className="form-group mb-0">
                            <input type="email" className="form-control form-control-sm "  placeholder="Email Address"/>
                        </div>
                    </div>
                    <div className="col-sm-3 col-12 p-0 mt-2 mt-sm-0">
                        <button type="submit" onClick={(e)=>{ 
                            e.preventDefault()
                            dispatch({ type: "closepanel" });
                            }} className="btn btn-block btn-sm text-white btn-warning rounded ml-sm-2"> Contact Me !</button>
                    </div>
                </div>
                </form>
			</div>
		</CSSTransition>
	);
}

export default NewsLetter
