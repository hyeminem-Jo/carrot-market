// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import client from '@/libs/server/client';
import withHandler from '@/libs/server/withHandler';

// type Data = {
//   name: string;
//   email: string;
//   ok: boolean;
// };
// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body; // email 아니면 phone 을 데이터로 받음
  const payload = phone ? { phone: +phone } : { email };
  const user = await client.user.upsert({
    // phone 에 해당하는 user 찾기
    where: {
      ...payload,
    },
    // user 가 없으면 새 user 생성
    create: {
      name: 'Anonymous',
      ...payload,
    },
    update: {},
  });
  console.log(user);
  return res.status(200).end();
}

export default withHandler('POST', handler);
// withHandler 를 호출하면 withHandler 가 그 안에서 return 하고 있는 다른 function 이 실행된다.
// 아래와 같이 실행되는 것과 똑같다.

// export default async function (req: NextApiRequest, res: NextApiResponse) {
//   ...
// };
