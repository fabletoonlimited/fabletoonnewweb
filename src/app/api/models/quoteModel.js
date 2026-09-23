import { mongoose } from "@/app/lib/mongoose";

const quoteSchema = new mongoose.Schema ({
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
    selectService:{
        type: Object,
        enum: ["webDesign&Development", "digitalMarketing", "webSupportAndMaintenance", "businessEmail", "hosting&Domain", "googleBusinessProfile"]
    },
    comment: {
        type: String
    },
    budget: {
        type: String
    },
    ipAddress: {
        type: String,
        required: true,
        index: true,
    },
},{timestamps: true}
);

export default mongoose.models.Quote || mongoose.model("Quote", quoteSchema);