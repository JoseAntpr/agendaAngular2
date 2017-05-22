import { InjectionToken, ValueProvider } from '@angular/core';

//Para hacer una inyección de un valor necesitamos crear un token
//usando la clase 'InjectionToken'. No debemos usar como token un string.
export const ApiUrl: InjectionToken<string> = new InjectionToken<string>("ApiUrl");

export const ApiUrlProvider: ValueProvider = {
    provide: ApiUrl,
    useValue: "http://localhost:3004/"
};
