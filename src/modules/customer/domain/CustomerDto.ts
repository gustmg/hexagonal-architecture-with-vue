export interface CustomerDto {
  id: string;
  formal_title: string;
  name: string;
  last_name: string;
  phone: string;
  mobile_phone: string;
  email: string;
  state: string;
  city: string;
  dealer: string;
  interested_in: string;
  required_info: string;
  message: string;
  privacy_advise: boolean;
}

export interface CustomerRegistrationDto {
  name: string;
  last_name: string;
  email: string;
  password: string;
}
