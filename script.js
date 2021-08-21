var vm = new Vue({
	el: '#example',
	data: {
		message: 'Hello'
	},
	created: {
		
	},
	computed: {
		reversedMessage: function () {
			return this.message.split('').reverse().join('')
		}
	}
})
