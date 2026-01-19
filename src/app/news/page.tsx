import { getNews, NewsItem } from '@/lib/content';

export default async function NewsPage() {
  const news = await getNews();

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">News</h1>
      <div className="space-y-4">
        {news.map((item: NewsItem) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
            <div className="flex space-x-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">CPE News</span>
                  <span className="text-gray-500">@cpe-news</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <div className="mt-2">
                  <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                  {item.excerpt && <p className="text-gray-700 mt-1">{item.excerpt}</p>}
                  <div className="mt-2 text-gray-800" dangerouslySetInnerHTML={{ __html: item.contentHtml }} />
                </div>
                <div className="flex items-center justify-between mt-4 text-gray-500">
                  <button className="flex items-center space-x-1 hover:text-blue-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}