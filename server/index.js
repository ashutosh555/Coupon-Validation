const express = require("express")
const path = require('path')
const cors = require("cors")
const DB = require("./DB/connection")
const ApplyCouponRouter = require('./Routes/ApplyCoupon')
const RetrieveCouponRouter = require('./Routes/RetrieveCoupons')
const AddCouponRouter = require('./Routes/AddCoupons')
const couponsDB = require("./DB/collections/couponsCollection")
const PORT = process.env.PORT || 5000


const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())

DB.connection();
const CouponModel = couponsDB.getCouponsCollection()
module.exports.CouponModel = CouponModel;

//register routers
app.use('/api',ApplyCouponRouter)
app.use('/api',RetrieveCouponRouter)
app.use('/api',AddCouponRouter)

app.get("/api", (req,res) => {
    res.json({ message: "Hello from server!" });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});