// Pages/AddCandidate.cshtml.cs
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace SuperAdminPanel.Pages
{
    public class AddCandidateModel : PageModel
    {
        [BindProperty]
        public CandidateInput CandidateInput { get; set; } = new CandidateInput();

        public void OnGet()
        {
        }

        public IActionResult OnPost()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            // Process the form data here (save to database, etc.)
            // Redirect to success page or list page
            return RedirectToPage("/Candidates/List");
        }
    }

    public class CandidateInput
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [Phone]
        public string Phone { get; set; }

        [Required]
        public string Location { get; set; }
    }
}