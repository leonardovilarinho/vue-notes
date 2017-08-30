import {http} from './configuracao'

export default {
	criar: ({ content, user_id }) => {
		return http.post('notes', { content, user_id });
	},
	listar: (user_id) => {
		return http.get('notes?user_id=' + user_id);
	},
	apagar: (note_id) => {
		return http.delete('notes/' + note_id);
	}
}