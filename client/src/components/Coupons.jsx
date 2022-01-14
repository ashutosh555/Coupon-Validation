import {useState,React, useEffect} from 'react';
import Coupon from './Coupon'

function Coupons(){
    const [coupons,setCoupons] = useState([])
    //update document title
    useEffect(() => {
        document.title = 'Coupons'
        const retrieveCouponsRequestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        fetch('api/retrieve-coupons',retrieveCouponsRequestOptions)
        .then(response => response.json())
        .then(data => {
            setCoupons(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);
    return (
        <div>
            <h1>Coupons</h1>
            <table className="table table-striped overflow-auto">
                <thead>
                    <tr>
                        <th>Created Coupon</th>
                        <th>Minimum Amount</th>
                        <th>Type</th>
                        <th>Discount</th>
                        <th>Created On</th>
                        <th>Expires On</th>
                    </tr>
                </thead>
                <tbody>
                {coupons.length === 0 || coupons.map((value,index) => {
                    return <Coupon key={index} coupon={value}/>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Coupons