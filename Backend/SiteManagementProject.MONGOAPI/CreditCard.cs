using MongoDB.Bson.Serialization.Attributes;

namespace SiteManagementProject.MONGOAPI
{
    public class CreditCard
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }
        public string CreditCardNumber { get; set; }
        public string Fullname { get; set; }
        public string Email { get; set; }
        public string ExpirationDate { get; set; }
        public string CvvNumber { get; set; }
        public double Balance { get; set; }
    }
}
