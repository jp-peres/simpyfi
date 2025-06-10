using api.domain;

namespace api.dto;
public record BudgetDTO(int Id, Guid PublicId, string Name, decimal TotalAmount, DateTime StartDate, DateTime EndDate, List<BudgetCategory> Categories, bool IsRecurring, string? Notes, CurrencyType Currency, decimal SpentAmount);