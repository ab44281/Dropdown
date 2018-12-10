// class and interface of society Url
export class Society {
  societyid: number;
  societyname: string;
  address: string;
  pincode: number;
}

export interface ISociety {
  societyid: number;
  pincode: number;
  societyname: string;
  address: string;
}
