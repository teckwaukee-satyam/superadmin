using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;

namespace SuperAdminPanel.Pages
{
    public class CandidateModel : PageModel
    {
        public List<Candidate> Candidates { get; set; } = new List<Candidate>();

        public void OnGet()
        {
            // Populate with sample data
            Candidates = new List<Candidate>
            {
                new Candidate { Id = 1, Name = "John Doe", Email = "john@example.com", Phone = "555-123-4567", Location = "New York" },
                new Candidate { Id = 2, Name = "Jane Smith", Email = "jane@example.com", Phone = "555-987-6543", Location = "London" },
                new Candidate { Id = 3, Name = "Peter Jones", Email = "peter@example.com", Phone = "555-555-1212", Location = "Sydney" }
            };
        }
    }

    // Simple Candidate class for demonstration
    public class Candidate
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Location { get; set; }
    }
}

