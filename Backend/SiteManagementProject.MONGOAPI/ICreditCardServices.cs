using System.Collections.Generic;

namespace SiteManagementProject.MONGOAPI
{
    public interface ICreditCardServices
    {
        List<CreditCard> GetCreditCards();
        CreditCard AddCreditCard (CreditCard creditCard);
        CreditCard GetCreditCard(string id);
        void DeleteCreditCard(string id);
        CreditCard UpdateCreditCard(CreditCard creditCard);
        List<CreditCard> GetCreditCardByEmail(string email);
    }
}
