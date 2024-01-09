import { CustomerRegistrationDto } from './CustomerDto';
import { CustomerRegistrationForm } from './CustomerRegistrationForm';

export function createCustomerRegistrationDto(form: CustomerRegistrationForm)
: CustomerRegistrationDto {
  return {
    name: form.name,
    last_name: form.lastName,
    email: form.email,
    password: form.password,
  };
}
