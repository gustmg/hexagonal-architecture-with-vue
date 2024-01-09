import { CustomerDto } from '../../domain/CustomerDto';
import { CustomerRepository } from '../../domain/CustomerRepository';

export default function register(customerRepository: CustomerRepository, customer: CustomerDto)
: void {
  customerRepository.register(customer);
}
