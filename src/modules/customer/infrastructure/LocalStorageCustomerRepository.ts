import { v4 as uuidv4 } from 'uuid';
import { CustomerDto, CustomerRegistrationDto } from '../domain/CustomerDto';
import { CustomerLoginForm } from '../domain/CustomerLoginForm';
import { CustomerRepository } from '../domain/CustomerRepository';

function getAllCustomersFromLocalStorage():Map<string, CustomerDto> {
  const customers = localStorage.getItem('customers');

  if (!customers) {
    return new Map();
  }

  return new Map(JSON.parse(customers) as Iterable<[string, CustomerDto]>);
}

async function login(loginForm: CustomerLoginForm): Promise<CustomerDto> {
  const customers = getAllCustomersFromLocalStorage();
  const customer = customers.get(loginForm.email);

  if (!customer) {
    throw new Error('Customer not found');
  }

  return Promise.resolve(customer);
}

function register(registerForm: CustomerRegistrationDto): Promise<void> {
  const customers = getAllCustomersFromLocalStorage();

  customers.set(registerForm.email, {
    id: uuidv4(),
    formal_title: '',
    name: registerForm.name,
    last_name: registerForm.last_name,
    phone: '',
    mobile_phone: '',
    email: registerForm.email,
    state: '',
    city: '',
    dealer: '',
    interested_in: '',
    required_info: '',
    message: '',
    privacy_advise: false,
  });

  localStorage.setItem('customers', JSON.stringify(Array.from(customers.entries())));

  return Promise.resolve();
}

export default function createLocalStorageCustomerRepository(): CustomerRepository {
  return {
    login,
    register,
  };
}
