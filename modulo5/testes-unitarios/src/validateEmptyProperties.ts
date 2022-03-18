
//Function that returns ValidateEmptyPropertiesError with errors on atributes with values 0, "", null, undefined
export const validateEmptyProperties = (
   input: any
): ValidateEmptyPropertiesOutput => {
   {let errors: ValidateEmptyPropertiesError[] = [];
   for (const key in input) {
      if (input[key] !== false && !input[key]) {
         errors.push({
            key,
            value: input[key],
         });
      }
   }

   return {
      isValid: errors.length === 0,
      errors,
   };}
};

export interface ValidateEmptyPropertiesOutput {
   isValid: boolean;
   errors: ValidateEmptyPropertiesError[];
}

interface ValidateEmptyPropertiesError {
   key: string;
   value: string;
}

// validateEmptyProperties({
//    name: "",
//    age: 0,
//    email: "Flavio@"
// })

// {
//    isValid: false;
//    errors [
//       {
//          key: "name"
//          value: ""
//       },
//       {
//          key: "age"
//          value: "0"
//       }
//    ]
// }

// validateEmptyProperties({
//    name: "flaivo",
//    age: 10,
//    email: "Flavio@"
// })

// {
//    isValid: true;
//    errors []
// }