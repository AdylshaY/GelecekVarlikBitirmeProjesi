using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace SiteManagementProject.MONGOAPI
{
    public class DbClient : IDbClient
    {
        private readonly IMongoCollection<CreditCard> _creditCards;
        public DbClient(IOptions<CreditCardDbConfig> creditCardDbConfig)
        {
            var client = new MongoClient(creditCardDbConfig.Value.Connection_String);
            var database = client.GetDatabase(creditCardDbConfig.Value.Database_Name);
            _creditCards = database.GetCollection<CreditCard>(creditCardDbConfig.Value.CreditCards_Collection_Name);
        }

        public IMongoCollection<CreditCard> GetCreditCardCollection()
        {
            return _creditCards;
        }
    }
}
