using api.domain;

namespace api.dto
{
    public record CreateBudgetCategoryDTO(string Name, BudgetCategoryType CategoryType, decimal Allocated, decimal Spent);
}
