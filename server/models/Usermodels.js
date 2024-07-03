import mongoose from "mongoose";
let employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "employee",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const EmployeeModel = mongoose.model("Employee", employeeSchema);
export default EmployeeModel;
