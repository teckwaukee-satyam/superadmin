
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace SuperAdminPanel.Pages
{
    public class AddCompanyModel : PageModel
    {
        [BindProperty]
        public CompanyInputModel Company { get; set; } = new CompanyInputModel();

        public void OnGet()
        {
        }

        public IActionResult OnPost()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            // Do something with Company (e.g., save to DB)

            return RedirectToPage("/Index");
        }

        public class CompanyInputModel
        {
            [Required]
            public string Name { get; set; }

            public string Industry { get; set; }

            [Range(1900, 2100)]
            public int? FoundedYear { get; set; }

            [Url]
            public string Website { get; set; }

            [EmailAddress]
            public string Email { get; set; }

            public string Phone { get; set; }

            public string Address { get; set; }
        }
    }
}
