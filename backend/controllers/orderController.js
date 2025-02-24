import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


// Placing orders using COD method

const placeOrder = async (req, res) => {

    try {
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        /* The order is saved */
        const newOrder = new orderModel(orderData)
        await newOrder.save()

        /* The order is placed and cartdata will empty */
        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success: true, message:"Order Placed"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// Placing orders using Stripe method

const placeOrderStripe = async (req, res) => {

}

// Placing orders using Razorpay method

const placeOrderRazorpay = async (req, res) => {

}

// All orders data for admin panel

const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// User order data for frontend
const userOrders = async (req, res) => {
    try {
        
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({success:true,orders})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// update order status from admin panel
const updateStatus = async (req, res) => {

}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}