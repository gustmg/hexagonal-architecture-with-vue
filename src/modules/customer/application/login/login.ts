import { CustomerLoginForm } from '../../domain/CustomerLoginForm';
import { CustomerRepository } from '../../domain/CustomerRepository';

export default function login(customerRepository: CustomerRepository, form: CustomerLoginForm)
: void {
  customerRepository.login(form);
}
