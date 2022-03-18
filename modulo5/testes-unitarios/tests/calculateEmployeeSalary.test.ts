import { calculateEmployeeSalary, CalculateEmployeeSalaryInput } from "../src/calculateEmployeeSalary"

describe("Testing calculateEmployeeSalary", () => {
 //#region primeiro teste
 test("Should return error message 'Missing Properties'", () => {
  try {
   //Criei um input para teste de propriedade vazia
   const input: CalculateEmployeeSalaryInput = {
    employeeName: "",
    baseSalary: 1000,
    benefits: [100, 150],
    extraHours: 20
   }

   //Criano um mock para retornar um objeto com isValid: false
   const validatorMock = jest.fn(() => {
    return {
     isValid: false
    }
   })

   //Executo a função sabendo qual a saída esperada
   calculateEmployeeSalary(input, validatorMock as any)
  } catch (e) {
   expect(e.message).toContain("Missing Properties")
  } finally {
   expect.assertions(1)
  }
 })
 //#endregion

 //#region segundo teste
 test("Should return error message 'Invalid Benefit'", () => {
  try {
   const input: CalculateEmployeeSalaryInput = {
    employeeName: "flavio",
    baseSalary: 1000,
    benefits: [100, -150],
    extraHours: 20
   }

   const validatorMock = jest.fn(() => {
    return {
     isValid: true
    }
   })
   calculateEmployeeSalary(input, validatorMock as any)
  } catch (e) {
   expect(e.message).toContain("Invalid Benefit")
  } finally {
   expect.assertions(1)
  }
 })
 //#endregion

 //#region terceiro teste    
 test("Should return 10000", () => {
  try {
   const input: CalculateEmployeeSalaryInput = {
    employeeName: "flabio",
    baseSalary: 5000,
    benefits: [2500, 1500],
    extraHours: 1000
   }

   const validatorMock = jest.fn(() => {
    return {
     isValid: true
    }
   })
   const result = calculateEmployeeSalary(input, validatorMock as any)
   console.log("salario:", result)
   expect(result).toBe(10000)
   expect(validatorMock).toHaveBeenCalledTimes(1)
   expect(validatorMock).toHaveBeenCalledWith(input)
  } catch (e) {
  } finally {
   expect.assertions(3)
  }
 })
 //#endregion
})