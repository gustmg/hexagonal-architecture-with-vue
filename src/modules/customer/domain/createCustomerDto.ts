import { Customer } from './Customer';
import { CustomerDto } from './CustomerDto';

export function createCustomerDto(customer: Customer): CustomerDto {
  return {
    id: customer.id,
    formal_title: customer.formalTitle,
    name: customer.name,
    last_name: customer.lastName,
    phone: customer.phone,
    mobile_phone: customer.mobilePhone,
    email: customer.email,
    state: customer.state,
    city: customer.city,
    dealer: customer.dealer,
    interested_in: customer.vehicleInterestedIn,
    required_info: customer.requiredInfoType,
    message: customer.message,
    privacy_advise: customer.isPrivacyAdviceAccepted,
  };
}
