export interface CreateTableUseCase{
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions{
    base: number;
    limit?: number;
}


export class CreateTable implements CreateTableUseCase{
    
    constructor(
        /**
         * DI - Dependency Injection
         */
    ){

    }

    execute({base, limit = 10}: CreateTableOptions){
        
        let outputMessage: string = '';

        for (let i = 0; i < limit; i++) {
            const result: number = base * (i+1);
        
            outputMessage += `${base} x ${i+1} = ${result}\n`;
        }

        return outputMessage;
    }
}