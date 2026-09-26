 import { useState } from "react";

export default function App() {
  const [category, setCategory] = useState("General");
  const [search, setSearch] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const [dark, setDark] = useState(false);

  const news = [
    {
      title: "Latest Technology News",
      description:
        "Discover the latest technology, AI, software and digital innovations.",
      category: "Technology",
      icon: "💻",
    },
    {
      title: "Latest Sports News",
      description:
        "Get the latest sports updates, scores and important events.",
      category: "Sports",
      icon: "⚽",
    },
    {
      title: "Business News Today",
      description:
        "Read the latest business, finance and market updates.",
      category: "Business",
      icon: "📈",
    },
    {
      title: "Health News",
      description:
        "Stay updated with the latest health and wellness information.",
      category: "Health",
      icon: "🏥",
    },
    {
      title: "World News",
      description:
        "Latest national and international news from around the world.",
      category: "General",
      icon: "🌎",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Explore the latest developments in artificial intelligence.",
      category: "Technology",
      icon: "🤖",
    },
  ];

  const filteredNews = news.filter((item) => {
    const categoryMatch =
      category === "General" || item.category === category;

    const searchMatch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  function addBookmark(article) {
    if (!bookmarks.some((item) => item.title === article.title)) {
      setBookmarks([...bookmarks, article]);
      alert("Article bookmarked!");
    } else {
      alert("Already bookmarked!");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark ? "#111827" : "#f3f4f6",
        color: dark ? "white" : "#111827",
        fontFamily: "Arial",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "#1e3a8a",
          color: "white",
          padding: "25px",
          textAlign: "center",
        }}
      >
        <h1>📰 News Aggregator</h1>
        <p>Latest News • Search • Categories • Bookmarks</p>
      </header>

      {/* Search */}
      <section
        style={{
          padding: "25px",
          textAlign: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "60%",
            maxWidth: "600px",
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <button
          onClick={() => setSearch(search)}
          style={{
            marginLeft: "10px",
            padding: "14px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          🔍 Search
        </button>
      </section>

      {/* Categories */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        {["General", "Technology", "Sports", "Business", "Health"].map(
          (item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              style={{
                padding: "12px 18px",
                border: "none",
                borderRadius: "8px",
                background:
                  category === item ? "#2563eb" : "#374151",
                color: "white",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          )
        )}

        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "12px 18px",
            border: "none",
            borderRadius: "8px",
            background: "#111827",
            color: "white",
            cursor: "pointer",
          }}
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* News */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "30px 20px",
        }}
      >
        <h2>{category} News</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {filteredNews.map((article, index) => (
            <article
              key={index}
              style={{
                background: dark ? "#1f2937" : "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
              }}
            >
              <div
                style={{
                  height: "130px",
                  background: dark ? "#374151" : "#e5e7eb",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "60px",
                }}
              >
                {article.icon}
              </div>

              <h3>{article.title}</h3>

              <p>{article.description}</p>

              <p>
                <b>Category:</b> {article.category}
              </p>

              <button
                onClick={() => addBookmark(article)}
                style={{
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "7px",
                  background: "#2563eb",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                🔖 Bookmark
              </button>
            </article>
          ))}
        </div>

        {/* Bookmarks */}
        <section
          style={{
            marginTop: "40px",
            padding: "20px",
            background: dark ? "#1f2937" : "white",
            borderRadius: "12px",
          }}
        >
          <h2>🔖 My Bookmarks</h2>

          {bookmarks.length === 0 ? (
            <p>No bookmarked articles yet.</p>
          ) : (
            bookmarks.map((item, index) => (
              <p key={index}>
                {item.icon} {item.title}
              </p>
            ))
          )}
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          marginTop: "40px",
          padding: "25px",
          background: "#111827",
          color: "white",
          textAlign: "center",
        }}
      >
        <h3>News Aggregator Project</h3>
        <p>React • Node.js • MongoDB • REST API</p>
        <p>© 2026 KLU Academic Project</p>
      </footer>
    </div>
  );
}