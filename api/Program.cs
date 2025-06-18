using api.dto;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var expenses = new List<ExpenseDTO>();
var counter = 1;

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(policy =>
{
    policy.AllowAnyMethod()
    .AllowAnyOrigin()
    .AllowAnyHeader();
});

app.MapGet("/api/v1/expenses/{Id}", (int Id) =>
{
    var expense = expenses.SingleOrDefault(p => p.Id == Id);

    return expense == null ? Results.NotFound() : Results.Ok(expense);
});

app.MapPost("/api/v1/expenses", ([FromBody] CreateExpenseDTO expense) =>
{
    var newExpense = new ExpenseDTO(counter, expense.Name, expense.Description, expense.Type, expense.Denomination, expense.Quantity, expense.ExpenseDate, expense.ExpenseDate);
    expenses.Add(newExpense);
    counter++;
    return Results.Created($"/api/v1/expenses/{newExpense.Id}", newExpense);
})
.WithName("Create Expense")
.WithOpenApi(); ;


app.Run();
