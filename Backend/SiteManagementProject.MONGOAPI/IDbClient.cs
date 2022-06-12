using MongoDB.Driver;

namespace SiteManagementProject.MONGOAPI
{
    public interface IDbClient
    {
        IMongoCollection<CreditCard> GetCreditCardCollection();
    }
}
