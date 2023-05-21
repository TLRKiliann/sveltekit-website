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

declare class Product {
	id: string;
	product_name: string;
	price: number;
	product_stock: number;
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
