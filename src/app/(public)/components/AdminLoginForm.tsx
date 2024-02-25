"use client";

import { routes } from "@/config/routes";
import { useAdminLoginMutation } from "@/features/auth/authApi";
import { userLoggedIn } from "@/features/auth/authSlice";
import { Field, Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PiSpinnerLight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { Input, Password } from "rizzui";
import * as Yup from "yup";

export default function AdminLoginForm() {
  const { replace } = useRouter();
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);

  const initialValues = {
    email: "",
    password: ""
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().required("Required!").email("Invalid Email!"),
    password: Yup.string().required("Required!")
  });

  const [adminLogin, { data: loginResponse, isSuccess: loginSuccess, isError: loginError }] = useAdminLoginMutation();

  // Handle Login Response
  useEffect(() => {
    if (loginError) {
      setSubmitting(false);
      toast.error("Something went wrong! Try Again");
    }

    if (loginSuccess) {
      if (loginResponse?.status) {
        dispatch(
          userLoggedIn({
            accessToken: loginResponse?.data?.accessToken,
            user: loginResponse?.data,
            role: loginResponse?.data?.role
          })
        );

        signIn("credentials", {
          userData: JSON.stringify(loginResponse?.data),
          adminLogin: true,
          redirect: false
        }).then((callback) => {
          if (callback?.error) {
            setSubmitting(false);
            toast.error(callback?.error);
          }
          if (callback?.ok && !callback?.error) {
            toast.success(loginResponse?.message);
            if (loginResponse?.data?.role === "admin") {
              replace(routes.admin.dashboard);
            }
            // else if (loginResponse?.data?.role === "moderator") {
            //   replace(routes.moderator.dashboard);
            // } else if (loginResponse?.data?.role === "studioPartner") {
            //   replace(routes.studioPartner.dashboard);
            // } else if (loginResponse?.data?.role === "deliveryPartner") {
            //   replace(routes.deliveryPartner.dashboard);
            // } else if (loginResponse?.data?.role === "deliveryBoy") {
            //   replace(routes.deliveryBoy.dashboard);
            // }
          }
        });
      } else {
        setSubmitting(false);
        toast.error(loginResponse?.message);
      }
    }
  }, [loginError, loginSuccess, loginResponse, replace, dispatch]);

  // Submit Handler
  const handleSubmit = (values: any) => {
    console.log(values);
    setSubmitting(true);

    adminLogin({
      email: values.email,
      password: values.password
    });
  };

  return (
    <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
      {({ values, setFieldValue, errors }) => {
        return (
          <Form>
            <Field name='email'>
              {({ field, meta }: { field: any; meta: any }) => (
                <div className='mt-3'>
                  <Input
                    size='lg'
                    label={
                      <p>
                        Email
                        <span className='font-bold text-red-600'> *</span>
                      </p>
                    }
                    variant='outline'
                    color='primary'
                    labelClassName='text-base'
                    autoComplete='off'
                    {...field}
                  />
                  {meta.touched && meta.error && (
                    <p className='mt-1 select-none px-1 font-medium text-error'>{meta.error}</p>
                  )}
                </div>
              )}
            </Field>
            <Field name='password'>
              {({ field, meta }: { field: any; meta: any }) => (
                <div className='mt-3'>
                  <Password
                    size='lg'
                    label={
                      <p>
                        Password
                        <span className='font-bold text-red-600'> *</span>
                      </p>
                    }
                    variant='outline'
                    color='primary'
                    labelClassName='text-base'
                    autoComplete='off'
                    {...field}
                  />
                  {meta.touched && meta.error && (
                    <p className='mt-1 select-none px-1 font-medium text-error'>{meta.error}</p>
                  )}
                </div>
              )}
            </Field>
            <div className='bg-secondary py-3 rounded-md mt-5 justify-end'>
              <button type='submit' className='flex justify-center items-center w-full font-semibold' disabled={submitting}>
                {submitting ? <PiSpinnerLight className='animate-spin text-xl' /> : 'Login'}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
