import {
  LoginMerchantRequest,
  LoginMerchantResponse,
} from "@/api/models/Auth/Auth";
import AuthService from "@/api/services/Auth";
import { ApiError } from "@/api/services/Error/ApiError";
import { useUser } from "@/store/user";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import localForage from "localforage";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export const useLogin = () => {
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const { mutate: loginUser, isPending } = useMutation<
    LoginMerchantResponse,
    ApiError,
    LoginMerchantRequest
  >({
    mutationFn: (merchant) => AuthService.login(merchant),
    onSuccess: async (res) => {
      console.log("LOGIN USER RESPONSE -====> ", res);

      // if is default password then redirect to change password
      if (res?.data?.isDefaultPassword === true) {
        navigate("/change-password");
      } else if (res?.accessToken) {
        await localForage.setItem("access_token", res?.accessToken);
        updateUser(res);
        navigate("/");
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const formik = useFormik({
    initialValues: {
      clientId: "",
      password: "",
    },
    validationSchema: yup.object({
      clientId: yup.string().required("* ClientID is required"),
      password: yup.string().required("* Password is required"),
    }),
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  const formFieldHandler = {
    clientId: {
      onChange: formik.handleChange("clientId"),
      value: formik.values.clientId,
      error: formik.touched.clientId && formik.errors.clientId,
    },
    password: {
      onChange: formik.handleChange("password"),
      value: formik.values.password,
      error: formik.touched.password && formik.errors.password,
    },
    handleSubmit: () => {
      formik.handleSubmit();
    },
  };

  return {
    formFieldHandler,
    isLoading: isPending,
  };
};
