export type RootStackParamList = {
    RegisterScreen: undefined;
    ProfileScreen: { formData: { username: string, phoneNumber: string, email: string, password: string, image: string | null } };
    LoginScreen: { formData: { username: string, phoneNumber: string, email: string, password: string, image: string | null } };
  };