import { collection, addDoc } from 'firebase/firestore';
import { database } from '../firebase.js';
import xml2js from 'xml2js'

export const saveDataToFirebase = async (data, categories) => {
  return new Promise((resolve) => {
    const arr = [];
    const parser = new xml2js.Parser({
      trim: true,
      explicitArray: true
    });

    parser.parseString(data, function (err, result) {
      const obj = result.yml_catalog;
      const offers = obj.shop[0].offers[0].offer;

      for (const item of offers) {
        arr.push({
          name: item.name,
          id: item.$.id,
          groupId: item.$.group_id,
          categoryId: item.categoryId,
          description: item.description,
          param: item.param,
          price: item.price,
          vendor: item.vendor,
          vendorcode: item.vendorCode,
          url: item.url,
          picture: item.picture,
          disabled: item.disabled
        });

        const foundObject = categories.find((search) => search.categoryId === arr[arr.length - 1].categoryId);

        if (foundObject) {
          const categoryRef = collection(database, `categories/${foundObject.id}/products`);
          addDoc(categoryRef, {
            name: arr[arr.length - 1].name,
            id: arr[arr.length - 1].id,
            categoryId: arr[arr.length - 1].categoryId,
            description: arr[arr.length - 1].description,
            vendorCode: arr[arr.length - 1].vendorcode,
            url: arr[arr.length - 1].url,
            picture: arr[arr.length - 1].picture,
            price: arr[arr.length - 1].price
          });
          console.log('Added to database');
        } else {
          console.log('not found');
        }
      }

      resolve(arr);
    });
  });
};