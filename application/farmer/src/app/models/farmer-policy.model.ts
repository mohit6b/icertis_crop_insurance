export class FarmerPolicyModel {
  fullName: string;
  issuedOn: Date;
  validThru: Date;
  farm: [string, string];
  policyNumber: string;
  amount: number;
}
