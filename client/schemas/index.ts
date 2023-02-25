import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Too short")
    .matches(/^\S*$/, "No whitespaces")
    .required("Name is required"),
  age: yup
    .string()
    .matches(/^\S*$/, "No whitespaces")
    .required("Age is required"),
  pvc: yup.string().min(20, "Pvc Number is incorrect").required("Required"),
});
