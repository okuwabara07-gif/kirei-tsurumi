import { createClient } from '@supabase/supabase-js'

export interface Article {
  slug: string
  title: string
  cluster: string
  excerpt: string
  content: string
  image_url: string
  published_at: string
  views: number
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function getAllArticles(): Promise<Article[]> {
  try {
    const { data, error } = await supabase
      .from('kirei_articles')
      .select('slug,title,cluster,excerpt,content,image_url,published_at,views')
      .order('published_at', { ascending: false })

    if (error) {
      console.error('Supabase fetch error:', error)
      return []
    }

    return data || []
  } catch (err) {
    console.error('Error fetching articles:', err)
    return []
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const { data, error } = await supabase
      .from('kirei_articles')
      .select('slug,title,cluster,excerpt,content,image_url,published_at,views')
      .eq('slug', slug)
      .single()

    if (error) {
      console.error('Supabase fetch error:', error)
      return null
    }

    return data || null
  } catch (err) {
    console.error('Error fetching article:', err)
    return null
  }
}
