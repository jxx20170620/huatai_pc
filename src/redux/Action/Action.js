	export function alertMessage(messageText, hideTime) {
		return {
			type: 'ALERT_SHOW',
			messageText,
			hideTime
		};
	}
