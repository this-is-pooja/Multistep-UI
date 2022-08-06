import { TiTick } from "react-icons/ti";
import '../styles/page4.css';

function Page4() {

    const Launch = () => {
        window.location.reload(false);
    }
    const data = localStorage.getItem('data-info');
    const Name = JSON.parse(data);

    return (
        <>
            <div className="success-circle">
                <TiTick color="#fff" style={{ marginTop: "7px", fontSize: "3rem" }} />
            </div>
            <div >
                <h1 className='success'>Congratulations {Name}!</h1>
                <div style={{ color: "#536471" }}>You have completed onboarding, you can start using the Eden!</div>
                <div>
                    <button className='btn' onClick={Launch}>
                        Launch Eden
                    </button>
                </div>
            </div>
        </>
    )
}

export default Page4