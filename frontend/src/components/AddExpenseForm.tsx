import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { expenseSchema } from "../schemas/expenseSchema ";
import { useCreateExpense } from "../hooks/useCreateExpense";

const AddExpenseForm = () => {

  const {register, handleSubmit, formState: { errors }, reset} = useForm({
    resolver: zodResolver(expenseSchema)
  });

  const options = Object.entries(expenseSchema.shape.Type.enum).map((op) => {

        return ({
            value: op[0]
        })
    } 
    );
    
  const { mutate: createExpense, isPending } = useCreateExpense();

  return (
    <>
        <form 
        className="flex border-2 border-white flex-col gap-y-6 p-6 bg-(image:--color-grad-2) rounded-4xl min-w-[400px]"
            onSubmit={handleSubmit((data) => {
                createExpense(data);
            })}
        >
            <h2 className="text-white italic text-center">Create Expense</h2>
            <p>Expense Name:</p>
            <input className="bg-white rounded-2xl px-2" {...register("Name")} type="text" placeholder="Enter the name of the expense"/>
            <p>{errors.Name?.message}</p>
            <p>Description:</p>
            <input className="bg-white rounded-2xl px-2" {...register("Description")} type="text" placeholder="Enter the expense description"/>
            <p>{errors.Description?.message}</p>
            <p>Expense Type:</p>
            <select className="bg-white rounded-2xl px-2" {...register("Type")}>
                {options.map(op => (
                    <option value={op.value}>
                        {op.value}
                    </option>
                ))}
            </select>
            <p>{errors.Type?.message}</p>
            <p>Denomination:</p>
            <input className="bg-white rounded-2xl px-2" {...register("Denomination", {valueAsNumber: true})} type="number" placeholder="Enter the expense monetary amount" />
            <p>{errors.Denomination?.message}</p>
            <p>Quantity:</p>
            <input className="bg-white rounded-2xl px-2" {...register("Quantity", {valueAsNumber: true})} type="number" placeholder="Quantity" />
            <p>{errors.Quantity?.message}</p>
            <p>Date:</p>
            <input className="bg-white rounded-2xl px-2" {...register("ExpenseDate")} type="date" placeholder="Enter the date of the expense" />
            <p>{errors.ExpenseDate?.message}</p>
            <button className="bg-(image:--color-grad-1) rounded-2xl hover:bg-(image:--color-grad-4) hover:cursor-pointer" disabled={isPending} type="submit">
                {isPending ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    </>
  )
}
export default AddExpenseForm;