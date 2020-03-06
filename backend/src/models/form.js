import mongoose, { mongo } from 'mongoose';

const FormSchema = mongoose.Schema(
    {
        firstName: String,
        lastName:String,
        email:String,
        phone:String,
        language:String,
        country:String,
        firstBillingAddress:String,
        secondBillingAddress:String,
        billingCity: String,
        billingState:String,
        billingZipCode:String,
        firstShippingAddress:String,
        secondShippingAddress:String,
        shippingCity: String,
        shippingState:String,
        shippingZipCode:String,
        fuelCutOff:Boolean,
        identifyDrivers:Boolean,
        trackers:Boolean,
        numberTrackers:Number
    },
    {
        timestamps:true,
    }
);

export default mongoose.model('Form', FormSchema);