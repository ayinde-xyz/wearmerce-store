import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { Metadata, ResolvingMetadata } from "next";

interface ProductPageProps {
	params: Promise<{
		productId: string;
	}>;
}

export async function generateMetadata(
	{ params }: ProductPageProps,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const { productId } = await params;
	const product = await getProduct(productId);

	if (!product) {
		return {
			title: "Product Not Found",
			description: "The product you are looking for does not exist.",
		};
	}

	// optionally access and extend (rather than replace) parent metadata
	// const previousImages = (await parent).openGraph?.images || [];

	return {
		title: product.name,
		description: `Shop ${product.name} from our collection of ${product.category.name}.`,
		openGraph: {
			title: product.name,
			type: "website",
			url: `https://${process.env.VERCEL_URL}/product/${product.id}`,
			siteName: "Ecommerce Store",
			description: `Shop ${product.name} from our collection of ${product.category.name}.`,
			images: [product.images[0].url],
		},
		twitter: {
			card: "summary_large_image",
			title: product.name,
			description: `Shop ${product.name} from our collection of ${product.category.name}.`,
			site: "@ayinde_xyz",
			creator: "@ayinde_xyz",
			images: [
				{
					url: product.images[0].url,
					alt: "Built by Ayinde AbdurRahman",
				},
			],
		},
	};
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
	const { productId } = await params;
	const product = await getProduct(productId);
	const suggestedProducts = await getProducts({
		categoryId: product?.category?.id,
	});

	if (!product) {
		return null;
	}

	return (
		<div className="bg-white">
			<Container>
				<div className="px-4 py-10 sm:px-6 lg:px-8">
					<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
						<Gallery images={product.images} />
						<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
							<Info data={product} />
						</div>
					</div>
					<hr className="my-10" />
					<ProductList title="Related Items" products={suggestedProducts} />
				</div>
			</Container>
		</div>
	);
};

export default ProductPage;
