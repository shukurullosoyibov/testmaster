import { DialogData, FormData, FormDataTypes } from "@/types";

export function templateBuilder<T extends {}>(data: any): T {
  if (Object.keys(data).includes("companyName")) {
    return {
      ...data,
      from_name: data["email"],
      message: `
        Hi my name is ${data["firstName"]} ${data["lastName"]}.
        My Company name is ${data["companyName"]}.
        My contacts: ${data["phoneNumber"]}.
        Message: ${data["message"]}.
      `,
    };
  } else {
    return {
      ...data,
      from_name: data["email"],
      message: `
        My business activity: ${data["business_activity"]["label"]},
        I will require type of: ${data["premises"]["label"]},
        Owners: ${data["owners"]},
        Vizas: ${data["vizas"]},
        My name is ${data["lastName"]} ${data["firstName"]},
        My phone number is: ${data["phoneNumber"]},
        My email is: ${data["email"]}.
      `,
    };
  }
}
