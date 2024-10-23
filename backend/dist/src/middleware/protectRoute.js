import jwt from 'jsonwebtoken';
import prisma from "../db/prisma.js";
const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: 'Not authorized to access this route' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
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
        return null;
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
export default protectRoute;
