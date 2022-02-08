import { baseURL } from './baseURL';
import axios from "axios"

type user = {
 id: string;
 name: string;
 email: string;
}
type newsType = {
 title: string
 content: string
 date: number
}

const news: newsType = {
 title: "Outra notícia",
 content: "conteúdo",
 date: Date.now()
}

// async function getSubscribers(): Promise<any[]> {
//  const response = await axios.get(`${baseUrl}/subscribers`);
//  return response.data;
// };

const getSubscribers = async (): Promise<user[]> => {
 const response = await axios.get(`${baseURL}/subscribers`)
 return response.data.map((res: any) => {
  return {
   id: res.id,
   name: res.name,
   email: res.email,
  };
 });
}

async function createNews(news: newsType): Promise<void> {
 await axios.put(`${baseURL}/news`, news);
}


// const sendNotifications = async (
//  users: user[],
//  message: string
// ): Promise<void> => {

//  try {
//   for (const user of users) {
//    await axios.post(`${baseURL}/notifications`, {
//     subscriberId: user.id,
//     message
//    });
//   }

//   console.log("All notifications sent");
//  } catch {
//   console.log("Error");
//  }
// };

const sendNotifications = async (
 users: user[],
 message: string
): Promise<void> => {

 try {
  const promises = users.map(user => {
   return axios.post(`${baseURL}/notifications`, {
    subscriberId: user.id,
    message: message,
   })
  })

  await Promise.all(promises);

 } catch {
  console.log("Error");
 }
};

const main = async (): Promise<void> => {
 try {

  await createNews(news)

  const subscribers = await getSubscribers()
  console.log(subscribers)

  await sendNotifications(subscribers, "seja bem vindo")

 } catch (err: any) {
  console.log(err.response?.data || err.message)
 }
}

main()