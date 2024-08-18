import mongoose from 'mongoose';

const orderItemsSchema = new mongoose.Schema(
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
      },
      quantity: {
        type: Number,
        required: true
      }
    }
);

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: NUmber,
            required: true
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
        orderItems: {
            type: [orderItemsSchema]
        },
        address: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["PENDING","DELIEVERED","CANCELLED"],
            default: "PENDING"
        }
    },{timestamps: true});

export const Orders = mongoose.model("Orders",orderSchema);