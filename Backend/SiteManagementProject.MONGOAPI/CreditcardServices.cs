using MongoDB.Driver;
using System.Collections.Generic;

namespace SiteManagementProject.MONGOAPI
{
    public class CreditcardServices : ICreditCardServices
    {
        private readonly IMongoCollection<CreditCard> _creditCards;
        public CreditcardServices(IDbClient dbClient)
        {
            _creditCards = dbClient.GetCreditCardCollection();
        }

        public CreditCard AddCreditCard(CreditCard creditCard)
        {
            _creditCards.InsertOne(creditCard);
            return creditCard;
        }

        public void DeleteCreditCard(string id)
        {
            _creditCards.DeleteOne(creditCard => creditCard.Id == id);
        }

        public CreditCard GetCreditCard(string id)
        {
            return _creditCards.Find(creditCard => creditCard.Id == id).First();
        }

        public List<CreditCard> GetCreditCardByEmail(string email)
        {
            return _creditCards.Find(creditCard => creditCard.Email == email).ToList();
        }

        public List<CreditCard> GetCreditCards()
        {
            return _creditCards.Find(CreditCard => true).ToList();
        }

        public CreditCard UpdateCreditCard(CreditCard creditCard)
        {
            GetCreditCard(creditCard.Id);
            _creditCards.ReplaceOne(c => c.Id == creditCard.Id, creditCard);
            return creditCard;
        }
    }
}
