import {useEffect,React} from 'react';

function Home(){
    useEffect(() => {
        document.title = 'Home'
        document.body.style.backgroundColor = "#E5FABF8"
    });
    return (
        <div style={{"margin":"200px"}}>
            <h1>Got a Coupon? <br></br>Validate Your Coupons Here</h1>
        </div>
    )
}
export default Home