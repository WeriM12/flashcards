var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
        policy.WithOrigins("http://localhost:3000")  // Allow React's default port
              .AllowAnyHeader()
              .AllowAnyMethod());
});

builder.Services.AddControllers();

var app = builder.Build();

// Use CORS policy
app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.UseHttpsRedirection();

app.Run();
