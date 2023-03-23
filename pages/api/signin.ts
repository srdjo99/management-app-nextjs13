import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import { comparePasswords, createJWT } from '@/lib/auth';
import { db } from '@/lib/db';

export default async function signin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const user = await db.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    const isUser = await comparePasswords(req.body.password, user?.password);

    if (isUser) {
      const jwt = await createJWT(user);
      res.setHeader(
        'Set-Cookie',
        serialize(process.env.COOKIE_NAME!, jwt, {
          httpOnly: true,
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
        })
      );
    }
    return res.status(201).json({ message: 'Successfully signed in!' });
  } else {
    return res.status(402).json({ message: 'Wrong credentials' });
  }
}
