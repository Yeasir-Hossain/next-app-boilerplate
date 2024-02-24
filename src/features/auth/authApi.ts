import { apiSlice } from "@/features/api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (data) => {
        return {
          url: `/api/admin/login`,
          method: "POST",
          body: data
        };
      }
    }),
    forgetPassword: builder.mutation({
      query: (data) => {
        return {
          url: `/api/user/forget-password`,
          method: "POST",
          body: data
        };
      }
    }),
    verifyForgetPasswordOtp: builder.mutation({
      query: (data) => {
        return {
          url: `/api/user/verify-forget-password-otp`,
          method: "POST",
          body: data
        };
      }
    }),
    changeForgetPassword: builder.mutation({
      query: (data) => {
        return {
          url: `/api/user/change-forget-password`,
          method: "PUT",
          body: data
        };
      }
    }),
    resendOtp: builder.mutation({
      query: (data) => {
        return {
          url: `/api/user/resend-otp`,
          method: "POST",
          body: data
        };
      }
    }),
    getProfile: builder.query({
      query: () => `/api/user/profile`,
      providesTags: ["userProfile"]
    })
  })
});

export const {
  useGetProfileQuery,
  useResendOtpMutation,
  useAdminLoginMutation,
  useForgetPasswordMutation,
  useChangeForgetPasswordMutation,
  useVerifyForgetPasswordOtpMutation
} = authApi;
