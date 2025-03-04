export function formatData(data) {
	return Date(data).toLocalString('pt-BR', {
		month: 'short',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	});
}
