import { GATEWAY_ENDPOINT } from '../axios.config'

export const investment_api = {
    $_fetch_investment_products: () => {
		const url = '/investment/product'
		return GATEWAY_ENDPOINT.get(url)
	},
    $_fetch_investment_details: (id: any) => {
		const url = `/investment/product/${id}`
		return GATEWAY_ENDPOINT.get(url)
	}
}
