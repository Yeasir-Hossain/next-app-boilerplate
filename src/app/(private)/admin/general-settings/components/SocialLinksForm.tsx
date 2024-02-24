import { Field } from "formik";
import FormBlockWrapper from "./FormBlockWrapper";

export default function SocialLinksForm() {
  return (
    <FormBlockWrapper title='App Download & Social Links'>
      <div className='grid grid-cols-1 gap-4 gap-y-2 md:grid-cols-3'>
        <Field name='facebook'>
          {({ field, meta }: { field: any; meta: any }) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text font-semibold'>Facebook</span>
              </div>
              <input type='text' className='input input-bordered w-full' {...field} />
            </label>
          )}
        </Field>

        <Field name='instagram'>
          {({ field }: { field: any; meta: any }) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text font-semibold'>Instagram</span>
              </div>
              <input type='text' className='input input-bordered w-full' {...field} />
            </label>
          )}
        </Field>

        <Field name='youtube'>
          {({ field }: { field: any; meta: any }) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text font-semibold'>Youtube</span>
              </div>
              <input type='text' className='input input-bordered w-full' {...field} />
            </label>
          )}
        </Field>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Field name='android_download_link'>
          {({ field, meta }: { field: any; meta: any }) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text font-semibold'>Android Download Link</span>
              </div>
              <input type='text' className='input input-bordered w-full' {...field} />
            </label>
          )}
        </Field>

        <Field name='ios_download_link'>
          {({ field }: { field: any; meta: any }) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text font-semibold'>iOS Download Link</span>
              </div>
              <input type='text' className='input input-bordered w-full' {...field} />
            </label>
          )}
        </Field>
      </div>
    </FormBlockWrapper>
  );
}
