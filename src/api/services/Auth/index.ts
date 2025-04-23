import { endpoints } from "@/api/configs/endpoints";
import {
  LoginMerchantRequest,
  LoginMerchantResponse,
} from "@/api/models/Auth/Auth";
import { BaseService } from "../Base/BaseService";

class AuthServiceMethods extends BaseService {
  login(payload: LoginMerchantRequest) {
    return this.post<LoginMerchantResponse>(endpoints.login, payload);
  }
}
const AuthService = new AuthServiceMethods();
export default AuthService;
