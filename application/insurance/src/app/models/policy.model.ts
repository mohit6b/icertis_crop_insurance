export class PolicyModel {
    policyName:string;
    tenure: number;
    amount:number;
    premium:number;
    oracleId:string;
    status:boolean;

    init(){
        this.policyName = 'sampkarin123';
        this.tenure = 6;
        this.amount = 10000;
        this.premium = this.amount /10;
        this.oracleId = '1';
        
    }

}