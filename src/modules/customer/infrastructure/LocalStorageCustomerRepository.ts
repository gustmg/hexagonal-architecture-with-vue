import { ICustomerLogin } from '../domain/CustomerLoginEntity';
import { CustomerRepository } from '../domain/CustomerRepository';
import { CustomerDto, ICustomerDto } from '../domain/CustomerDto';
import { ICustomerRegistrationDto } from '../domain/CustomerRegistrationDto';

function getAllCustomersFromLocalStorage():Map<string, ICustomerDto> {
  const customers = localStorage.getItem('customers');

  if (!customers) {
    return new Map();
  }

  return new Map(JSON.parse(customers) as Iterable<[string, ICustomerDto]>);
}

async function login(loginForm: ICustomerLogin): Promise<ICustomerDto> {
  const customers = getAllCustomersFromLocalStorage();
  const customer = customers.get(loginForm.email);

  if (!customer) {
    throw new Error('Customer not found');
  }

  return Promise.resolve(customer);
}

function register(registerForm: ICustomerRegistrationDto): Promise<void> {
  const customers = getAllCustomersFromLocalStorage();

  customers.set(
    registerForm.email,
    new CustomerDto().fromCustomerRegistrationDto(registerForm),
  );

  localStorage.setItem('customers', JSON.stringify(Array.from(customers.entries())));

  return Promise.resolve();
}

function update(customer: CustomerDto): Promise<void> {
  const customers = getAllCustomersFromLocalStorage();

  customers.set(customer.email, customer);

  localStorage.setItem('customers', JSON.stringify(Array.from(customers.entries())));

  return Promise.resolve();
}

export default function createLocalStorageCustomerRepository(): CustomerRepository {
  return {
    login,
    register,
    update,
  };
}
