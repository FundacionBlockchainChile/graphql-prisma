import { Prisma } from 'prisma-binding';
import { fragmentReplacements } from './resolvers/index';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  secret: 'thisismysupersecrettext',
  fragmentReplacements,
});

export { prisma as default };

//prisma.query
//prisma.mutation
//prisma.suscription
//prisma.exits

// const createPostForUser = async (authorId, data) => {
//   const userExist = await prisma.exists.User({
//     id: authorId,
//   });

//   if (!userExist) {
//     throw new Error('User not found');
//   }

//   const post = await prisma.mutation.createPost(
//     {
//       data: {
//         ...data,
//         author: {
//           connect: {
//             id: authorId,
//           },
//         },
//       },
//     },
//     '{ author { id name email posts { id title published }} }'
//   );
//   return post.author;
// };

// const updatePostForUser = async (postId, data) => {
//   const postExist = await prisma.exists.Post({
//     id: postId,
//   });

//   if (!postExist) {
//     throw new Error('Post not found');
//   }

//   const post = await prisma.mutation.updatePost(
//     {
//       where: {
//         id: postId,
//       },
//       data,
//     },
//     '{ author { id name email posts { id title published } } }'
//   );
//   return post.author;
// };

// updatePostForUser('ckkzlpfqh00ly0941gmgbp5qb', {
//   published: true,
//   title: 'You are a great Dog again',
// })
//   .then((user) => console.log(JSON.stringify(user, undefined, 2)))
//   .catch((error) => {
//     console.log(error.message);
//   });
