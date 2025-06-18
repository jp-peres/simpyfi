using System.Text.Json.Serialization;

namespace api.domain;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum ExpenseType
{
    Food,
    Clothing,
    Traveling,
    Health,
    Education,
    CarMaintenance,
    Gas,
    WellnessAndGrooming,
    TechnologyAndGadgets,
    Salary,
    Rent,
    Installments,
    PassiveIncome,
}