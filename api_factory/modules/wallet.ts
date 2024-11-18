import { GATEWAY_ENDPOINT } from '../axios.config'

export const wallet_api = {
    $_fetch_transaction_history: () => {
		const url = '/wallet/transaction-history'
		return GATEWAY_ENDPOINT.get(url)
	}
}
