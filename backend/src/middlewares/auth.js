const jwt = require('jsonwebtoken');
require('dotenv').config();
const Secret = process.env.SECRET;

module.exports = (request, response, next) => {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		return response.status(401).send({ error: 'O Token não foi informado' });
	}

	const parts = authHeader.split(' ');

	if (!(parts.length === 2)) {
		return response.status(401).send({ error: 'Token error' });
	}

	const [scheme, token] = parts;

	if (!/^Bearer$/i.test(scheme)) {
		return response.status(401).send({ error: 'Token malformatado' });
	}

	jwt.verify(token, Secret, (err, decoded) => {
		if (err) {
			return response.status(401).send({ error: 'Token inválido' });
		}

		request.userID = decoded.id;
		return next();
	});
};
