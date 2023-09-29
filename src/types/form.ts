export interface FormsType {
  errors: any;
  control?: any;
  onSubmit: any;
  isLoading: boolean;
  register: any;
  handleSubmit: any;
}

export interface RegisterFormFieldsType {
  email: string;
  password: string;
  howYouKnewUs: string;
}

export interface LoginFormFieldsType {
  email: string;
  password: string;
}

export interface ForgotPasswordFormFieldsType {
  email: string;
}
