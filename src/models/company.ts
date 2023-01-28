import { createSchema, Type, typedModel } from "ts-mongoose";
import { v4 as uuid } from "uuid";

const companySchema = createSchema(
  {
    _id: Type.string({ default: uuid }),
    name: Type.string({ default: null }),
    ceo: Type.string({ default: null }),
    address: Type.string({ default: null }),
    inception_date: Type.date({ default: new Date() }),
  },
  {
    timestamps: true,
  }
);
console.log(new Date());
const Company = typedModel("companies", companySchema);
console.log(Company);
export default Company;
