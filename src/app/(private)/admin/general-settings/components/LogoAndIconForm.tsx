import ImageDropzoneSingle from "@/components/image-dropzone-single";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import FormBlockWrapper from "./FormBlockWrapper";

export default function LogoAndIconForm({
  values,
  setFieldValue,
  setSiteIcon,
  siteIcon,
  setSiteLogo,
  siteLogo
}: {
  values: any;
  setFieldValue: any;
  setSiteIcon: any;
  siteIcon: any;
  setSiteLogo: any;
  siteLogo: any;
}) {
  return (
    <FormBlockWrapper title='Logo & Icon'>
      <div className='grid grid-cols-1 gap-y-8'>
        <div className='w-full'>
          <div className='mb-2'>
            <span className='label-text font-semibold'>Site Logo</span>
          </div>
          {values?.site_logo ? (
            <div className='flex items-center gap-3'>
              <Image
                src={values.site_logo}
                alt='Uploaded Image'
                width={0}
                height={0}
                sizes='100vw'
                className='h-24 w-24 rounded-md border border-gray-200 object-contain p-1'
              />
              <button type='button' className='rounded bg-red-500 p-1' onClick={() => setFieldValue("site_logo", "")}>
                <FaTrashAlt className='hover:fill-secondary-400 h-5 w-5 fill-white transition-colors' />
              </button>
            </div>
          ) : (
            <ImageDropzoneSingle
              value={siteLogo}
              onChange={(image: any) => setSiteLogo(image)}
              className='mt-2'
              size={1024 * 1000}
              sizeText='1MB'
            />
          )}
        </div>

        <div className='w-full'>
          <div className='mb-2'>
            <span className='label-text font-semibold'>Site Icon</span>
          </div>
          {values?.site_icon ? (
            <div className='flex items-center gap-3'>
              <Image
                src={values.site_icon}
                alt='Uploaded Image'
                width={0}
                height={0}
                sizes='100vw'
                className='h-24 w-24 rounded-md border border-gray-200 object-contain p-1'
              />
              <button type='button' className='rounded bg-red-500 p-1' onClick={() => setFieldValue("site_icon", "")}>
                <FaTrashAlt className='hover:fill-secondary-400 h-5 w-5 fill-white transition-colors' />
              </button>
            </div>
          ) : (
            <ImageDropzoneSingle
              value={siteIcon}
              onChange={(image: any) => setSiteIcon(image)}
              className='mt-2'
              size={1024 * 1000}
              sizeText='1MB'
            />
          )}
        </div>
      </div>
    </FormBlockWrapper>
  );
}
