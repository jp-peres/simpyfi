import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { api } from '../lib/api';
import { toast } from 'react-toastify';
import type { ExpenseInput } from '../schemas/expenseSchema ';


export const useCreateExpense = (): UseMutationResult<
  any,
  Error,
  ExpenseInput
> => {
  return useMutation({
    mutationFn: async (data: ExpenseInput) => {
      const res = await api.post('/expenses', data);
      return res.data;
    },
    onSuccess: () => {
      toast.success('Expense created!');
    },
    onError: () => {
      toast.error('Failed to create expense');
    }
  });
};