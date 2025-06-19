import * as z from 'zod';

export const expenseSchema = z.object({
    Name: z.string().min(1),
    Description: z.string().min(1),
    Type: z.enum(["Food","Clothing","Traveling","Health","Education","CarMaintenance","Gas","WellnessAndGrooming","TechnologyAndGadgets","Salary","Rent","Installments","PassiveIncome"]),
    Denomination: z.coerce.number().min(0.01),
    Quantity: z.coerce.number().int().min(1),
    ExpenseDate: z.date()
}).required();

export type ExpenseInput = z.infer<typeof expenseSchema>;