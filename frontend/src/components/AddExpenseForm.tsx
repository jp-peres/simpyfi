import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { expenseSchema } from "../schemas/expenseSchema ";
import { useCreateExpense } from "../hooks/useCreateExpense";
import { Button } from "./ui/button";
import { Loader2Icon } from 'lucide-react'
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";

const AddExpenseForm = () => {

  const {register, handleSubmit, formState: { errors }, reset} = useForm({
    resolver: zodResolver(expenseSchema)
  });

  const { mutate: createExpense, isPending } = useCreateExpense();

  return (
    <>
        <form 
        className="flex border-2 border-white flex-col gap-y-2 p-6 bg-(image:--color-grad-2) rounded-4xl min-w-[400px]"
            onSubmit={handleSubmit((data) => {
                createExpense(data);
                reset();
            })}
        >
            <h2 className="text-white italic text-center">Create Expense</h2>
            <Label htmlFor="Name">Name:</Label>
            <Input id="Name" className="bg-white rounded-2xl px-2" {...register("Name")} type="text" placeholder="Enter the name of the expense" />
            <p>{errors.Name?.message}</p>
            <Label htmlFor="Description">Description:</Label>
            <Input id="Description" className="bg-white rounded-2xl px-2" {...register("Description")} type="text" placeholder="Enter the expense description"/>
            <p>{errors.Description?.message}</p>
            <Label htmlFor="ExpenseType">Expense Type:</Label>
            <select id="ExpenseType" className="bg-white rounded-2xl px-2" {...register("Type")}>
                {expenseSchema.shape.Type.options.map(op => (
                    <option key={op} value={op}>
                        {op}
                    </option>
                ))}
            </select>
            <p>{errors.Type?.message}</p>
            <Label htmlFor="Denomination">Denomination:</Label>
            <Input id="Denomination" className="bg-white rounded-2xl px-2" {...register("Denomination", {valueAsNumber: true})} type="number" placeholder="Enter the expense monetary amount" />
            <p>{errors.Denomination?.message}</p>
            <Label htmlFor="Quantity">Quantity:</Label>
            <Input id="Quantity" className="bg-white rounded-2xl px-2" {...register("Quantity", {valueAsNumber: true})} type="number" placeholder="Quantity" />
            <p>{errors.Quantity?.message}</p>
            <Label htmlFor="ExpenseDate">Expense Date:</Label>
            <Input className="bg-white rounded-2xl px-2" {...register("ExpenseDate")} type="date" placeholder="Enter the date of the expense" />
            <p>{errors.ExpenseDate?.message}</p>
            
            <Button className="bg-(image:--color-grad-1) rounded-2xl hover:bg-(image:--color-grad-4) hover:cursor-pointer disabled:bg-gray-400" disabled={isPending} type="submit">
                {isPending && <Loader2Icon className="animate-spin" />}
                {isPending ? 'Submitting...' : 'Submit'}
            </Button>
        </form>
    </>
  )
}
export default AddExpenseForm;