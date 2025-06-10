using api.domain;

namespace api.dto;
    public record BudgetCategoryDTO(int Id, Guid PublicId, string Name, BudgetCategoryType CategoryType, decimal Allocated, decimal Spent);