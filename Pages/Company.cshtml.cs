using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SuperAdminPanel.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;


namespace SuperAdminPanel.Pages
{
    public class CompanyModel : PageModel
    {
        private readonly IConfiguration _configuration;

        public CompanyModel(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public List<Company> Companies { get; set; } = new List<Company>();
        public string ErrorMessage { get; set; }

        //public async Task OnGetAsync()
        //{
        //    string connectionString = _configuration.GetConnectionString("DefaultConnection");

        //    if (string.IsNullOrEmpty(connectionString))
        //    {
        //        ErrorMessage = "Database connection string is not configured.";
        //        return;
        //    }

        //    try
        //    {
        //        using (SqlConnection connection = new SqlConnection(connectionString))
        //        {
        //            await connection.OpenAsync();
        //            string sql = "SELECT CompanyId, CompanyName, Industry, Location FROM Companies";
        //            using (SqlCommand command = new SqlCommand(sql, connection))
        //            using (SqlDataReader reader = await command.ExecuteReaderAsync())
        //            {
        //                while (await reader.ReadAsync())
        //                {
        //                    Companies.Add(new Company
        //                    {
        //                        CompanyId = reader.GetInt32(0),
        //                        CompanyName = reader.GetString(1),
        //                        Industry = reader.GetString(2),
        //                        Location = reader.GetString(3)
        //                    });
        //                }
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        ErrorMessage = $"An error occurred while fetching companies: {ex.Message}";
        //        // Log the exception for debugging purposes
        //        // _logger.LogError(ex, "Error fetching companies");
        //    }
        //}

        // Example of a potential POST handler for future functionality (e.g., adding a company)
        /*
        public async Task<IActionResult> OnPostAsync(Company newCompany)
        {
            // Logic to add a new company to the database
            return RedirectToPage();
        }
        */
    }

    // Simple Company model for demonstration
    public class Company
    {
        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string Industry { get; set; }
        public string Location { get; set; }
        }
    }

