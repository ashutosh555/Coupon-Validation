import {useState,useEffect,React} from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/AddCoupon.css';
//configur toast 
toast.configure()
function AddCoupon(){
    //formData state hook
    const [formData, updateFormData] = useState({
        'couponType':"FLAT",
        'couponCode':"",
        'expiryDate':"",
        'minimumAmount':"",
        'discount':""
    })

    //update document title
    useEffect(() => {
        document.title = 'Add Coupon'
    }, []);

    //handle changes in formData
    const handleChange = (e) => {
        updateFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
    };

    

    //call Backend API to add coupon
    const addCoupon = (e) => {
        e.preventDefault()
        toast.success('Processing Coupon. Please wait')
        const addCouponRequestOptions = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        };
        fetch('api/add-coupon',addCouponRequestOptions)
        .then(()=> {
            console.log(formData)
            toast.success('Coupon Added!!')
        })
        .catch((error) => {
            toast.error('error occured please try again')
        });
    };
    //render HTML
    return (
        <div style={{"width":"80vh"}} className="container">  
            <h1>Add Coupon</h1>
            <form onSubmit={addCoupon}>
                <div className="form-group">
                    <label>Coupon Code</label>
                    <input type = "text" required name="couponCode" onChange={handleChange}
                    className="form-control"/> 
                </div>
                <div className="form-group">
                    <label>Minimum Amount</label>
                    <input type = "Number" required name="minimumAmount" onChange={handleChange}
                    className="form-control"/> 
                </div>
                <div className="form-group">
                    <label>Coupon Type</label> 
                    <select name="couponType" className="form-control" onChange={handleChange}>
                        <option value="FLAT">FLAT</option>
                        <option value="PERCENTAGE">PERCENTAGE</option>
                    </select>
                </div>  

                <div className="form-group">
                    <label>Discount</label> 
                    <input type = "Number" required name="discount" onChange={handleChange}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="datetime-local" id="expiryDate" onChange={handleChange} className="form-control" required name="expiryDate"/>
                </div>
                
                <div className="form-group">
                    <button
                    className="btn btn-success addCouponButton">Add Coupon</button>
                </div> 

            </form> 
        </div>
    )
}

export default AddCoupon