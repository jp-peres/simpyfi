import * as z from 'zod';

export const expenseSchema = z.object({
    name: z.string().min(1),
    amount: z.string().min(0.01),
    description: z.string().min(1),
    date: z.string().refine((value)=> !isNaN(Date.parse(value)), {
        message: "Invalid date"
    })
}).required();