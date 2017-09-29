import {http} from './configuracao'

export default {
	criar: ({ conteudo, usuario_id }) => {
		return http.post('notas', { conteudo, usuario_id });
	},
	listar: (usuario_id) => {
		return http.get('notas?usuario_id=' + usuario_id);
	},
	apagar: (nota_id) => {
		return http.post('notas/' + nota_id);
	}
}