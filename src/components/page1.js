import React, { useState } from "react";
import '../styles/page1.css';

function Page1(props) {

    const [Name, setName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [showErrorMsg, setShowErrorMsg] = useState(false);

    localStorage.setItem('data-info', JSON.stringify(Name));

    const GetDataHandler = () => {
        if (displayName === '' || Name === '') {
            props.secPage(false)
            setShowErrorMsg(true)
        } else {
            props.secPage(true)
        }
    }

    return (
        <>
            <h1 className='head'>Welcome! First things first...</h1>
            <div style={{ color: "#536471" }}>You can always change them later.</div>
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
            <div className='label'>Full Name</div>
            <input
                className='input'
                value={Name}
                onChange={(e) => {
                    if (e.target.value.length === 15) return false;
                    setName(e.target.value);
                }}
            />
            <div className='labelsec'>Display Name</div>
            <input
                className='input'
                value={displayName}
                onChange={(e) => { setDisplayName(e.target.value) }}
            />
            <div>
                <button className='btn' onClick={GetDataHandler}>
                    Create Workspace
                </button>
            </div>
        </>
    )
}

export default Page1