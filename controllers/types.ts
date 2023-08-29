export type userProps = {
     city: string;
     name: string;
     email: string;
     password: string;
     repeatPassword?: string;
     address: {
          value: string;
          coordinate: {
               latitude: number;
               longitude: number;
          };
     };
};
