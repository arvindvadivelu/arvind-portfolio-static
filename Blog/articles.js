// articles.js

const articles = [
    {
        id: 0,
        title: "Handling 10k RPS: Caching Strategies with Redis",
        category: "System Design",
        date: "Jan 28, 2026",
        readTime: "8 Min Read",
        desc: "When vertical scaling hits a wall, caching is your best friend. We explore patterns like Cache-Aside, Write-Through, and solving the Thundering Herd problem using Redis in a Spring Boot environment.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
        content: `
            <p class="text-xl font-medium text-white mb-8">When a standard monolithic application starts facing high concurrency...</p>
            <h3>The Problem: The Thundering Herd</h3>
            <p>Imagine 1000 users requesting the same resource simultaneously...</p>
            <h3>Strategy 1: Cache-Aside (Lazy Loading)</h3>
            <pre><code class="language-java">// Pseudo Java Code
public Product getProduct(String id) {
    String cacheKey = "product:" + id;
    Product product = redis.get(cacheKey);
    if (product != null) return product;
    
    product = db.findById(id);
    redis.set(cacheKey, product, 60, TimeUnit.MINUTES);
    return product;
}</code></pre>
            <h3>Conclusion</h3>
            <p>Redis is not just a key-value store; it's a critical component...</p>
        `
    },
    {
        id: 1,
        title: "Java Threads vs Virtual Threads: The Project Loom Revolution",
        category: "Backend",
        date: "Jan 15, 2026",
        readTime: "12 Min Read",
        desc: "Project Loom changes the game for high-throughput Java applications. I benchmarked standard platform threads against the new Virtual Threads in Java 21 to see the real-world performance gains.",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2000&auto=format&fit=crop",
        content: `
            <p class="text-xl font-medium text-white mb-8">Java 21 introduced Virtual Threads...</p>
            <h3>The One-Thread-Per-Request Model</h3>
            <p>Historically, web servers like Tomcat assigned one OS thread per HTTP request...</p>
        `
    },
    
];