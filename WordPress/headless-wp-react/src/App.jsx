import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_WP_API_BASE;

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "");
}

export default function App() {
  const [posts, setPosts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch(
        `${API_BASE}/wp-json/wp/v2/cake?_embed=true`
      );
      const data = await res.json();
      setPosts(data);
    }
    load();
  }, []);

  function addToCart(item) {
    const exists = cart.find((c) => c.id === item.id);

    if (exists) {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function changeQuantity(id, amount) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * 10, 0);

  return (
    <div style={styles.app}>

      <header style={styles.header}>
        <h1>🍰 Emma's Cake Shop</h1>
        <p>Headless CMS powered by WordPress API</p>
      </header>

      <div style={styles.layout}>

        <div style={styles.products}>
          {posts.map((post) => {
            const img =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <div key={post.id} style={styles.card}>
                {img && <img src={img} style={styles.image} />}

                <div style={styles.cardContent}>
                  <h2>{post.title.rendered}</h2>
                  <p>{stripHtml(post.excerpt.rendered)}</p>

                  <button
                    style={styles.button}
                    onClick={() => addToCart(post)}
                  >
                    Add to cart 🍰
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <aside style={styles.cart}>
          <h2>🛒 Cart</h2>
          <p>{totalItems} item(s)</p>
          <p>Total: {totalPrice} kr</p>

          <button onClick={() => setCart([])} style={{
            marginTop: 10,
            padding: "6px 10px",
            background: "#ddd",
            border: "none",
            borderRadius: 6,
            cursor: "pointer"
          }}>
            Clear cart
          </button>

          {cart.length === 0 && <p>No cakes yet</p>}

          {cart.map((item) => {
            const img =
              item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <div key={item.id} style={styles.cartItem}>
                {img && <img src={img} style={styles.cartImage} />}

                <div style={{ flex: 1 }}>
                  <p>{item.title.rendered}</p>

                  <div style={styles.qty}>
                    <button onClick={() => changeQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                  </div>

                  <button
                    style={styles.remove}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </aside>
      </div>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "sans-serif",
    background: "#fff8f0",
    minHeight: "100vh",
  },
  header: {
    padding: 30,
    textAlign: "center",
    background: "#F66F90",
    color: "white",
  },
  layout: {
    display: "flex",
  },
  products: {
    flex: 3,
    padding: 30,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: 20,
  },
  card: {
    background: "white",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: 180,
    objectFit: "cover",
  },
  cardContent: {
    padding: 15,
  },
  button: {
    marginTop: 10,
    padding: "8px 12px",
    background: "#F66F90",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  cart: {
    flex: 1,
    padding: 20,
    background: "#fff",
    borderLeft: "2px solid #eee",
  },
  cartItem: {
    display: "flex",
    gap: 10,
    marginBottom: 15,
    padding: 10,
    background: "#fafafa",
    borderRadius: 10,
  },
  cartImage: {
    width: 70,
    height: 70,
    objectFit: "cover",
    borderRadius: 6,
  },
  qty: {
    display: "flex",
    gap: 8,
    alignItems: "center",
    marginTop: 5,
  },
  remove: {
    marginTop: 5,
    background: "transparent",
    border: "none",
    color: "red",
    cursor: "pointer",
  },
};