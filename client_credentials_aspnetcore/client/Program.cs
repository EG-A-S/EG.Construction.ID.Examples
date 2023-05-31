using System.Text.Json;
using IdentityModel.Client;

// check if discovery is working
var client = new HttpClient();
var disco = await client.GetDiscoveryDocumentAsync("https://eg-id-identityserver-v1-dev.rancher.codezoo.io");
if (disco.IsError)
{
    Console.WriteLine(disco.Error);
    return;
}


// request token
var tokenResponse = await client.RequestClientCredentialsTokenAsync(new ClientCredentialsTokenRequest
{
    Address = disco.TokenEndpoint,

    ClientId = "client_credentials_example",
    ClientSecret = "secret",
    Scope = "ids_api"
});

if (tokenResponse.IsError)
{
    Console.WriteLine(tokenResponse.Error);
    return;
}

Console.WriteLine(tokenResponse.AccessToken);

// call api
var apiClient = new HttpClient();
apiClient.SetBearerToken(tokenResponse.AccessToken);

var response = await apiClient.GetAsync("https://localhost:6001/WeatherForecast");
if (!response.IsSuccessStatusCode)
{
    Console.WriteLine(response.StatusCode);
}
else
{
    var doc = JsonDocument.Parse(await response.Content.ReadAsStringAsync()).RootElement;
    Console.WriteLine(JsonSerializer.Serialize(doc, new JsonSerializerOptions { WriteIndented = true }));
}