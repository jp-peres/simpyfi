import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { expenseSchema } from "../schemas/expenseSchema ";
import { useCreateExpense } from "../hooks/useCreateExpense";
import { Button } from "./ui/button";
import { CalendarIcon, Loader2Icon } from 'lucide-react'
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { z } from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";

const AddExpenseForm = () => {

  const form = 
  useForm<z.infer<typeof expenseSchema>>({
    resolver: zodResolver(expenseSchema)
  });

  const onSubmit = (values: z.infer<typeof expenseSchema>) => {
    createExpense(values);
    form.reset({Denomination: 0, Name: "", Description: "", ExpenseDate: undefined, Quantity: 0, Type: "Food"});
  }

  const { mutate: createExpense, isPending } = useCreateExpense();

  return (
    <Form {...form}>
        <form 
        className="flex border-2 border-double border-white flex-col gap-y-2 p-6 bg-(image:--color-grad-2) rounded-4xl min-w-[400px]"
            onSubmit={form.handleSubmit(onSubmit)}
        >
            <h2 className="text-white italic text-center">Create Expense</h2>
            <FormField control={form.control} name="Name" render={({ field })=> (
                <FormItem>
                    <FormLabel>{field.name}</FormLabel>
                    <FormControl>
                        <Input id={field.name} className="bg-white rounded-2xl px-2" {...field} type="text" placeholder="Enter the name of the expense" />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                </FormItem>
            )}/>

            <FormField control={form.control} name="Description" render={({ field })=> (
                <FormItem>
                    <FormLabel>{field.name}</FormLabel>
                    <FormControl>
                        <Input id={field.name} className="bg-white rounded-2xl px-2" {...field} type="text" placeholder="Enter the expense description" />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                </FormItem>
            )}/>

            <FormField control={form.control} name="Type" render={({ field })=> (
                <FormItem>
                    <FormLabel>{"Expense "+field.name}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className="w-full bg-white rounded-2xl px-2">
                                <SelectValue placeholder="Select the type of expense" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-xl">
                            {expenseSchema.shape.Type.options.map(op => (
                                <SelectItem key={op} value={op}>
                                    {op}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormDescription></FormDescription>
                    <FormMessage />
                </FormItem>
            )}/>


            <FormField control={form.control} name="Denomination" render={({ field })=> (
                <FormItem>
                    <FormLabel>{field.name}</FormLabel>
                    <FormControl>
                        <Input id={field.name} className="bg-white rounded-2xl px-2" {...field}
                        type="number" placeholder="Enter the expense monetary amount" />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                </FormItem>
            )}/>

            <FormField control={form.control} name="Quantity" render={({ field })=> (
                <FormItem>
                    <FormLabel>{field.name}</FormLabel>
                    <FormControl>
                        <Input id={field.name} className="bg-white rounded-2xl px-2" {...field} type="number" min={1} placeholder="Quantity" />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                </FormItem>
            )}/>

            <FormField control={form.control} name="ExpenseDate" render={({ field })=> (
                <FormItem>
                    <FormLabel>{"Expense Date"}</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[180px] font-normal flex justify-start rounded-2xl",
                                    !field.value && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="h-4 w-4 opacity-50" />
                                {field.value ? (
                                    `${field.value.getDate().toString().padStart(2,'0')}/${(field.value.getMonth()+1).toString().padStart(2,'0')}/${field.value.getFullYear()}`
                                ) : (
                                    <span>Date of the Expense</span>
                                )}
                            </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto" align="start">
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                            captionLayout="dropdown"
                        />
                        </PopoverContent>
                    </Popover>
                    <FormDescription></FormDescription>
                    <FormMessage />
                </FormItem>
            )}/>
            <Button className="bg-(image:--color-grad-1) rounded-2xl hover:bg-(image:--color-grad-6) hover:cursor-pointer disabled:bg-gray-400 border-2" disabled={isPending} type="submit">
                {isPending && <Loader2Icon className="animate-spin" />}
                {isPending ? 'Submitting...' : 'Submit'}
            </Button>
        </form>
    </Form>
  )
}
export default AddExpenseForm;