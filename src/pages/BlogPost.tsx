import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  // Simple markdown-like rendering for ## headers, **bold**, - lists
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      if (trimmed === "---") return <hr key={i} className="my-8 border-border" />;
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={i} className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
            {trimmed.slice(3)}
          </h2>
        );
      }
      if (trimmed.startsWith("- ")) {
        const text = trimmed.slice(2);
        return (
          <li key={i} className="font-body text-muted-foreground leading-relaxed ml-4 list-disc">
            <span dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
          </li>
        );
      }
      if (/^\d+\./.test(trimmed)) {
        return (
          <li key={i} className="font-body text-muted-foreground leading-relaxed ml-4 list-decimal">
            {trimmed.replace(/^\d+\.\s*/, "")}
          </li>
        );
      }
      if (trimmed.startsWith("*") && trimmed.endsWith("*")) {
        return (
          <p key={i} className="font-body text-muted-foreground italic leading-relaxed my-2">
            {trimmed.slice(1, -1)}
          </p>
        );
      }
      return (
        <p key={i} className="font-body text-muted-foreground leading-relaxed my-2"
           dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-12 bg-primary">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-body text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-primary-foreground/60 text-sm font-body">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-lg mb-10 shadow-md"
          />
          <article className="prose-custom">
            {renderContent(post.content)}
          </article>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
