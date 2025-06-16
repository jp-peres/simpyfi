import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { expenseSchema } from "../schemas/expenseSchema ";

const AddExpenseForm = () => {


  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: zodResolver(expenseSchema)
  });

  return (
    <>
        <form 
        className="flex border-2 border-white flex-col gap-y-6 p-6 bg-(image:--color-grad-2) rounded-4xl min-w-[400px]"
            onSubmit={handleSubmit((data) => {
                console.log(data);
            })}
        >
            <h2 className="text-white italic text-center">Create Expense</h2>
            <p>Expense Name:</p>
            <input className="bg-white rounded-2xl px-2" {...register("name")} type="text" placeholder="Enter the name of the expense"/>
            <p>{errors.name?.message}</p>
            <input className="bg-white rounded-2xl px-2" {...register("amount")} type="text" placeholder="Enter the expense monetary amount" />
            <p>{errors.amount?.message}</p>
            <input className="bg-white rounded-2xl px-2" {...register("description")} type="text" placeholder="Enter the expense description"/>
            <p>{errors.description?.message}</p>
            <input className="bg-white rounded-2xl px-2" {...register("date")} type="date" placeholder="Enter the date of the expense" />
            <p>{errors.date?.message}</p>
            <input className="bg-(image:--color-grad-1) rounded-2xl hover:bg-(image:--color-grad-4) hover:cursor-pointer" disabled={false} type="submit" />
        </form>
    </>
  )
}
export default AddExpenseForm;