using System.Collections.Generic;
using System;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;
using Twilio.Clients;
using System.Threading.Tasks;
using Twilio;

namespace Wheelers.Models
{
    public class TwilioIntegration
    {
        public MessageResource SendMessage(string to, string verificationCode)
        {
            try
            {
                string accountSid = "ACc3086b123331e9837ddb5ae3c7aeee10";
                string authToken = "a03f8f3bb3ab503bb326fcb219fbdce1";
                TwilioClient.Init(accountSid, authToken);

                var messageOptions = new CreateMessageOptions(
                    new PhoneNumber("whatsapp:+92" + to));
                messageOptions.From = new PhoneNumber("whatsapp:+14155238886");
                messageOptions.Body = "Your verification code is: " + verificationCode;

                var message = MessageResource.Create(messageOptions);
                return message;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}