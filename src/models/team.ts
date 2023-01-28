import { createSchema, Type, typedModel } from "ts-mongoose";
import { v4 as uuid } from "uuid";
import * as Models from "./index";

const teamSchema = createSchema(
  {
    _id: Type.string({ default: uuid }),
    team_lead_name: Type.string({ default: null }),
    company_id: Type.ref(Type.string({ default: null })).to(
      "companies",
      <any>Models.Company
    ),
  },
  {
    timestamps: true,
  }
);

const Team = typedModel("teams", teamSchema);
export default Team;
