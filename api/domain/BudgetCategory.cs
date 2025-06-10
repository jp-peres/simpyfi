namespace api.domain;
public class BudgetCategory
{
    public int Id { get; set; }
    public Guid PublicId { get; set; } = Guid.NewGuid();
    public string Name { get; set; }
    public BudgetCategoryType CategoryType { get; set; }
    public decimal Allocated { get; set; }
    public decimal Spent { get; set; }
}