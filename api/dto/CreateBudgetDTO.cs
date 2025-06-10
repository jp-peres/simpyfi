using api.domain;
namespace api.dto;
public record CreateBudgetDTO(string Name, decimal TotalAmount, DateTime StartDate, DateTime EndDate, bool IsRecurring, CurrencyType Currency, string? Notes);