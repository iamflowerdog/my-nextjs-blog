import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename, folder) {
  let { meta, default: component } = await import(
    `../pages/${folder}/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles(folder='articles') {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx', '*/*.mdx'], {
    cwd: path.join(process.cwd(), `src/pages/${folder}`),
  })

  let articles = await Promise.all(articleFilenames.map((file) => {
    return importArticle(file, folder)
  }))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
