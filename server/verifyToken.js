import  jwt  from "jsonwebtoken";


export default function verifyToken(req, res, next) {
    const { authorization } = req.headers;
    console.log(authorization)
    if (!authorization) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}
