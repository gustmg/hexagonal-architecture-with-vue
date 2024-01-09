import { CustomerDto, CustomerRegistrationDto } from './CustomerDto';
import { CustomerLoginForm } from './CustomerLoginForm';

export interface CustomerRepository {
  login(form: CustomerLoginForm): Promise<CustomerDto>;
  register(form: CustomerRegistrationDto): Promise<void>;
}
