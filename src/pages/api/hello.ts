// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import client from '@/libs/server/client';

type Data = {
  name: string;
  email: string;
  ok: boolean;
};

export default async function handler( // promise 를 리턴한다고 되어있기 때문에 async 추가
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  // next 는 request 와 response 객체를 제공해준다.
) {
  await client.user.create({
    // promise 리턴
    data: {
      email: 'konnimey@naver.com',
      name: '혜지닝',
    },
  });
  res.status(200).json({ name: 'John Doe', email: 'konnimey', ok: true });
}
