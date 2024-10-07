import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import prisma from '../db/prisma.js';
import generateToken from '../utils/generateToken.js';

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, password, confirmPassword, name, gender } = req.body;

    if (!username || !password || !confirmPassword || !name || !gender) {
      return res.status(400).json({ error: 'Please fill in all fields' });
    }

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const profilePicMan = "https://avatar.iran.liara.run/public/boy?username=" + username;
    const profilePicWoman = "https://avatar.iran.liara.run/public/girl?username=" + username;

    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        name,
        gender,
        profilePic: gender === 'male' ? profilePicMan : profilePicWoman,
      },
    });

    if (newUser) {
      generateToken(newUser.id, res);

      res.status(201).json({ message: 'User created successfully' });
    } else {
      res.status(400).json({ error: 'User could not be created' });
    }

    return null as any;
  }
  catch (error: any) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Please fill in all fields' });
    }

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    generateToken(user.id, res);

    res.status(200).json(user);

    return null as any;
  }

  catch (error: any) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie('jwt');
    res.status(200).json({ message: 'Logged out successfully' });
  }
  catch (error: any) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

export const getAuth = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'No user found with this id' });
    }

    res.status(200).json(user);

    return null as any;
  }
  catch (error: any) {
    res.status(500).send(error.message);
  }
};
