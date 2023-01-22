import PocketBase, { Record } from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

export type ItemRecord = Record & {
  item_image: string;
  file_url: string;
  name: string;
  description?: string;
  featured: boolean;
  price_id: string;
};

// "logout" the last authenticated account
// pb.authStore.clear();

// console.log(process.env.PB_EMAIL, process.env.PB_PASSWORD);
// const authData = await pb.admins.authWithPassword(
//   process.env.PB_EMAIL!,
//   process.env.PB_PASSWORD!
// );

// after the above you can also access the auth data from the authStore
// console.log(pb.authStore.isValid);
// console.log(pb.authStore.token);
// console.log(pb.authStore.model!.id);

// you can also fetch all records at once via getFullList
// const records = await pb.collection('items').getFullList(200 /* batch size */, {
//   sort: '-created',
// });

// export { records };
