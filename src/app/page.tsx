import { db } from "@/db";
import { products } from "@/db/schema";
import { ProductCard } from "@/components/ProductCard";

export default async function Home() {
  const allProducts = await db.select().from(products);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Nike Store
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Featured Products
          </h2>
          <p className="mt-2 text-gray-600">
            Check out our latest Nike collection
          </p>
        </div>
        {allProducts.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 p-12 text-center">
            <p className="text-gray-500">
              No products found. Run the seed script to add sample products.
            </p>
            <code className="mt-2 block text-sm text-gray-400">
              npx tsx src/db/seed.ts
            </code>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
