import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export default function withHandler(
  method: 'GET' | 'POST' | 'DELETE',
  fn: NextApiHandler,
  // fn: (req: NextApiRequest, res: NextApiResponse) => void,
): NextApiHandler {
  // next.js 가 실행해야 할 함수를 반환
  return async (req, res) => {
    if (req.method !== method) {
      // req.method 가 우리가 원한 method 가 아닐 때
      return res.status(405).end(); // HTTP 405 오류는 웹 서버에서 요청된 URL 에 대해 HTTP 메서드를 허용하지 않을 때 발생
    }
    try {
      await fn(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
