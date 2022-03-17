import { validateEmptyProperties } from "../src/validateEmptyProperties"

describe("Testing validateEmptyProperties", () => {
 test("Should return isValid false on empty string property", () => {
  const result = validateEmptyProperties({ name: "" })
  expect(result.isValid).toBe(false)
  expect(result.errors.length).toBe(1)
  expect(result.errors[0]).toEqual({ key: "name", value: "" })
 })

 test("Should return isValid false on 0 number property", () => {
  const result = validateEmptyProperties({ name: "Flavio", height: 0 })
  expect(result.isValid).toBe(false)
  expect(result.errors.length).toBe(1)
 })

 test("Should return isValid false on undefined property", () => {
  const result = validateEmptyProperties({ email: undefined, age: 18 })
  expect(result.isValid).toBe(false)
  expect(result.errors.length).toBe(1)
 })

 test("Should return isValid false on null property", () => {
  const result = validateEmptyProperties({ name: null })
  expect(result.isValid).toBe(false)
  expect(result.errors.length).toBe(1)
 })

 test("Should return isValid true on 4 valid properties", () => {
  const result = validateEmptyProperties(
   {
    name: "Flavio",
    age: 18,
    height: 1.78,
    email: "flavio@labenu.com.br"
   })
  expect(result.isValid).toBe(true)
  expect(result.errors.length).toBe(0)
 })
 test("Should return isValid true on 4 invalid properties", () => {
  const result = validateEmptyProperties(
   {
    name: "",
    age: 0,
    height: null,
    email: undefined
   })
  expect(result.isValid).toBe(false)
  expect(result.errors.length).toBe(4)
 })
})