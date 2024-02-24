"use client";

import {
  useGetGeneralSettingsQuery,
  useUpdateGeneralSettingsMutation
} from "@/features/super-admin/general-settings/generalSettingsApi";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiCheckCircle } from "react-icons/fi";
import { PiSpinnerLight } from "react-icons/pi";
import * as Yup from "yup";
import CloudinaryForm from "./CloudinaryForm";
import GeneralSettingsForm from "./GeneralSettingsForm";
import LogoAndIconForm from "./LogoAndIconForm";
import PrivacyAndPolicyForm from "./PrivacyAndPolicyForm";
import SocialLinksForm from "./SocialLinksForm";
import TabButtonItem from "./TabButtonItem";
import TermsAndConditionForm from "./TermsAndConditionForm";

export default function SettingsMainForm() {
  const { data: generalSetting, isLoading, isError } = useGetGeneralSettingsQuery(undefined);

  const [updateSettings, { data: updatedData, isSuccess, isError: updatingError }] = useUpdateGeneralSettingsMutation();

  const [currentTab, setCurrentTab] = useState(0);
  const [siteLogo, setSiteLogo] = useState(null);
  const [siteIcon, setSiteIcon] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [initialValues, setInitialValues] = useState({
    company_name: "",
    site_title: "",
    timezone: {},
    allowed_country: [],
    qpsms_appkey: "",
    qpsms_secretkey: "",
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
    instagram: "https://www.instagram.com/",
    site_logo: "",
    site_icon: "",
    terms: "",
    policy: "",
    cloudinary_cloud_name: "",
    cloudinary_api_key: "",
    cloudinary_app_secret: "",
    android_download_link: "",
    ios_download_link: ""
  });

  useEffect(() => {
    if (updatingError) {
      setIsSubmitting(false);
      toast.error("Something went wrong!");
    }

    if (isSuccess) {
      setSiteLogo(null);
      setSiteIcon(null);
      setIsSubmitting(false);
      setInitialValues((prevValues) => ({
        ...prevValues,
        ...(updatedData as { data: any }).data
      }));
      toast.success("General Setting Updated Successfully!");
    }
  }, [isSuccess, updatedData, updatingError]);

  useEffect(() => {
    if (!isLoading && !isError) {
      setInitialValues((prevValues) => ({
        ...prevValues,
        ...generalSetting?.data
      }));
    }
  }, [generalSetting, isError, isLoading]);

  const tabs = [
    "General Settings",
    "Apps & Social Links",
    "Logo & Icon",
    "Terms and Condition",
    "Privacy and Policy",
    "Cloudinary"
  ];

  const handleTabChange = (tab: number) => {
    setCurrentTab(tab);
  };

  const validationSchema = Yup.object().shape({
    company_name: Yup.string().required("Required!"),
    site_title: Yup.string().required("Required!"),
    timezone: Yup.object().shape({
      label: Yup.string().required("Required!"),
      value: Yup.string().required("Required!")
    })
  });

  // Submit Handler
  const handleSubmit = async (values: any) => {
    setIsSubmitting(true);

    var formBody = new FormData();

    const fieldsToAppend = [
      "company_name",
      "site_title",
      "timezone",
      "allowed_country",
      "facebook",
      "youtube",
      "instagram",
      "terms",
      "policy",
      "android_download_link",
      "ios_download_link",
      "cloudinary_cloud_name",
      "cloudinary_api_key",
      "cloudinary_app_secret",
      "qpsms_appkey",
      "qpsms_secretkey"
    ];

    fieldsToAppend.forEach((field) => {
      if (values[field] !== undefined) {
        if (field === "timezone" || field === "allowed_country") {
          formBody.append(field, JSON.stringify(values[field]));
        } else {
          formBody.append(field, values[field]);
        }
      }
    });

    if (siteLogo) formBody.append("site_logo", siteLogo);
    if (siteIcon) formBody.append("site_icon", siteIcon);

    updateSettings(formBody);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
              <div className='col-span-1 flex flex-col md:col-span-3'>
                {tabs.map((tab, index) => (
                  <TabButtonItem
                    key={index}
                    tab={tab}
                    onClick={() => handleTabChange(index)}
                    active={currentTab === index}
                  />
                ))}
              </div>
              <div className='col-span-1 w-full rounded-lg border border-gray-200 bg-white p-5 shadow md:col-span-9'>
                <div hidden={currentTab === 0 ? false : true}>
                  <GeneralSettingsForm setFieldValue={setFieldValue} values={values} />
                </div>

                <div hidden={currentTab === 1 ? false : true}>
                  <SocialLinksForm />
                </div>

                <div hidden={currentTab === 2 ? false : true}>
                  <LogoAndIconForm
                    values={values}
                    setFieldValue={setFieldValue}
                    setSiteIcon={setSiteIcon}
                    siteIcon={siteIcon}
                    setSiteLogo={setSiteLogo}
                    siteLogo={siteLogo}
                  />
                </div>

                <div hidden={currentTab === 3 ? false : true}>
                  <TermsAndConditionForm values={values} setFieldValue={setFieldValue} />
                </div>

                <div hidden={currentTab === 4 ? false : true}>
                  <PrivacyAndPolicyForm values={values} setFieldValue={setFieldValue} />
                </div>

                <div hidden={currentTab === 5 ? false : true}>
                  <CloudinaryForm />
                </div>
              </div>
            </div>
            <div className='flex w-full justify-end'>
              <button type='submit' className='btn btn-primary btn-sm mt-6 text-white' disabled={isSubmitting}>
                Submit{" "}
                {isSubmitting ? <PiSpinnerLight className='ml-1 animate-spin' /> : <FiCheckCircle className='ml-1' />}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
