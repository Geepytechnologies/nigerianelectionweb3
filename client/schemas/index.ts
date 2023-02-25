import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().min(3, "Too short").trim().required("Name is required"),
  age: yup
    .string()
    .matches(/^\S*$/, "No whitespaces")
    .trim()
    .required("Age is required"),
  pvc: yup
    .string()
    .min(24, "Pvc Number is incorrect")
    .trim()
    .required("Required"),
});
