import { Request, Response, NextFunction } from "express";
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';
import prisma from "../db/prisma.js";

interface DecodedToken extends JwtPayload {
    userId: string;
}

declare global {
    namespace Express {
        export interface Request {
            user: {
                id: string;
            };
        }
    }
}

const protectRoute = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: 'Not authorized to access this route' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

        if (!decoded) {
            return res.status(401).json({ error: 'Not authorized to access this route' });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: decoded.userId,
            },
            select: {
                id: true,
                username: true,
                name: true,
                profilePic: true,
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'No user found with this id' });
        }

        req.user = user;

        next();

        return null as any;
    }
    catch (error: any) {
        res.status(500).send(error.message);
    }
}

export default protectRoute;