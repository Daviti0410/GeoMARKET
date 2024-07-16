import * as yup from "yup";

const emailDomainRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const registrationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("login name is required")
    .min(3, "login name must be at least 3 charachters long"),
  lastName: yup
    .string()
    .required("login name is required")
    .min(3, "login name must be at least 3 charachters long"),
  email: yup
    .string()
    .required("Email is required")
    .matches(emailDomainRegex, "Email must be a valid email address"),
  day: yup
    .number()
    .required("Day is required")
    .positive("Day is required")
    .integer("Day must be an number"),
  phoneNumber: yup
    .number()
    .required("Phone Number is required")
    .positive("Phone Number is required")
    .integer("Phone Number must be an number"),
  month: yup
    .string()
    .required("month is required")
    .min(3, "month must be at least 3 charachters long"),
  year: yup
    .number()
    .required("year is required")
    .positive("year must be a positive number")
    .integer("year must be an number"),
  street: yup
    .string()
    .required("street name is required")
    .min(3, "street name must be at least 3 charachters long"),
  city: yup
    .string()
    .required("city name is required")
    .min(3, "city name must be at least 3 charachters long"),
  region: yup
    .string()
    .required("region name is required")
    .min(3, "region name must be at least 3 charachters long"),
  postal: yup
    .number()
    .required("postal is required")
    .positive("postal must be a positive number")
    .integer("postal must be an number"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  country: yup.string().required("Password is required"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required("email is required"),
  password: yup.string().required("Password is required"),
});
