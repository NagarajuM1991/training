public with sharing class AccountController {
    public AccountController() {

    }
 
    @AuraEnabled (cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name FROM Account Limit 10];        
    }

    @AuraEnabled
    public static List<contact> getContacts(string AccountId){
       system.debug('%%%%%%'+AccountId);
       return [SELECT Id,FirstName,LastName,Phone,Email,AccountId,Account.Name,Name from contact where AccountId =: AccountId AND AccountID != ''];
    }


    @AuraEnabled
       public static String CreateContact(contact con){
            insert con;
            return con.Id;
       }
}