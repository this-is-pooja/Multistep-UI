import React, { useState } from "react";
import '../styles/page3.css';
import { BsFillPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

function Page3(props) {

    const [selectSelf, setSelectSelf] = useState(true)
    const [selectTeam, setSelectTeam] = useState(false)

    const selfSelectHandler = () => {
        setSelectSelf(true)
        setSelectTeam(false)
    }
    const teamSelectHandler = () => {
        setSelectSelf(false)
        setSelectTeam(true)
    }
    
    return (
        <>
            <h1 className='head'>How are you planning to use Eden?</h1>
            <div style={{ color: "#536471" }}>
                We'll streamline your setup experience accordingly.
            </div>
            <div className='container'>
                <div
                    className='select'
                    style={{
                        marginRight: "24px",
                        border: selectSelf ? "1px solid rgb(110, 5, 209)" : "1px solid #cbd2d7"
                    }}>
                    <div
                        style={{ padding: "20px" }}
                        onClick={selfSelectHandler}
                    >
                        <BsFillPersonFill
                            fontSize="2rem"
                            style={{
                                marginRight: "6rem",
                                color: selectSelf && "rgb(110, 5, 209)"
                            }} />
                        <div className='box-title'>For myself</div>
                        <div className='subhead'>Write better.Think more clearly Stay organised.</div>
                    </div>
                </div>
                <div
                    className='select'
                    style={{ border: selectTeam ? "1px solid rgb(110, 5, 209)" : "1px solid #cbd2d7" }}>
                    <div
                        style={{ padding: "20px" }}
                        onClick={teamSelectHandler}
                    >
                        <RiTeamFill
                            fontSize="2rem"
                            style={{
                                marginRight: "6rem",
                                color: selectTeam && "rgb(110, 5, 209)"
                            }}
                        />
                        <div className='box-title'>With my team</div>
                        <div className='subhead'>Wikis, docs, tasks, & projects, all in one place.</div>
                    </div>
                </div>
            </div>
            <div>
                <button className='btn' onClick={() => props.LastPage(true)}>
                    Create Workspace
                </button>
            </div>
        </>
    )
}

export default Page3