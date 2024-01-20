using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly DataContext context;
   
    public UsersController(DataContext context)
   {
     this.context = context;
   }
[HttpGet]
public async Task <ActionResult<IEnumerable<AppUser>>> GetUsers ()
{
    var usersnew = await this.context.Usersnew.ToListAsync();
    return usersnew;
}

[HttpGet("{id}")]
public async Task <ActionResult<AppUser>> GetUsers (int id)
{
    var usernew = await this.context.Usersnew.FindAsync(id);
    return usernew;
}

    
}
