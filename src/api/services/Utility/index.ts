import { endpoints } from "@/api/configs/endpoints";
import { UploadFileResponse } from "@/api/models/Utility/file-upload";
import { BaseService } from "../Base/BaseService";

class UtilityServiceMethods extends BaseService {
  uploadFile(formData: FormData) {
    return this.post<UploadFileResponse>(endpoints.uploadFile, formData);
  }
}

const UtilityService = new UtilityServiceMethods();
export default UtilityService;
