namespace api.domain;
public class BudgetAlert
{
    public int Id { get; set; }
    public Guid PublicId { get; set; } = Guid.NewGuid();
    public string Message { get; set; }
    public decimal Threshold { get; set; }
    public bool IsTriggered { get; set; }
}