export interface BaseMerchant {
  id: string;
}

export interface Merchant {
  id?: string;
  fullName?: string;
  type?: string;
  email?: string;
  phoneNumber?: string;
  resetToken?: string | null;
  status?: string;
  lastActive?: string;
  emailVerifiedAt?: string;
  phoneNumberVerifiedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}
