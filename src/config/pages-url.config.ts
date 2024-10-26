class DASHBOARD {
	private root = '/'

	MAIN = this.root
	TOUR_DETAIL = (slug: number | string) => {
		return `/tour/${slug}`
	}
	CARGO_TRANSPORTATION = `${this.root}cargo-transportation`
	AUTH = `${this.root}auth`
}
export const DASHBOARD_PAGES = new DASHBOARD()
