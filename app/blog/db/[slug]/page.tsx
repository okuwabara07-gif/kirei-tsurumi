import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllArticles, getArticleBySlug } from '@/lib/articles'
import MarkdownIt from 'markdown-it'

export const revalidate = 3600

const md = new MarkdownIt({
  html: true,
  linkify: true,
})

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image_url ? [article.image_url] : [],
      type: 'article',
      publishedTime: article.published_at,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const htmlContent = md.render(article.content)
  const publishedDate = new Date(article.published_at).toLocaleDateString('ja-JP')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image_url,
    datePublished: article.published_at,
    author: {
      '@type': 'Organization',
      name: 'Kirei Tsurumi',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
        <header style={{ marginBottom: '2rem' }}>
          <span
            style={{
              fontSize: '0.85rem',
              background: '#f9f0f2',
              color: '#8B5E6B',
              padding: '4px 12px',
              borderRadius: '20px',
              display: 'inline-block',
              marginBottom: '1rem',
            }}
          >
            {article.cluster}
          </span>
          <h1
            style={{
              fontFamily: 'serif',
              fontSize: '2rem',
              color: '#3a2428',
              margin: '1rem 0 0.5rem',
              lineHeight: 1.4,
            }}
          >
            {article.title}
          </h1>
          <p style={{ color: '#999', fontSize: '0.9rem' }}>{publishedDate}</p>
          {article.image_url && (
            <img
              src={article.image_url}
              alt={article.title}
              style={{
                width: '100%',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '8px',
                margin: '1.5rem 0',
              }}
            />
          )}
        </header>

        <div
          style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: '#4a4a4a',
          }}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="markdown-content"
        />

        <footer style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e8ddd8' }}>
          <p style={{ color: '#999', fontSize: '0.9rem' }}>
            最終更新: {publishedDate}
          </p>
        </footer>
      </article>

      <style>{`
        .markdown-content {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .markdown-content h2 {
          font-size: 1.5rem;
          color: #3a2428;
          margin: 2rem 0 1rem;
          font-family: serif;
        }
        .markdown-content h3 {
          font-size: 1.2rem;
          color: #3a2428;
          margin: 1.5rem 0 0.75rem;
          font-family: serif;
        }
        .markdown-content p {
          margin: 1rem 0;
        }
        .markdown-content a {
          color: #8B5E6B;
          text-decoration: underline;
        }
        .markdown-content ul,
        .markdown-content ol {
          margin: 1rem 0 1rem 2rem;
        }
        .markdown-content li {
          margin: 0.5rem 0;
        }
        .markdown-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.5rem 0;
        }
        .markdown-content blockquote {
          border-left: 4px solid #e8ddd8;
          padding-left: 1rem;
          margin: 1rem 0;
          color: #666;
        }
        .markdown-content code {
          background: #f5f5f5;
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.9em;
        }
        .markdown-content pre {
          background: #f5f5f5;
          padding: 1rem;
          border-radius: 8px;
          overflow-x: auto;
          margin: 1rem 0;
        }
      `}</style>
    </>
  )
}
