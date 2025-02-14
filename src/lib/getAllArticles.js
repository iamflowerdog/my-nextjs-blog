import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename, folder) {
  let { meta, default: component } = await import(
    `../pages/${folder}/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    folder,
    component,
  }
}

export async function getAllArticles(folders=['articles', 'life']) {
  let articles = await Promise.all(folders.flatMap(async (folder) => {
    let articleFilenames = await glob(['*.mdx', '*/index.mdx', '*/*.mdx'], {
      cwd: path.join(process.cwd(), `src/pages/${folder}`),
    })

    return Promise.all(articleFilenames.map((file) => {
      console.log(file, folder)
      return importArticle(file, folder)
    }))
  }))

  // Flatten the array of articles
  articles = articles.flat()

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
