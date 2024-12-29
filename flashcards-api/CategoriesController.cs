using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetCategories()
        {
            var categories = new[]
            {
                new { Id = 1, Name = "Programming" },
                new { Id = 2, Name = "Math" },
                new { Id = 3, Name = "Science" }
            };

            return Ok(categories);
        }
    }
}
