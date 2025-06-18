using api.domain;
namespace api.dto;
public record CreateExpenseDTO(string Name, string Description, ExpenseType Type, decimal Denomination, int Quantity, DateTime ExpenseDate);
