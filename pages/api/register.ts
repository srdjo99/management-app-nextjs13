import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import { db } from '@/lib/db';
import { createJWT, hashPassword } from '@/lib/auth';

export default async function register(req, res) {
  if (req.method === 'POST') {
    const user = await db.user.create({
      data: {
        email: req.body.email,
        password: await hashPassword(req.body.password),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });

    const jwt = await createJWT(user);

    res.setHeader(
      'Set-Cookie',
      serialize(process.env.COOKIE_NAME!, jwt, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
    );

    return res.status(201).json({ message: 'Registered successfully' });
  } else {
    return res.status(402).json({ message: 'Registration unsuccessful' });
  }
}
