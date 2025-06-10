namespace api.domain;
public class Expense
{
    public int Id { get; set; }
    public Guid PublicId { get; set; } = Guid.NewGuid();
    public string Name { get; set; }
    public string Description { get; set; }
    public ExpenseType Type { get; set; }
    public decimal Denomination { get; set; }
    public int Quantity { get; set; }
    public DateTime ExpenseDate { get; set; }
    public DateTime LastUpdateDate { get; set; }
}