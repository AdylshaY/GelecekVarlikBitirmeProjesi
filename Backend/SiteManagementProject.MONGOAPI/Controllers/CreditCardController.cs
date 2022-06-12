using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SiteManagementProject.MONGOAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreditCardController : ControllerBase
    {
        private readonly ICreditCardServices _creditCardServices;
        public CreditCardController(ICreditCardServices creditCardServices)
        {
            _creditCardServices = creditCardServices;
        }

        [HttpGet]
        public IActionResult GetCreditCards()
        {
            return Ok(_creditCardServices.GetCreditCards());
        }

        [HttpGet("{id}", Name = "GetCreditCard")]
        public IActionResult GetCreditCard(string id)
        {
            return Ok(_creditCardServices.GetCreditCard(id));
        }

        [HttpPost]
        public IActionResult AddCreditCard(CreditCard creditCard)
        {
            _creditCardServices.AddCreditCard(creditCard);
            return CreatedAtRoute("GetCreditCard", new { id = creditCard.Id }, creditCard);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCreditCard(string id)
        {
            _creditCardServices.DeleteCreditCard(id);
            return NoContent();
        }

        [HttpPut]
        public IActionResult UpdateCreditCard(CreditCard creditCard)
        {
            return Ok(_creditCardServices.UpdateCreditCard(creditCard));
        }

        [HttpGet("GetCreditCardByEmail")]
        public IActionResult GetCreditCardByEmail(string email)
        {
            return Ok(_creditCardServices.GetCreditCardByEmail(email));
        }
    }
}
