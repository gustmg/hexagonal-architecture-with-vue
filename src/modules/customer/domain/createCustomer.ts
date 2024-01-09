import { CustomerDto } from './CustomerDto';
import { Customer } from './Customer';

export function createCustomer(customer: CustomerDto): Customer {
  return {
    id: customer.id,
    formalTitle: customer.formal_title,
    name: customer.name,
    lastName: customer.last_name,
    phone: customer.phone,
    mobilePhone: customer.mobile_phone,
    email: customer.email,
    state: customer.state,
    city: customer.city,
    dealer: customer.dealer,
    vehicleInterestedIn: customer.interested_in,
    requiredInfoType: customer.required_info,
    message: customer.message,
    isPrivacyAdviceAccepted: customer.privacy_advise,
  };
}
