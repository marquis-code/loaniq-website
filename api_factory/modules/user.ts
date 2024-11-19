import { GATEWAY_ENDPOINT } from '../axios.config'

export const user_api = {
	$_update_passcode: (payload: any) => {
		const url = '/user/update-passcode'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
    $_forgot_transaction_pin: () => {
		const url = '/user/forgot-pin'
		return GATEWAY_ENDPOINT.post(url)
	},
    $_reset_transaction_pin: (payload: any) => {
		const url = '/user/reset-pin'
		return GATEWAY_ENDPOINT.post(url, payload)
	}
}
