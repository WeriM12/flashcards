/*using Microsoft.EntityFrameworkCore;

public class FlashcardContext : DbContext
{
    public DbSet<Category> Categories { get; set; }
    public DbSet<Flashcard> Flashcards { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=flashcards.db");
    }
}

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Color { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;

    public ICollection<Flashcard> Flashcards { get; set; }
}

public class Flashcard
{
    public int Id { get; set; }
    public string Question { get; set; }
    public string Answer { get; set; }

    public int CategoryId { get; set; }
    public Category Category { get; set; }
}
*/