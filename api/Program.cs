using api.dto;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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

app.MapPost("/hello", (HelloAPIDTO data) =>
{
    return Results.Ok(new HelloAPIDTO($"Hello, {data.name}"));
})
.WithName("HelloAPI")
.WithOpenApi(); ;


app.Run();
