using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

namespace SuperAdminPanel.Pages
{
    public class AddAdminModel : PageModel
    {
        [BindProperty]
        public AdminInputModel AdminInput { get; set; } = new();

        public List<SelectListItem> RoleOptions { get; set; } = new()
        {
            new SelectListItem { Value = "account_manager", Text = "Account Manager" },
            new SelectListItem { Value = "product_manager", Text = "Product Manager" },
            
        };

        public void OnGet()
        {
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            // Process the form data (save to database, etc.)
            // Example:
            // var newAdmin = new Admin {
            //     FullName = AdminInput.FullName,
            //     Email = AdminInput.Email,
            //     // ... other properties
            // };
            // await _adminService.CreateAdmin(newAdmin, AdminInput.ProfileImage);

            return RedirectToPage("/Admin/List", new { success = true });
        }
    }

    public class AdminInputModel
    {
        [Required]
        [Display(Name = "Full Name")]
        public string FullName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [Display(Name = "WhatsApp Number")]
        [RegularExpression(@"^\+?[1-9]\d{1,14}$", ErrorMessage = "Invalid WhatsApp number format")]
        public string WhatsAppNumber { get; set; }

        [Required]
        [Display(Name = "Employee ID")]
        public string EmployeeId { get; set; }

        [Required]
        public string Designation { get; set; }

        [Required]
        [Display(Name = "Office Address")]
        public string OfficeAddress { get; set; }

        [Required]
        public string Role { get; set; }

        [Required]
        [Display(Name = "Profile Image")]
        [DataType(DataType.Upload)]
        public IFormFile ProfileImage { get; set; }
    }
}