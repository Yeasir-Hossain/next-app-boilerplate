import { Field } from "formik";
import FormBlockWrapper from "./FormBlockWrapper";

export default function CloudinaryForm() {
  return (
    <FormBlockWrapper title='Cloudinary Credentials'>
      <div className='grid grid-cols-1 gap-x-4 gap-y-2'>
        <Field name='cloudinary_cloud_name'>
          {({ field, meta }: { field: any; meta: any }) => (
            <>
              <label className='form-control w-full'>
                <div className='label'>
                  <span className='label-text font-semibold'>Cloudinary Cloud Name</span>
                </div>
                <input
                  type='text'
                  className={`input input-bordered w-full ${meta.touched && meta.error && "input-error"}`}
                  {...field}
                />
              </label>
            </>
          )}
        </Field>

        <Field name='cloudinary_api_key'>
          {({ field, meta }: { field: any; meta: any }) => (
            <>
              <label className='form-control w-full'>
                <div className='label'>
                  <span className='label-text font-semibold'>Cloudinary Api Key</span>
                </div>
                <input
                  type='text'
                  className={`input input-bordered w-full ${meta.touched && meta.error && "input-error"}`}
                  {...field}
                />
              </label>
            </>
          )}
        </Field>

        <Field name='cloudinary_app_secret'>
          {({ field, meta }: { field: any; meta: any }) => (
            <>
              <label className='form-control w-full'>
                <div className='label'>
                  <span className='label-text font-semibold'>Cloudinary App Secret</span>
                </div>
                <input
                  type='text'
                  className={`input input-bordered w-full ${meta.touched && meta.error && "input-error"}`}
                  {...field}
                />
              </label>
            </>
          )}
        </Field>
      </div>
    </FormBlockWrapper>
  );
}
