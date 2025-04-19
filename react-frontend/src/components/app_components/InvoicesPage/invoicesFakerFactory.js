
import { faker } from "@faker-js/faker";
export default (user,count,companyidIds,itemIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
companyid: companyidIds[i % companyidIds.length],
item: itemIds[i % itemIds.length],
subTotal: faker.datatype.number(""),
total: faker.datatype.number(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
