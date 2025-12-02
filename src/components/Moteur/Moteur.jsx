import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { BadgeCheck, ShoppingCart, X } from "lucide-react";


const Moteur = () => {
  const initialProducts = [
    {
      id: 1,
      title: "Filtre à huile Vispa X100",
      brand: "Vispa",
      category: "Filtres",
      price: 29.99,
      image: "https://via.placeholder.com/300x200?text=Filtre+huile",
      stock: 12,
      description: "Filtre à huile haute performance compatible avec plusieurs moteurs populaires.",
    },
    {
      id: 2,
      title: "Bougie d'allumage Vispa S7",
      brand: "Vispa",
      category: "Bougies",
      price: 9.5,
      image: "https://via.placeholder.com/300x200?text=Bougie",
      stock: 40,
      description: "Bougie longue durée, facile à monter.",
    },
    {
      id: 3,
      title: "Courroie de distribution ProFit",
      brand: "ProFit",
      category: "Courroies",
      price: 79.0,
      image: "https://via.placeholder.com/300x200?text=Courroie",
      stock: 5,
      description: "Courroie renforcée pour moteurs essence et diesel.",
    },
    {
      id: 4,
      title: "Kit entretien Vispa (huile + filtre)",
      brand: "Vispa",
      category: "Kits",
      price: 49.99,
      image: "https://via.placeholder.com/300x200?text=Kit+entretien",
      stock: 8,
      description: "Pack économique pour vidange complète.",
    },
    {
      id: 5,
      title: "Injecteur universel",
      brand: "AutoFlow",
      category: "Injecteurs",
      price: 119.99,
      image: "https://via.placeholder.com/300x200?text=Injecteur",
      stock: 3,
      description: "Injecteur calibré, testé en usine.",
    },
  ];

  const [products] = useState(initialProducts);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tous");
  const [sort, setSort] = useState("popular");
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState(null);
  const categories = useMemo(() => ["Tous", ...new Set(products.map((p) => p.category))], [products]);

  const filtered = useMemo(() => {
    let res = products.filter((p) => {
      const matchQuery = `${p.title} ${p.brand} ${p.description}`.toLowerCase().includes(query.toLowerCase());
      const matchCategory = category === "Tous" ? true : p.category === category;
      return matchQuery && matchCategory;
    });

    if (sort === "price_asc") res = res.sort((a, b) => a.price - b.price);
    if (sort === "price_desc") res = res.sort((a, b) => b.price - a.price);
    if (sort === "stock") res = res.sort((a, b) => b.stock - a.stock);

    return res;
  }, [products, query, category, sort]);

  function handleAddToCart(product) {
    setCart((c) => {
      const found = c.find((i) => i.id === product.id);
      if (found) return c.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      return [...c, { ...product, qty: 1 }];
    });
  }

  function handleRemoveFromCart(id) {
    setCart((c) => c.filter((i) => i.id !== id));
  }

  function totalCart() {
    return cart.reduce((s, i) => s + i.price * i.qty, 0).toFixed(2);
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">Moteurs & Pièces — Marketplace</h1>
          <BadgeCheck size={20} className="text-green-600" />
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-3 py-2 rounded border w-64 focus:outline-none"
              placeholder="Rechercher pièce, marque..."
            />
            <Search size={16} className="absolute left-3 top-2.5 opacity-60" />
          </div>

          <div className="flex items-center gap-2">
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="py-2 px-3 border rounded">
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select value={sort} onChange={(e) => setSort(e.target.value)} className="py-2 px-3 border rounded">
              <option value="popular">Popularité</option>
              <option value="price_asc">Prix ↑</option>
              <option value="price_desc">Prix ↓</option>
              <option value="stock">Stock disponible</option>
            </select>

            <button
              onClick={() => setSelected("cart")}
              className="flex items-center gap-2 py-2 px-3 border rounded hover:shadow"
              title="Voir panier"
            >
              <ShoppingCart size={18} /> <span>{cart.length}</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {filtered.length === 0 ? (
          <div className="text-center py-16">Aucun résultat — essaie d'élargir la recherche.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <article key={p.id} className="border rounded-lg overflow-hidden shadow-sm flex flex-col">
                <img src={p.image} alt={p.title} className="h-44 w-full object-cover" />
                <div className="p-3 flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-semibold">{p.title}</h2>
                      <p className="text-sm text-gray-600">{p.brand} • {p.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{p.price} TND</div>
                      <div className="text-xs text-gray-500">Stock: {p.stock}</div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mt-2 line-clamp-3">{p.description}</p>

                  <div className="mt-4 flex items-center gap-2">
                    <button
                      onClick={() => handleAddToCart(p)}
                      className="flex-1 py-2 rounded bg-slate-900 text-white hover:opacity-95"
                    >
                      Ajouter au panier
                    </button>
                    <button onClick={() => setSelected(p)} className="py-2 px-3 border rounded">Détails</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Drawer / Modal simple */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold">{selected === "cart" ? "Panier" : selected.title}</h3>
              <button onClick={() => setSelected(null)} className="p-2">
                <X />
              </button>
            </div>

            <div className="p-4 max-h-[60vh] overflow-auto">
              {selected === "cart" ? (
                <div>
                  {cart.length === 0 ? (
                    <div>Ton panier est vide.</div>
                  ) : (
                    <div className="space-y-3">
                      {cart.map((i) => (
                        <div key={i.id} className="flex items-center justify-between gap-3 border p-3 rounded">
                          <div className="flex items-center gap-3">
                            <img src={i.image} alt={i.title} className="w-16 h-12 object-cover rounded" />
                            <div>
                              <div className="font-medium">{i.title}</div>
                              <div className="text-sm text-gray-500">{i.qty} × {i.price} TND</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">{(i.price * i.qty).toFixed(2)} TND</div>
                            <button onClick={() => handleRemoveFromCart(i.id)} className="py-1 px-2 border rounded">Supprimer</button>
                          </div>
                        </div>
                      ))}

                      <div className="flex justify-between items-center mt-4">
                        <div className="font-bold">Total: {totalCart()} TND</div>
                        <button className="py-2 px-4 rounded bg-green-600 text-white">Passer la commande</button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <img src={selected.image} alt={selected.title} className="w-full h-48 object-cover rounded" />
                  <div>
                    <h4 className="font-semibold text-lg">{selected.title}</h4>
                    <p className="text-sm text-gray-600">Marque: {selected.brand}</p>
                    <p className="mt-2">{selected.description}</p>
                    <div className="mt-4">Prix: <span className="font-bold">{selected.price} TND</span></div>
                    <div className="mt-4 flex gap-2">
                      <button onClick={() => { handleAddToCart(selected); setSelected(null); }} className="py-2 px-3 rounded bg-slate-900 text-white">Ajouter au panier</button>
                      <button onClick={() => setSelected(null)} className="py-2 px-3 border rounded">Fermer</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Moteur;
