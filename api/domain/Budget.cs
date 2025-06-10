namespace api.domain;
public class Budget
{
    public int Id { get; set; }
    public Guid PublicId { get; set; } = Guid.NewGuid();
    public string Name { get; set; }
    public decimal TotalAmount { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public List<BudgetCategory> Categories { get; set; } = [];


    public bool IsRecurring { get; set; }
    public string? Notes { get; set; }
    public CurrencyType Currency { get; set; }
    public List<BudgetAlert> Alerts { get; set; } = [];
    public decimal SpentAmount => Categories.Sum(c => c.Spent);
}