import { mongoose } from "@/app/lib/mongoose";

const contactSchema = new mongoose.Schema ({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
    }, 
    comment: {
        type: String
    },
    ipAddress: {
        type: String,
        required: true,
        index: true,
    },
},{timestamps: true}
);

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);