import mongoose, { Schema, Document } from "mongoose";
import { IRegister } from "../interface/registered.user.interface";

const registrationSchema = new Schema<IRegister & Document>({
    name: {
        type: [String],
        required: true
    },

    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        min: 10,
        max: 10
    },
    attendence:{
        type:String,
        required:false,
        enum: ["present","absent"],
        default: "absent"
    },
    checkInTime:{
        type:Date,
        required:false
    },
    ticketType: {
        type: String,
        required: true,
        enum: ['clouds','love_rays','bows','arrows','third_eye','crown','Early Birds', 'Stag', 'Couple', 'Vip', 'Vvip', 'Backstage', '5Stags']
    },
    referralCode:{
        type:String,
        required:false,
        default:""
    },
    totalTickets: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    ticketCode:{
        type:String,
        required:false,
        unique:true,
    },
    ticketImageUrl:{
        type:String,
        required:false
    },
    serialNumber: {
        type: String,
        required: false,
        unique: true,
        sparse: true
      },
    registerAt: {
        type: Date,
        default: Date.now()
    },
    confirm:{
        type:Boolean,
        default:false
    },
    entered:{
        type:Boolean,
        default:false
    }
})

const registerModel = mongoose.model<IRegister & Document>('registration', registrationSchema)

export default registerModel
