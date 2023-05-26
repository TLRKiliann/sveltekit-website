// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare class DataCookie {
	title: string;
	tastyCookie: string;
}

declare class DataProfile {
	name: string;
	lastname: string;
	phone: string;
}

declare class Product {
	id: string;
	name: string;
	price: number;
	logo: string;
	quantity: number;
}

declare class CartItem {
	id: string;
	quantity: number;
}

declare class Products {
	products: Product[];
}

declare class New {
	id: number;
	title: string;
	article: string;
	category: string;
}

declare class News {
	news: New[];
}

declare class Member {
	id: number;
	name: string;
	age: number;
	status: string;
}

declare class Members {
	members: Member[];
}

export {};
