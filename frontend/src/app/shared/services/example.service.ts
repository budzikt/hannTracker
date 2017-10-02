import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {
    
    exampleLog(): string{
        console.log(`I'm logging from a service`);
        return 'LOGGED from SERVICE';
    }

}