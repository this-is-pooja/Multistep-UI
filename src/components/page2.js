import { useState } from 'react';
import '../styles/page2.css';

function Page2(props) {

    const [WorkspaceName, setWorkspaceName] = useState("")
    const [showErrorMsg, setShowErrorMsg] = useState(false)

    const GetDataHandler = () => {
        if (WorkspaceName === '') {
            props.ThirdPage(false)
            setShowErrorMsg(true)
        } else {
            props.ThirdPage(true)
        }
    }
    return (
        <>
            <h1 className='sechead'>Let's set up a home for all your work</h1>
            <div style={{ color: "#536471" }}>You can always create another Workspace later.</div>
            {
                showErrorMsg &&
                <div
                    style={{
                        color: "#FF0000",
                        marginTop: "10px"
                    }}>
                    Please fill all information.
                </div>
            }
            <div className='seclabel'>Workspace Name</div>
            <input
                className='secinput'
                value={WorkspaceName}
                onChange={(e) => {
                    setWorkspaceName(e.target.value);
                }}
            />
            <div className='seclabelsec'>
                Workspace URL
                <span
                    style={{
                        color: "#cbd2d7",
                        marginLeft: "4px"
                    }}>
                    {"(optional)"}
                </span>
            </div>
            <div className='email-container'>
                <div className='emailPlaceholder'>www.eden.com/</div>
                <input className='secinputEmail' />
            </div>
            <div>
                <button
                    className='btn'
                    onClick={GetDataHandler}
                >
                    Create Workspace
                </button>
            </div>
        </>
    )
}

export default Page2