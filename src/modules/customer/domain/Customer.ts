import isCustomerNameValid from './CustomerName';

export interface Customer {
  id: string;
  formalTitle: string;
  name: string;
  lastName: string;
  phone: string;
  mobilePhone: string;
  email: string;
  state: string;
  city: string;
  dealer: string;
  vehicleInterestedIn: string;
  requiredInfoType: string;
  message: string;
  isPrivacyAdviceAccepted: boolean;
}

export function ensureFormIsValid({ name }: Customer): void {
  if (!isCustomerNameValid(name)) {
    throw new Error('Invalid customer name');
  }
}
