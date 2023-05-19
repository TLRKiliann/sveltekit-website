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

declare class Products: Product[];

export {};
