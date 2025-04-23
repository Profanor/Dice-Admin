// import { useMutation } from '@tanstack/react-query';
// import * as ImagePicker from 'expo-image-picker';
// import { useState } from 'react';

// import { UploadFileRequest, UploadFileResponse } from '~/api/models/Utility/file-upload';
// import { ApiError } from '~/api/services/Error/ApiError';
// import UtilityService from '~/api/services/Utility';

// function generateRandomFilename(length: number = 12, extension: string = ''): string {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return extension ? `${result}.${extension}` : result;
// }

// function getFileExtension(filePath: string): string {
//   const match = filePath.match(/\.([a-zA-Z0-9]+)(\?.*)?$/);
//   return match ? match[1] : 'jpg';
// }

// export const useUploadFile = ({ onSuccessCallback }: { onSuccessCallback?: () => void }) => {
//   const [selectedFile, setSelectedFile] = useState<string>('');
//   const [selectedFileName, setSelectedFileName] = useState<string>('');

//   const handleSelectFile = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ['images', 'videos'],
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//       allowsMultipleSelection: false,
//     });

//     if (!result?.canceled) {
//       setSelectedFile(result?.assets?.[0].uri);
//       setSelectedFileName(
//         result?.assets?.[0].fileName ??
//           generateRandomFilename(12, getFileExtension(result?.assets?.[0].uri))
//       );
//     }
//   };

//   const { mutate: uploadFile, isPending } = useMutation<
//     UploadFileResponse,
//     ApiError,
//     UploadFileRequest
//   >({
//     mutationFn: (formData) => UtilityService.uploadFile(formData),
//     onSuccess: (res) => {
//       console.log('UPLOAD FILE RESPONSE -====> ', res);

//       if (res?.status === 200) {
//         onSuccessCallback?.();
//       }
//     },
//     onError: (err) => {
//       console.log(err);
//     },
//   });

//   const handleUploadFile = () => {
//     const formData = new FormData();
//     if (selectedFile) {
//       formData.append('file', selectedFile);
//       formData.append('fileName', selectedFileName);

//       uploadFile(formData);
//     } else {
//       console.log('error upload, no selected image');
//     }
//   };

//   return { handleSelectFile, isLoading: isPending, handleUploadFile };
// };
