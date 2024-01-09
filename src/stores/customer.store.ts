import { defineStore } from 'pinia';
import Notifier from 'src/boot/Notifier';
import { createCustomer } from 'src/modules/customer/domain/createCustomer';
import { createCustomerRegistrationDto } from 'src/modules/customer/domain/createCustomerRegistrationDto';
import { Customer } from 'src/modules/customer/domain/Customer';
import { CustomerLoginForm } from 'src/modules/customer/domain/CustomerLoginForm';
import { CustomerRegistrationForm } from 'src/modules/customer/domain/CustomerRegistrationForm';
import createLocalStorageCustomerRepository from 'src/modules/customer/infrastructure/LocalStorageCustomerRepository';

const repository = createLocalStorageCustomerRepository();

const defaultCustomer = {
  id: '',
  formalTitle: '',
  name: '',
  lastName: '',
  phone: '',
  mobilePhone: '',
  email: '',
  state: '',
  city: '',
  dealer: '',
  vehicleInterestedIn: '',
  requiredInfoType: '',
  message: '',
  isPrivacyAdviceAccepted: false,
};

const defaultCustomerLoginForm = {
  email: '',
  password: '',
};

const defaultCustomerRegistrationForm = {
  name: '',
  lastName: '',
  email: '',
  password: '',
};

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    customer: defaultCustomer as Customer,
    customerLoginForm: defaultCustomerLoginForm as CustomerLoginForm,
    customerRegistrationForm: defaultCustomerRegistrationForm as CustomerRegistrationForm,
  }),

  getters: {
    isCustomerLoggedIn: (state) => !!state.customer.email,
  },

  actions: {
    async login() {
      try {
        const customer = await repository.login(this.customerLoginForm);
        this.customer = createCustomer(customer);

        Notifier('Inicio de sesión realizado con éxito 🎉', 'positive');

        this.router.push('/');
      } catch (error) {
        Notifier(`Ocurrió un error al iniciar sesión: ${error}`, 'negative');
      }
    },

    async register() {
      try {
        const payload = createCustomerRegistrationDto(this.customerRegistrationForm);
        await repository.register(payload);

        Notifier('¡Registro realizado correctamente! 🎉', 'positive');

        this.router.push('/login');
      } catch (error) {
        Notifier(`Ocurrió un error al iniciar sesión: ${error}`, 'negative');
      }
    },
  },
});
