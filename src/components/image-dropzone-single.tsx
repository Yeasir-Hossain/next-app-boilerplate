import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaTrashAlt } from "react-icons/fa";

export default function ImageDropzoneSingle({
  className,
  value,
  onChange,
  size,
  sizeText
}: {
  className: string;
  value: any;
  onChange: any;
  size: number;
  sizeText: string;
}) {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState<string>("");

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const file = acceptedFiles[0];

      // Check if the file is present and is an image
      if (file && file.type.startsWith("image/")) {
        // Check if the file size is within limits (1 MB in this example)
        if (file.size <= size) {
          const fileWithPreview = Object.assign(file, {
            preview: URL.createObjectURL(file)
          });
          setPreview(fileWithPreview.preview);
          onChange(fileWithPreview);
          setError(""); // Clear any previous errors
        } else {
          setError("File size exceeds 1MB. Please choose a smaller file.");
        }
      } else {
        setError("Invalid file type. Please choose a valid image file.");
      }
    },
    [onChange, size]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"]
    },
    maxSize: size, // 1 MB
    onDrop
  });

  useEffect(() => {
    // Revoke the data uri to avoid memory leaks
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const removeFile = () => {
    setPreview(null);
    onChange(null);
    setError(""); // Clear any previous errors
  };

  return (
    <>
      <div
        {...getRootProps({
          className: className
        })}
      >
        {value && preview ? (
          <div className='flex items-center gap-3'>
            <Image
              src={preview}
              alt='Uploaded Image'
              width={0}
              height={0}
              sizes='100vw'
              className='h-24 w-24 rounded-md border border-gray-200 object-contain p-1'
            />
            {value && value.name && <p className='mt-2 text-[14px] font-bold text-gray-800'>{value.name}</p>}
            <button type='button' className='rounded bg-red-500 p-1' onClick={removeFile}>
              <FaTrashAlt className='hover:fill-secondary-400 h-5 w-5 fill-white transition-colors' />
            </button>
          </div>
        ) : (
          <div className='flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-2'>
            <input {...getInputProps()} />
            <Image src='/images/upload.png' height={60} width={60} alt='upload' />
            {error ? (
              <p className='text-sm text-red-500'>{error}</p>
            ) : (
              <>
                <h3 className='mt-2 text-sm font-medium text-gray-900'>
                  <label htmlFor='file-upload' className='relative cursor-pointer'>
                    <span>Drag and drop</span>
                    <span className='text-primary'> or browse</span>
                    <span> to upload!</span>
                    <input id='file-upload' name='file-upload' type='file' className='sr-only' />
                  </label>
                </h3>
                <p className='mt-1 text-xs text-gray-500'>PNG, JPG, GIF up to {sizeText}</p>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

// const onDrop = useCallback(
//   (acceptedFiles, fileRejections) => {
//     if (fileRejections.length > 0) {
//       // Handle file rejections
//       fileRejections.forEach((file) => {
//         file.errors.forEach((err) => {
//           if (err.code === 'file-too-large') {
//             setError('File size exceeds 1MB. Please choose a smaller file.');
//           }

//           if (err.code === 'file-invalid-type') {
//             setError(
//               'Invalid file type. Please choose a valid image file (JPEG, PNG, or JPG).'
//             );
//           }
//         });
//       });
//     } else if (acceptedFiles.length > 0) {
//       // Process accepted files
//       const file = acceptedFiles[0];

//       // Check if the file size is within limits (1 MB in this example)
//       if (file.size <= 1024 * 1024) {
//         const fileWithPreview = Object.assign(file, {
//           preview: URL.createObjectURL(file),
//         });
//         setPreview(fileWithPreview.preview);
//         onChange(fileWithPreview);
//         setError(null); // Clear any previous errors
//       } else {
//         setError('File size exceeds 1MB. Please choose a smaller file.');
//       }
//     }
//   },
//   [onChange]
// );
