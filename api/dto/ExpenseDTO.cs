using api.domain;
namespace api.dto;
public record ExpenseDTO(int Id, string Name, string Description, ExpenseType Type, decimal Denomitation, int Quantity, DateTime ExpenseDate, DateTime LastUpdateDate);