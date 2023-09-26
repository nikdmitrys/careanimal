export const required = value => {
	if (value) return null;
	return 'Поле обязательное!';
};

export const radio_required = value => {
	if (value) return null;
	return '*Сделайте выбор';
};

export const checkbox_required = value => {
	if (value) return null;
	else {
		return '*Необходимо подтверждение';
	}
};

export const file_required = value => {
	if (value) return null;
	else return '*Добавьте фотографию';
};
