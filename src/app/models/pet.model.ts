// export interface Pet {
export class Pet {

  constructor(
  public species: string = null,
  public breed: string = null,
  public name: string = null,
  public age: number = null,
  public weight: number = null,
  public size: string = null,
  public location: string = null,
  public adopted: boolean = false,
  public available: boolean = true,
  public organization: string = null,
  public owner: string = null
  // public _id: string = null

  ) { }
  // _id: string;
  // species: string;
  // breed: string;
  // name: string;
  // age: number;
  // weight: number;
  // size: string;
  // location: string;
  // adopted: boolean = false;
  // available: boolean = true;

}

