import { LogLevel } from "angular-auth-oidc-client";

export const environment = {
    authConfig: {
        triggerAuthorizationResultEvent: true,
        unauthorizedRoute: '/unauthorized',
        authority: 'https://eg-id-identityserver-v1-dev.rancher.codezoo.io',
        redirectUrl: `${window.location.origin}`,
        postLogoutRedirectUri: `${window.location.origin}`,
        clientId: '1395fad3-5245-4bc2-8d1f-a5c32f385640',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        useRefreshToken: true,
        logLevel: LogLevel.Error,
    },
};
