import {React} from 'react'

function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">HOME</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <button><a className="nav-item nav-link" href="/add-coupon">CREATE COUPON</a></button>
            <a className="nav-item nav-link active" href="/apply-coupon">APPLY COUPON <span className="sr-only">(current)</span></a>
            <button><a className="nav-item nav-link" href="/coupons">RETRIEVE COUPON</a></button>
            </div>
        </div>
        <span className="navbar-text">
            A Simple Coupon Code Validator
        </span>
        </nav>
    )
}
export default Nav;