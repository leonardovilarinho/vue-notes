import {http} from './configuracao'

export default {
	registrar: ({ name, email, password }) => {
		return http.post('users', { name, email, password });
	},

	logar: ({ email, password }) => {
		return http.post('users/verify', {email, password});
	},
}