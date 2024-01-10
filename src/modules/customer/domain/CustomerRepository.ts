import { ICustomerDto } from './CustomerDto';
import { ICustomerLogin } from './CustomerLoginEntity';
import { ICustomerRegistrationDto } from './CustomerRegistrationDto';

export interface CustomerRepository {
  login(form: ICustomerLogin): Promise<ICustomerDto>;
  register(form: ICustomerRegistrationDto): Promise<void>;
}
